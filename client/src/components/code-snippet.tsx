"use client";

import { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeSnippet {
  data:
    | {
        id: string;
        test: string;
        event: string;
        contexts: string[];
        planId: string | null;
      }[]
    | undefined;
}

export const CodeSnippet = ({ data }: CodeSnippet) => {
  const snippetArray= data?.map((spec): any => {
    return {
      test: spec.test,
      jsSnippet: `
            snowplow('trackSelfDescribingEvent', {
                event: {
                    schema: '${spec.event}',
                    data: {}
                },
                context: [
                    ${spec.contexts
                      .map(
                        (ctx) =>
                          `{
                        schema: '${ctx}',
                        data: {
                            something: 'important'
                        }
                    }, `
                      )
                      .join("")}
                ]
            });
        `,
      iosSnippet: `
        let data = [${spec.contexts
          .map((ctx) => `"something": "important", `)
          .join("")}];
        let event = SelfDescribing(schema: "${spec.event}", payload: data)
        tracker.track(event)
    `,
      kotlinSnippet: `
        val data = mapOf(${spec.contexts
          .map((ctx) => `"something" to "important", `)
          .join("")})
        val json = SelfDescribingJson(
            "${spec.event}",
            data
        )
        val event = SelfDescribing(json)
    `,
    };
  });

  const [activeTab, setActiveTab] = useState("web");
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <>
      {snippetArray?.map((snippet, index) => {
        return (
          <Tabs
            key={index}
            defaultValue="web"
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="ios">iOS</TabsTrigger>
              <TabsTrigger value="android">Android</TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <div>
                <p className="text-xl text-muted-foreground">{snippet.test}</p>
                <CodeBlock
                  language="js"
                  text={snippet.jsSnippet}
                  theme={dracula}
                  showLineNumbers={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="ios">
              <div>
                <p className="text-xl text-muted-foreground">{snippet.test}</p>
                <CodeBlock
                  language="swift"
                  text={snippet.iosSnippet}
                  theme={dracula}
                  showLineNumbers={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="android">
              <div>
                <p className="text-xl text-muted-foreground">{snippet.test}</p>
                <CodeBlock
                  language="kotlin"
                  text={snippet.kotlinSnippet}
                  theme={dracula}
                  showLineNumbers={false}
                />
              </div>
            </TabsContent>
          </Tabs>
        );
      })}
    </>
  );
};
