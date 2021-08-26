const imageGallery = {
  title: 'Gallery',
  name: 'imageGallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};

export default imageGallery;
