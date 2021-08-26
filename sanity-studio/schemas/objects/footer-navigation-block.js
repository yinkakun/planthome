const footerNavigationBlock = {
  title: 'Footer Navigation Block',
  name: 'footerNavigationBlock',
  type: 'object',
  fields: [
    {
      title: 'Footer Navigation Block Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Footer Navigation Block Items',
      name: 'items',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
};

export default footerNavigationBlock;
