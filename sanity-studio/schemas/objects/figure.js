const figure = {
  title: 'Image',
  name: 'figure',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for Seo and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Caption',
      name: 'caption',
      description:
        'Leave blank if you do not want a caption, also used for photo credits.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
};

export default figure;
