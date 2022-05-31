const arr = [1,2,3,4,5,6];
let numFind = 3;

const binarySearch = (array, numNeedFind) => {
  let start = 0;
  let stop = array.length-1;
  while(start<=stop){
    let mid = Math.floor((start+stop)/2);
    if(array[mid]==numNeedFind) return true
    else if(array[mid]<numNeedFind) start=mid+1  
    else stop=mid-1
  }
  return false
}

console.time("start")
binarySearch([1,2,3,4,5,6],1)
console.timeEnd("start")

let arr1 = [1,2,3,4,5,6]
console.time("stop")
arr1.includes(1)
console.timeEnd("stop")