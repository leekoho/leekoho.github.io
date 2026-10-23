import { type LucideIcon, Monitor, Moon, Sun } from "lucide-react"
import { useMemo, useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system"

declare global {
  interface Window {
    __themeController?: { getPreference(): Theme; apply(value: string): void }
  }
}

const options: { value: Theme; label: string; icon: LucideIcon }[] = [
  { value: "light", label: "浅色", icon: Sun },
  { value: "dark", label: "深色", icon: Moon },
  { value: "system", label: "跟随系统", icon: Monitor },
] as const

export default function ThemeSwitcher() {
  const theme = useSyncExternalStore(
    (callback: () => void) => {
      window.addEventListener("theme-change", callback)
      return () => window.removeEventListener("theme-change", callback)
    },
    () => window.__themeController?.getPreference() ?? "system",
    () => "system",
  )

  const themeOption = useMemo(() => options.find((o) => o.value === theme)!, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-lg" aria-label="Theme Changes">
            <themeOption.icon className="size-4" aria-hidden="true" />
          </Button>
        }
      />
      <DropdownMenuContent align="center">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => window.__themeController?.apply(value)}
        >
          {options.map(({ value, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className="min-h-9 gap-2 pointer-coarse:min-h-11"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
