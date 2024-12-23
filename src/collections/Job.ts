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
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      required: false,
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
