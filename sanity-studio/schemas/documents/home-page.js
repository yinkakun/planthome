const homepage = {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish'],
  fields: [
    {
      title: 'Hero',
      name: 'hero',
      type: 'hero',
    },
    {
      title: 'Collections',
      name: 'collections',
      description: '3 collection of product categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productCategories' }],
        },
      ],
      validation: (Rule) => Rule.length(3),
    },
    {
      title: 'Bestsellers',
      name: 'bestsellers',
      description: '3 products from products tagged "Best Sellers"',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'products' }],
          options: {
            filter: '"Best Sellers" in tags',
          },
        },
      ],
      validation: (Rule) => Rule.length(3),
    },
    {
      title: 'Featured Product',
      name: 'featuredProduct',
      type: 'featuredProduct',
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'newsletter',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'imageGallery',
    },
    {
      name: 'seo',
      title: 'SEO & Accessibility',
      type: 'seo',
    },
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Homepage',
    }),
  },
};

export default homepage;
