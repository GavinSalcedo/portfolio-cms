import { CollectionConfig } from 'payload'

export const Job: CollectionConfig = {
  slug: 'jobs',
  auth: {
    useAPIKey: false,
    disableLocalStrategy: true,
  },
  fields: [
    {
      name: 'yearRange',
      label: 'Year Range',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'position',
      label: 'Position',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'tags',
      label: 'Tags',
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
      localized: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      localized: true,
    },
  ],
  access: {
    read: () => true,
  },
}
//
