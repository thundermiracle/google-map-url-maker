// -1 return false
export default function isAlphOrNum(str) {
  const restChars = str.toString().replace(/[a-zA-z0-9]/g, '');

  return restChars.length === 0;
}
