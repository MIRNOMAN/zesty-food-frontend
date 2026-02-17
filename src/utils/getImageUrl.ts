import defaultImg from '@/assets/defaultImg.png'
export const getImageUrl = (path?: string) => {
  if (!path) return defaultImg.src;

  // If path is already a full URL, just return it
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Ensure no double slash when concatenating
  const base = process.env.NEXT_PUBLIC_PHOTOURL_DEV || "";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
