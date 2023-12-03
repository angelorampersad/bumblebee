"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation'

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const activeLink = "text-sm font-medium transition-colors hover:text-primary";
  const unactiveLink = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={pathname === '/' ? activeLink : unactiveLink}
      >
        Overview
      </Link>
      {/* <Link
        href="/insights"
        className={pathname === '/insights' ? activeLink : unactiveLink}
      >
        Insights
      </Link> */}
      <Link
        href="/integrations"
        className={pathname === '/integrations' ? activeLink : unactiveLink}
      >
        Integrations
      </Link>
      <Link
        href="/settings"
        className={pathname === '/settings' ? activeLink : unactiveLink}
      >
        Settings
      </Link>
    </nav>
  )
}