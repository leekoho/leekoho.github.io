import { useEffect, useState } from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ArticleImageLightbox() {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-article-body]")
    if (!article) return
    const images = [...article.querySelectorAll<HTMLImageElement>("img")].filter(
      (image) => !image.closest("a, button"),
    )
    for (const image of images) {
      image.tabIndex = 0
      image.setAttribute("role", "button")
      image.setAttribute("aria-haspopup", "dialog")
    }
    const open = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && !["Enter", " "].includes(event.key)) return
      const target = event.target
      if (!(target instanceof HTMLImageElement) || !images.includes(target) || !target.naturalWidth)
        return
      event.preventDefault()
      setImage({ src: target.currentSrc || target.src, alt: target.alt })
    }
    article.addEventListener("click", open)
    article.addEventListener("keydown", open)
    return () => {
      article.removeEventListener("click", open)
      article.removeEventListener("keydown", open)
      for (const image of images) {
        image.removeAttribute("tabindex")
        image.removeAttribute("role")
        image.removeAttribute("aria-haspopup")
        image.removeAttribute("aria-label")
      }
    }
  }, [])

  return (
    <Dialog
      open={Boolean(image)}
      onOpenChange={(open) => {
        if (!open) setImage(null)
      }}
    >
      <DialogContent className="w-auto max-w-[92vw] sm:max-w-[92vw]">
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[82vh] max-w-[92vw] object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
