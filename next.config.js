/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: true,
    // experimental: {
    //     appDir: true,
    // },
    assetPrefix: "./",
    // // useFileSystemPublicRoutes: true,
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
