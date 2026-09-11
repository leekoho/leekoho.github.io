export const PROFILE = {
  name: "leekoho",
  tags: ["前端开发"],
  city: "长沙",
  email: "leekoho95@mail.com",
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
          label: "桌面主机",
          name: "Mac mini M4",
          icon: "cpu",
          description: "16GB 内存，日常桌面开发主机。",
        },
        {
          label: "显示器",
          name: "Dell U2715H",
          icon: "monitor",
          description: "27 英寸 2K 显示器。",
        },
        {
          label: "键盘",
          name: "Keychron K8",
          icon: "keyboard",
          description: "87 键双模无线机械键盘，适配 macOS 键位。",
        },
        {
          label: "鼠标",
          name: "MX Master 3S",
          icon: "mouse",
          description: "人体工学鼠标，静音按键，支持在 Mac 设备之间切换。",
        },
      ],
    },
    {
      category: "编码工具",
      items: [
        { label: "编辑器", name: "Zed", icon: "code", description: "日常编码使用的编辑器。" },
        {
          label: "终端",
          name: "Ghostty + zsh",
          icon: "terminal",
          description: "GPU 加速终端，搭配 zsh 和 Oh My Zsh。",
        },
        {
          label: "等宽字体",
          name: "JetBrains Mono",
          icon: "type",
          description: "日常编码使用的等宽字体。",
        },
      ],
    },
    {
      category: "日常软件",
      items: [
        { label: "浏览器", name: "Chrome", icon: "globe", description: "用于日常浏览与开发调试。" },
        {
          label: "启动器",
          name: "Raycast",
          icon: "command",
          description: "应用启动器，用于替代 Spotlight，集中管理快捷指令。",
        },
        {
          label: "键位映射",
          name: "Karabiner",
          icon: "keyboard",
          description: "macOS 键位映射与快捷键定制工具。",
        },
        {
          label: "内网组网",
          name: "Tailscale",
          icon: "network",
          description: "基于 WireGuard 的组网工具，用于连接不同设备。",
        },
      ],
    },
  ],
} as const

export const SITE_TITLE: string = "Blog · leekoho"
export const SITE_DESCRIPTION: string = "记录技术问题、解决过程和阅读笔记。"
