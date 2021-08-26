const siteSettings = {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: '3',
      title: 'Description',
      description: 'Describe your website for search engines and social media.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description:
        'Add keywords for search engines that describes your website.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Site Author',
      name: 'author',
      type: 'string',
      description: 'Your name, or developers name.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description:
        'Your website logo, whether this is displayed can be controlled by feature flags in gatsby-theme-catalyst-core.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Default Social Sharing Image',
      name: 'seoImage',
      type: 'image',
      description:
        'The default sharing image for places like Twitter and Facebook when sharing a link to your website.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteUrl',
      type: 'url',
      title: 'Site URL',
      description: 'The root url of your website, e.g. https://www.google.com',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Header Navigation Items',
      name: 'headerNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      title: 'Footer Navigation Blocks',
      name: 'footerNavigation',
      type: 'array',
      of: [{ type: 'footerNavigationBlock' }],
    },
    {
      title: 'Social Media Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
    {
      title: 'Footer Copyright',
      name: 'copyright',
      type: 'string',
    },
  ],
};

export default siteSettings;
