
// NOTE:: Binary search recursive
const search = (arr, target, leftindex, rightindex) => {
    if (leftindex > rightindex) {
        return -1
    }
    let middleindex = Math.floor((leftindex + rightindex)/2);
    if (target === arr[middleindex]) {
        return middleindex
    }
    if (target > arr[middleindex]) {
        return search(arr, target, middleindex + 1, rightindex)
    }
    if (target < arr[middleindex]) {
        return search(arr, target, leftindex, middleindex - 1)
    }
}

export const binarySearchRecursive = (arr, target) => {
    return search(arr, target, 0, arr.length - 1)
}

export const binarysearchIterative = (arr, target) => {
    let leftindex = 0;
    let rightindex = arr.length -1;

    while (leftindex < rightindex) {
        let middle = Math.floor((leftindex + rightindex)/2);

        if (target === arr[middle]) {
            return middle
        }

        if (target > arr[middle]) {
            leftindex = middle + 1
        }

        if (target < arr[middle]) {
            rightindex = middle - 1
        }
    }
    return -1
}

const iterateMethod = (arr) => {
    let swapped = false;
    for (let i=0;i<arr.length - 1;i++) {
        if (arr[i] > arr[i+1]) {
            let swap = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = swap;
            swapped = true;
        }
    }
    if (swapped) {
        return iterateMethod(arr);
    } else {
        return arr;
    }
}

export const bubbleSort = () => {
    let arr = [-6, 20, 8, -2, 4];
    const result = iterateMethod(arr);
    console.log(result);
}

export const insertionSort = () => {
    let arr = [8,20, -2, 4, -6];

    for (let i=1; i< arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j>=0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j -1
        }
        arr[j+1] = numberToInsert;
    }
    console.log(arr);
}


export const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i=0; i< arr.length - 1;i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

export const myLogic = (s, startIndices, endIndices) => {
    let result = new Array(startIndices.length).fill(0);
    for (let i=0; i < startIndices.length;i++) {
        let str = s.substring(startIndices[i] - 1, endIndices[i]);
        console.log(str);
        let c = str.split("|");
        for (let j=0; j< c.length;j++) {
            if (j !== 0 && j !== c.length - 1) {
                result[i] = result[i] + c[j].length
            }
        }
    }
    return result;
}

// function minimumBribes(q) {
//     let bribes = 0;
  
//     for (let i = q.length - 1; i >= 0; i--) {
//       if (q[i] - (i + 1) > 2) {
//         console.log("Too chaotic");
//         return;
//       }
  
//       for (let j = Math.max(0, q[i] - 2); j < i; j++) {
//         if (q[j] > q[i]) {
//           bribes++;
//         }
//       }
//     }
//     console.log(bribes);
// }

// [1, 2, 5, 3, 7, 8, 6, 4]

// i = 7
// 4 - 7 + 1 > 2