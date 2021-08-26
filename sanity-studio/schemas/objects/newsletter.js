const newsletter = {
  title: 'Newsletter',
  name: 'newsletter',
  type: 'object',
  fields: [
    {
      title: 'Intro',
      name: 'intro',
      type: 'blockContent',
    },
    {
      title: 'Form Placeholder Text',
      name: 'formPlaceholderText',
      type: 'string',
    },
    {
      title: 'Submit Button Text',
      name: 'submitButtonText',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};

export default newsletter;
