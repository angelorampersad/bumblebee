import { Metadata } from "next";
import { redirect } from "next/navigation";
import { UserAuthForm } from "@//components/user-auth-form";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function AuthenticationPage() {
  const session = await getServerSession(options);
  
  if (session) {
    redirect("/");
  } else {
    return (
      <>
        <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              JET Analytics Platform Hub
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This portal has saved me countless hours of work and
                  helped me deliver amazing value to the business faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-sm">Someone and maybe you..</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p className="text-sm text-muted-foreground">
                  Use the available authentication methods to login.
                </p>
              </div>
              <UserAuthForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}
