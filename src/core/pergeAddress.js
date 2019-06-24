export default function pergeAddress(address) {
  return address
    .split(' ')
    .filter(ad => ad !== '')
    .map(ad =>
      ad
        // remove start -
        .replace(/^[-]*/, '')
        // remove end -
        .replace(/[-]*$/, ''),
    )
    .join(' ');
}
