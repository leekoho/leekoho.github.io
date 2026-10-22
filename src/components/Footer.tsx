import { CodeXml, Rss } from "lucide-react"

import { PROFILE } from "@/consts"

export default function Footer() {
  const github = PROFILE.links.find((link) => link.label === "GitHub")
  return (
    <footer className="min-w-0" aria-label="站点信息">
      <div className="section-divider page-rule" aria-hidden="true" />
      <div className="flex items-center justify-between gap-4 px-4 py-4 text-muted-foreground sm:px-6">
        <nav className="-ml-2 flex items-center gap-2" aria-label="站点链接">
          {github && (
            <a
              className="inline-flex size-8 items-center justify-center hover:text-foreground pointer-coarse:size-11"
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="leekoho 的 GitHub"
              title="GitHub"
            >
              <CodeXml size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          )}
          <a className="inline-flex size-8 items-center justify-center hover:text-foreground pointer-coarse:size-11" href="/feed.xml" aria-label="RSS 订阅" title="RSS 订阅">
            <Rss size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </nav>
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  )
}
