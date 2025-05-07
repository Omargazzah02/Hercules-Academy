import type { NextConfig } from "next";

const nextConfig: NextConfig = {
eslint : {
  ignoreDuringBuilds: true, // ⚠️ Ne bloque plus le build en cas d’erreurs ESLint

}
  /* config options here */
};

export default nextConfig;
