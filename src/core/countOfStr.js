export default function countOfStr(str, findStr) {
  return (str.match(new RegExp(`${findStr}`, 'g')) || []).length;
}
