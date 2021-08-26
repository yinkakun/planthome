const socialLink = {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false,
  },
  fields: [
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'Twitter', value: 'Twitter' },
        ],
      },
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
};

export default socialLink;
