"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image";
import bumblebeeIcon from '../../public/bumblebee.svg'

import { cn } from "@/lib/utils"

export function Logo({
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
     <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          priority
          src={bumblebeeIcon}
          alt="Follow us on Twitter"
          height={64}
          width={64}
        />
        <span className="hidden font-bold sm:inline-block">
          Bumblebee
        </span>
      </Link>
    </nav>
  )
}