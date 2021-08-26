const link = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      title: 'Link Text',
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default link;
