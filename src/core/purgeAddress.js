import delRedundantHyphen from './delRedundantHyphen';

export default function purgeAddress(address) {
  return address
    .split(' ')
    .filter(ad => ad !== '')
    .map(delRedundantHyphen)
    .join(' ');
}
