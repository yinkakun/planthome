import { FiFolder } from 'react-icons/fi';

const pages = {
  title: 'Pages',
  name: 'pages',
  type: 'document',
  icon: FiFolder,
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page Slug',
      name: 'slug',
      type: 'slug',
      description:
        "Used for your pages location in the site, e.g. a slug og 'work' ends up at mysite.com/work. While a slug of projects/awesome ends up at mysite.com/projects/awesome.",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page Content',
      name: 'body',
      type: 'blockContent',
    },
    {
      title: 'SEO & Accessibility',
      name: 'seo',
      type: 'seo',
    },
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'No title', slug = {} }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
};

export default pages;
