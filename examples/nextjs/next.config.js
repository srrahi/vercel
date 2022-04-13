/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  "redirects": [
        {
            "source": "/(.*)",
            "destination": "https://timezones-api.datasette.io/$1",
            "statusCode": 301
        }
    ]
}

module.exports = nextConfig
