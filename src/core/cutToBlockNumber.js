export default function cutToBlockNumber(address) {
  const result = [];
  const splittedAddresses = address.split(' ');

  for (let index = 0; index < splittedAddresses.length; index += 1) {
    const onePart = splittedAddresses[index];
    const lastChar = onePart.slice(-1);

    if (Number.isInteger(+lastChar)) {
      // push until find first number-end string
      result.push(onePart);
      break;
    }

    result.push(onePart);
  }

  return result.join(' ');
}
