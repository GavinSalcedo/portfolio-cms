import { CollectionConfig } from 'payload'

export const Job: CollectionConfig = {
  slug: 'jobs',
  auth: {
    useAPIKey: false,
    disableLocalStrategy: true,
  },
  fields: [
    {
      name: 'Year Range',
      type: 'text',
      required: true,
    },
    {
      name: 'Position',
      type: 'text',
      required: true,
    },
    {
      name: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Tags',
      type: 'select',
      hasMany: true,
      options: [
        'JavaScript',
        'TypeScript',
        'Storybook',
        'Node.js',
        'GraphQL',
        'Jest',
        'MongoDB',
        'Styled Components',
        'Figma',
        'Code Review',
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
