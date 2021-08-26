const hero = {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Hero Title',
      name: 'title',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Hero Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'figure',
    },
    {
      title: 'Hero CTA Link',
      name: 'heroCta',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      };
    },
  },
};

export default hero;
