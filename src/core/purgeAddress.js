function countOfHyphen(str) {
  return (str.match(/-/g) || []).length;
}

function delHyphen(str) {
  const hyphenCount = countOfHyphen(str);

  const replaceList = [];
  let startPos = 0;
  for (let index = 0; index < hyphenCount; index += 1) {
    const hInd = str.indexOf('-', startPos);
    // for next hyphen
    startPos = startPos === 0 ? 1 : startPos;
    startPos += hInd;

    const cBef = hInd === 0 ? '' : str.substr(hInd - 1, 1);
    const cAft = hInd === str.length - 1 ? '' : str.substr(hInd + 1, 1);

    // console.log('cBef:', cBef, Number.isInteger(cBef), '  cAft:', cAft, Number.isInteger(cAft));

    if (!Number.isInteger(+cBef) && Number.isInteger(+cAft)) {
      /*
       * character before is not number, but after is, replace to space
       * 新宿ビル-205室
       */
      replaceList.push([`${cBef}-${cAft}`, `${cBef} ${cAft}`]);
    } else if (Number.isInteger(+cBef) && !Number.isInteger(+cAft)) {
      /*
       * character before is number, but after is not, replace to space
       * 3-2-1-新宿ビル
       */
      replaceList.push([`${cBef}-${cAft}`, `${cBef} ${cAft}`]);
    }
  }
  // console.log(replaceList)
  const result = replaceList.reduce((prev, [bef, aft]) => {
    return prev.replace(bef, aft);
  }, str);

  return result;
}

export default function pergeAddress(address) {
  return address
    .split(' ')
    .filter(ad => ad !== '')
    .map(ad =>
      ad
        .replace('---', '-')
        .replace('--', '-')
        // remove start -
        .replace(/^[-]*/, '')
        // remove end -
        .replace(/[-]*$/, ''),
    )
    .map(delHyphen)
    .join(' ');
}
