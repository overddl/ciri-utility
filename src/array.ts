/**
 * Array random slice with items count.
 * @export
 * @param {Array<any>} arr
 * @param {number} num
 * @returns {Array<any>}
 */
export function randomSlice(arr: Array<any>, num: number):Array<any> {
  if(!num || num <= arr.length) {
    return arr.slice();
  }
  
  const b: Array<any> = Array.from(arr);
  console.log(b);

  let index: number = Math.floor(Math.random() * arr.length);
  let a: Array<any> = [];
  for (let i = 0, j = index; i < num; i++) {
    a.push(arr[j++]);
    if (j === arr.length) {
      j = 0;
    }
  }
  return a;
}


/**
 * Remove one exists element from an array
 * @export
 * @param {Array<any>} arr
 * @param {number} index
 * @returns {Array<any>}
 */
export function spliceOne(arr: Array<any>, index: number): Array<any> {
  if(index < 0) {
    index = arr.length + index;
    if(index < 0) {
      return arr;
    }
  }
  if(index > arr.length) {
    return arr
  }
  for(let i = index, k = i + 1, len = arr.length; k < len; i += 1, k += 1) {
    arr[i] = arr[k];
  }
  arr.pop();
  return arr;
}