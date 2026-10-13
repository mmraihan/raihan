// Prefix public assets with the basePath (needed for GitHub Pages sub-path hosting)
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
