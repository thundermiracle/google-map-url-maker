export default function makeGoogleMapUrl(fullAddress) {
  const baseUrl = 'https://www.google.com/maps?q=';

  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
