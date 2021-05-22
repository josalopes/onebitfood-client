export default function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num)   + '...';

  // if (str.length <= num)
  //   return str;
  // return str.slice(0, num)   + '...';
}