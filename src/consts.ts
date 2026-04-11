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
          description: "性能极强的新世代桌面开发主力机，体积极小且静音 (16GB RAM)",
        },
        {
          name: "Dell U2715H",
          description: "经典 27 英寸 2K 显示器，色彩精准且性能极其稳定",
        },
        {
          name: "Keychron K8",
          description: "87 键紧凑型机械键盘，双模无线，完美契合 macOS 快捷键布局",
        },
        {
          name: "Logitech MX Master 3S",
          description: "生产力人体工学鼠标，极度静音，能够跨 Mac 终端无缝切换",
        },
      ],
    },
    {
      category: "编码工具",
      items: [
        { name: "Zed", description: "新一代高性能代码编辑器，速度极快，结合丰富拓展作为日常主力" },
        {
          name: "Ghostty + zsh",
          description: "现代极速且 GPU 加速的终端环境，配合 Oh My Zsh 提升开发效率",
        },
        { name: "JetBrains Mono", description: "平时非常喜欢写代码用的一款专属且清晰的等宽字体" },
      ],
    },
    {
      category: "日常软件",
      items: [
        { name: "Chrome", description: "兼顾高效开发调试与工作访问的主力网页浏览器" },
        {
          name: "Raycast",
          description: "全面替代了 Spotlight 的启动器，提供海量的快捷指令与功能箱",
        },
        { name: "Karabiner", description: "macOS 必备改键神器，实现高度定制化的底层键盘键位映射" },
        {
          name: "Tailscale",
          description: "基于 WireGuard 的零配置虚拟局域网工具，轻松实现跨设备内穿互联",
        },
      ],
    },
  ],
} as const

export const SITE_TITLE: string = "leekoho's Blog"
export const SITE_DESCRIPTION: string =
  "关注前端工程化、Node.js、Web 性能和开发体验，也会持续整理项目中的思考和实践。"
