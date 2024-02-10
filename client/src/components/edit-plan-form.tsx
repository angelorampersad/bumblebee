"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { CheckCircle2Icon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const profileFormSchema = z.object({
  id: z.string(),
  productId: z.string(),
  published: z.boolean().default(false),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(60, {
      message: "Name must not be longer than 60 characters.",
    }),
  description: z.string({
    required_error:
      "Please describe the intended purpose of this measurement plan.",
  }),
  specifications: z
    .array(
      z.object({
        id: z.string().optional(),
        test: z.string({ required_error: "Please provide a test case." }),
        event: z.string({ required_error: "Please provide an event." }),
        contexts: z.any(),
      })
    )
    .optional(),
});

type PlanFormValues = z.infer<typeof profileFormSchema>;

interface FieldArray {
  index: number;
  form: any;
  field: any;
  specActions: any;
}

interface NestedFieldArray {
  parentIndex: any;
  childIndex: any;
  form: any;
  field: any;
  ctxActions: any;
}

interface DbResponse {
  id: string;
  productId: string;
  published: boolean;
  name: string;
  description: string;
  label: string;
  tier: string;
  pillar: string;
  createdAt: string;
  updatedAt: string;
}

interface PlanData {
  plan: {
    id: string;
    productId: string;
    published: boolean;
    name: string;
    description: string;
    label: string;
    tier: string;
    pillar: string;
    createdAt: Date;
    updatedAt: Date;
    specifications:
      | {
          id: string;
          test: string;
          event: string;
          contexts: string[];
          planId: string | null;
        }[];
  } | null;
}

const NestedFieldArray = ({
  parentIndex,
  childIndex,
  form,
  field,
  ctxActions,
}: NestedFieldArray) => (
  <FormField
    control={form.control}
    key={field.id}
    name={`specifications.${parentIndex}.contexts.${childIndex}`}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <div className="relative flex items-center">
            <Input
              placeholder="iglu:jet.cust/cx_basket/jsonschema/1-0-0"
              {...field}
            />
            <Button
              variant={"outline"}
              onClick={() => ctxActions.ctxRemove(childIndex)}
            >
              <Cross1Icon className="h-3.5 w-3.5 text-muted-foreground/70 opacity-75" />
            </Button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const FieldArray = ({ index, form, field, specActions }: FieldArray) => {
  const {
    fields: ctxFields,
    append: ctxAppend,
    remove: ctxRemove,
  } = useFieldArray({
    name: `specifications[${index}].contexts`,
    control: form.control,
  });

  return (
    <fieldset name={`specifications[${index}]`} key={field.id}>
      <FormField
        control={form.control}
        key={`specifications[${index}].test`}
        name={`specifications[${index}].test`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className={cn(index !== 0 && "sr-only")}>
              Specifications
            </FormLabel>
            <FormDescription className={cn(index !== 0 && "sr-only")}>
              Tests, Events and contexts.
            </FormDescription>
            <FormControl>
              <Input placeholder="GIVEN abc WHEN def THEN ghi" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        key={`specifications[${index}].event`}
        name={`specifications[${index}].event`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder="iglu:jet.cust/basket_add/jsonschema/1-0-1"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {ctxFields.map((ctxField, ctxIndex) => (
        <NestedFieldArray
          key={ctxField.id}
          parentIndex={index}
          childIndex={ctxIndex}
          form={form}
          field={ctxField}
          ctxActions={{
            ctxField,
            ctxAppend,
            ctxRemove,
          }}
        />
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2 h-8 px-2 lg:px-3 opacity-75"
        onClick={() => specActions.specRemove(index)}
      >
        <TrashIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70 opacity-75" />
        Remove specification
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2 h-8 px-2 lg:px-3 opacity-75"
        onClick={() => ctxAppend("")}
      >
        <PlusCircle className="mr-2 h-3.5 w-3.5 text-muted-foreground/70 opacity-75" />
        Add context
      </Button>
    </fieldset>
  );
};

export function EditPlanForm({ plan }: PlanData) {
  const [dbResponse, setDbResponse] = useState<DbResponse>({
    id: "",
    productId: "",
    published: false,
    name: "",
    description: "",
    label: "",
    tier: "",
    pillar: "",
    createdAt: "",
    updatedAt: "",
  });
  const [deleteCheckPoint, setDeleteCheckPoint] = useState(false);
  const router = useRouter();
  const params = useParams<{ productId: string }>();

  const onSubmit: SubmitHandler<PlanFormValues> = async (data) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch("/api/plan", requestOptions);
    const res = await response.json();

    if (response.status == 200) {
      router.refresh();
    }

    setDbResponse(res);
  };

  const defaultValues: Partial<PlanFormValues> = {
    id: plan?.id,
    productId: params.productId,
    published: plan?.published,
    name: plan?.name,
    description: plan?.description,
    specifications: plan?.specifications,
  };

  const form = useForm<PlanFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    fields: specFields,
    append: specAppend,
    remove: specRemove,
  } = useFieldArray({
    name: "specifications",
    control: form.control,
  });

  if (deleteCheckPoint) {
    return (
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="destructive"
          size="default"
          className="mt-2"
          onClick={async () => {
            const requestOptions = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: plan?.id }),
            };

            const response = await fetch("/api/plan", requestOptions);
            const res = await response.json();

            if (response.status == 200) {
              router.replace(`/products/${params.productId}/integrations`);
              router.refresh();
            }
          }}
        >
          Yes, delete the plan
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="default"
          className="mt-2"
          onClick={() => setDeleteCheckPoint(false)}
        >
          Cancel
        </Button>
      </div>
    );
  } else if (dbResponse && dbResponse.id) {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CheckCircle2Icon style={{ marginRight: ".5rem" }} /> Measurement plan
          has been updated.
        </div>
      </>
    );
  } else {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Feature XYZ" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of this measurement plan.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="A measurement plan for feature XYZ in the XYZ pillar."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is a description for the measurement plan.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {specFields.map((field, index) => (
              <FieldArray
                key={field.id}
                index={index}
                form={form}
                field={field}
                specActions={{
                  specFields,
                  specAppend,
                  specRemove,
                }}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() =>
                specAppend({ event: "", contexts: [""], test: "" })
              }
            >
              Add specification
            </Button>
          </div>

          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Published</FormLabel>
                  <FormDescription>
                    When the plan is ready for implementation toggle the flag.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-2">
            <Button type="submit">Save</Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => setDeleteCheckPoint(true)}
            >
              Delete
            </Button>
          </div>
        </form>
      </Form>
    );
  }
}
