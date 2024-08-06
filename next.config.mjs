// next.config.mjs
import { config } from 'dotenv';

// Load environment variables from .env file
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can expose environment variables to the client
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;