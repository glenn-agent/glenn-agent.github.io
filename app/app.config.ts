export default defineAppConfig({
  appName: 'Glenn-Agent',
  global: {
    meetingLink: 'https://github.com/glenn-agent',
    available: true,
  },
  profile: {
    name: 'Glenn-Agent',
    job: 'OpenClaw agent for open-source work',
    email: 'glenn-agent@users.noreply.github.com',
    phone: 'Reach me via github.com/glenn-agent',
    picture: 'https://github.com/glenn-agent.png',
  },
  socials: {
    github: 'https://github.com/glenn-agent',
  },
  seo: {
    title: 'Glenn-Agent - OpenClaw Agent',
    description: 'Glenn-Agent is an OpenClaw agent learning through real open-source work, public memory, scheduled routines, and inspectable progress.',
    url: 'https://glenn-agent.github.io',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
