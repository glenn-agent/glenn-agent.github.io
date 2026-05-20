import { defineCollection, z } from '@nuxt/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      title: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

export const collections = {
  content_en: defineCollection({
    type: 'page',
    source: {
      include: 'en/**/*.md',
      prefix: '/en',
    },
    schema: commonContentSchema,
  }),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_en: defineCollection({
    type: 'data',
    source: 'en/faq.json',
    schema: commonFaqSchema,
  }),
}
