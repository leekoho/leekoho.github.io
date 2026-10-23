import { clsx } from "cn"
import type { ReactNode } from "react"

import logo from "@/assets/logo.svg?raw"
import { PROFILE } from "@/consts"

export default function Header({ pathname, children }: { pathname: string; children: ReactNode }) {
  const links = [
    { href: "/posts", label: "Posts" },
    { href: "/tags", label: "Tags" },
    { href: "/about", label: "About" },
  ]
  return (
    <header className="page-rule relative z-20 flex h-16 items-center gap-3 px-4 sm:gap-6 sm:px-6">
      <a
        className="inline-flex shrink-0 items-center gap-2 text-lg leading-none font-medium tracking-tight text-foreground no-underline sm:gap-3 sm:text-xl [&_svg]:size-full"
        href="/"
      >
        <span
          className="size-7 sm:size-8"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: logo }}
        />
        <span className="shimmer text-muted-foreground">{PROFILE.name}</span>
      </a>
      <nav className="ml-auto flex gap-4 self-stretch sm:gap-6">
        {links.map(({ href, label }) => (
          <a
            key={href}
            className={clsx(
              "relative flex items-center text-sm tracking-wide  no-underline hover:text-foreground",
              pathname === href || pathname.startsWith(`${href}/`)
                ? "text-foreground"
                : "text-muted-foreground",
            )}
            href={href}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="border-l border-border pl-3 sm:pl-4">{children}</div>
    </header>
  )
}
