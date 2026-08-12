export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'pets-blog',
  name: 'PawPost',
  origin: 'https://pets-blog.oriz.in',
  tagline: 'Practical, science-checked pet care for dogs and cats',
  description:
    'PawPost — practical, science-checked pet care for dogs and cats. Puppy training, cat behaviour, nutrition, and health, written plainly.',
}
