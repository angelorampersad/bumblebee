"use client";

import Link from "next/link"
import { usePathname, useParams } from 'next/navigation'

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams<{ productId: string }>()
  const activeLink = "text-sm font-medium transition-colors hover:text-primary";
  const unactiveLink = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href={`/products/${params.productId}`}
        className={pathname === '/' ? activeLink : unactiveLink}
      >
        Dashboard
      </Link>
      <Link
        href={`/products/${params.productId}/integrations`}
        className={pathname === `${params.productId}/integrations` ? activeLink : unactiveLink}
      >
        Integrations
      </Link>
      <Link
        href={`/products/${params.productId}/settings`}
        className={pathname === `${params.productId}/settings` ? activeLink : unactiveLink}
      >
        Settings
      </Link>
    </nav>
  )
}