import countOfStr from './countOfStr';

function delExtra(str) {
  return (
    str
      // remove repeat -
      .replace(/--*/g, '-')
      // remove start -
      .replace(/^[-]*/, '')
      // remove end -
      .replace(/[-]*$/, '')
  );
}

export default function delRedundantHyphen(str) {
  const baseStr = delExtra(str);

  const hyphenCount = countOfStr(baseStr, '-');

  const replaceList = [];
  let startPos = 0;
  for (let index = 0; index < hyphenCount; index += 1) {
    const hInd = baseStr.indexOf('-', startPos);
    // for next hyphen
    startPos = startPos === 0 ? 1 : startPos;
    startPos += hInd;

    const cBef = baseStr.substr(hInd - 1, 1);
    const cAft = baseStr.substr(hInd + 1, 1);

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
  }, baseStr);

  return result;
}
