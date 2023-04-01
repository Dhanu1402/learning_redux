module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'], // domain from where to pull images
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
