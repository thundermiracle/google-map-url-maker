export default function makeGoogleMapUrl(
  fullAddress,
  baseUrl = 'https://www.google.com/maps?q=',
) {
  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
