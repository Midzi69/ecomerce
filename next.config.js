/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1/ecomerce",
    DB_URI: "mongodb+srv://milostordai:022612305Mt@ecomerce.h59ae0g.mongodb.net/?retryWrites=true&w=majority",

    CLOUD_NAME: "dtezvzv67",
    CLOUDINARY_API_KEY: "745986137229299",
    CLOUDINARY_API_SECRET: "Sz-2gBEClZxZ1fItBgTmTh9FeKI",

    STRIPE_PUBLIC_KEY: "pk_test_51NeGoTB2kaNS6uFVBaFlUVvluD9okvE71iEYUkJOU0NkC3napH42slj21Z8WOAnhanGOCJGYNWLsNjPH4TCsRYba00mbgEu8pC",
    STRIPE_PRIVATE_KEY: "sk_test_51NeGoTB2kaNS6uFVkRUTjGYYsPFEDDeFJZQ5bMIUC2cj5Frtr5vT6ZShNrLrEfSH5uFTRUYTun7RSs63he98CG2X00fJTFkl1p",

    STRIPE_WEBHOOK_SECRET: "whsec_38e9506d608da9e31768b1b6fefa1c69be421377b0e4af6703d2d9d5fa31f63a",

    NEXTAUTH_SECRET: "tosa123456",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
