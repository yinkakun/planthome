import { FiPackage } from 'react-icons/fi';

const category = {
  title: 'Product Categories',
  name: 'productCategories',
  type: 'document',
  icon: FiPackage,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export default category;
