export function truncate(str: string, maxWords: number = 4): string {
  const wordsArr = str.split(' ');
  if (wordsArr.length <= maxWords) {
    return str;
  }

  let output = wordsArr.splice(0, maxWords).join(' ');
  output += '...';

  return output;
}
