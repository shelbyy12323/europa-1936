const pages = process.env.PAGES_BASE_PATH;
export default pages === undefined ? {} : {
  output: "export",
  basePath: pages,
  env: { NEXT_PUBLIC_GAME_BASE: pages },
  images: { unoptimized: true }
};
