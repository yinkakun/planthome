const featuredProduct = {
  title: 'Featured Product',
  name: 'featuredProduct',
  type: 'object',

  fields: [
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{ type: 'products' }],
    },
    {
      title: 'CTA',
      name: 'cta',
      type: 'link',
    },
  ],
};

export default featuredProduct;
