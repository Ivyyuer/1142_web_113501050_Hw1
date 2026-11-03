/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // 抓取所有路徑底下的 .wasm.br 檔案
        source: "/unity-game/:path*",
        has: [
          {
            type: "query",
            key: "*",
          },
        ],
        headers: [
          { key: "Content-Encoding", value: "br" },
        ],
      },
      {
        source: "/unity-game/:all*(\\.wasm\\.br)",
        headers: [
          { key: "Content-Type", value: "application/wasm" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
      {
        source: "/unity-game/:all*(\\.data\\.br)",
        headers: [
          { key: "Content-Type", value: "application/octet-stream" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
      {
        source: "/unity-game/:all*(\\.framework\\.js\\.br)",
        headers: [
          { key: "Content-Type", value: "application/javascript" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
    ];
  },
};

export default nextConfig;