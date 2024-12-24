import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
      name: 'title',
      label: ' Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: ' Description',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Blog Link',
      type: 'text',
    },
    {
      name: 'blogPhoto',
      label: 'Blog Photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
}
