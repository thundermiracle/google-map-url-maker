export default function makeGoogleMapUrl(prefecture, city, address) {
  const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
  const fullAddress = `${prefecture}${city}${address}`;

  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
