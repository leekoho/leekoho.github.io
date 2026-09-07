export const PROFILE = {
  name: "leekoho",
  description: "",
  tags: ["Developer"],
  city: "长沙",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/leekoho",
    },
    {
      label: "V2ex",
      url: "https://v2ex.com/member/leekoho",
    },
  ],
  uses: [
    {
      category: "硬件设备",
      items: [
        {
          name: "Mac mini M4",
          description: "16GB 内存，日常桌面开发主机。",
        },
        {
          name: "Dell U2715H",
          description: "27 英寸 2K 显示器。",
        },
        {
          name: "Keychron K8",
          description: "87 键双模无线机械键盘，适配 macOS 键位。",
        },
        {
          name: "Logitech MX Master 3S",
          description: "人体工学鼠标，静音按键，支持在 Mac 设备之间切换。",
        },
      ],
    },
    {
      category: "编码工具",
      items: [
        { name: "Zed", description: "日常编码使用的编辑器。" },
        {
          name: "Ghostty + zsh",
          description: "GPU 加速终端，搭配 zsh 和 Oh My Zsh。",
        },
        { name: "JetBrains Mono", description: "日常编码使用的等宽字体。" },
      ],
    },
    {
      category: "日常软件",
      items: [
        { name: "Chrome", description: "用于日常浏览与开发调试。" },
        {
          name: "Raycast",
          description: "应用启动器，用于替代 Spotlight，集中管理快捷指令。",
        },
        { name: "Karabiner", description: "macOS 键位映射与快捷键定制工具。" },
        {
          name: "Tailscale",
          description: "基于 WireGuard 的组网工具，用于连接不同设备。",
        },
      ],
    },
  ],
} as const

export const SITE_TITLE: string = "Blog · leekoho"
export const SITE_DESCRIPTION: string = "写给此刻，也留给以后。"
