const extractSrc = (html: string): string | null => {
  const match = html.match(/<img\s+[^>]*src="([^"]*)"/);
  return match ? match[1] : null;
};

export const normalizeImageUrl = (url: string | null): string | null => {
  const validUrl = url || '';
  const imageUrl = extractSrc(validUrl);

  if (!imageUrl) return null;

  if (imageUrl.startsWith('//')) {
    return `https:${imageUrl}`;
  }

  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  return null;
};
