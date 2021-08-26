import { FiShoppingBag } from 'react-icons/fi';

const product = {
  title: 'Products',
  name: 'products',
  type: 'document',
  icon: FiShoppingBag,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of this product',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Product image',
      name: 'productImage',
      type: 'image',
      description: 'The manufacturer photo for this image.',
      options: {
        crop: true,
        hotspot: true,
      },
    },
    {
      title: 'SKU',
      name: 'sku',
      description: 'The sku of this product',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'The slug for the dedicated product page',
      options: {
        source: 'sku',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The description for this product',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categories',
      name: 'categories',
      description: 'Category this product belongs to',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'productCategories' },
        },
      ],
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'The price of this product',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
};

export default product;
