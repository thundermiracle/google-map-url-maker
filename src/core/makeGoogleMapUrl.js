export default function makeGoogleMapUrl(prefecture, city, address) {
  const baseUrl = 'https://www.google.com/maps?q=';
  const fullAddress = `${prefecture}${city}${address}`;

  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
