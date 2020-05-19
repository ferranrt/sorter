const sleep = async (action, arg, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      action(arg);
      resolve();
    }, delay),
  );
};

export const InsertSort = (array, updateCallback, delay) => {
  const newArray = [...array];
  let delayOffset = 1;
  const promises = [];
  for (let i = 1; i < newArray.length; i += 1) {
    const key = newArray[i];
    let j = i - 1;
    while (j >= 0 && newArray[j] > key) {
      newArray[j + 1] = newArray[j];
      promises.push(sleep(updateCallback, [...newArray], delayOffset * delay));
      delayOffset += 1;
      j -= 1;
    }
    newArray[j + 1] = key;
    promises.push(sleep(updateCallback, [...newArray], delayOffset * delay));
    delayOffset += 1;
  }
};

export const BubbleSort = (array, updateCallback, delay) => {
  const newArray = [...array];
  const promises = [];
  let swapped;
  let delayOffset = 1;
  do {
    swapped = false;
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] > newArray[i + 1]) {
        const tmp = newArray[i];
        newArray[i] = newArray[i + 1];
        newArray[i + 1] = tmp;
        swapped = true;

        promises.push(
          sleep(updateCallback, [...newArray], delayOffset * delay),
        );
        delayOffset += 1;
      }
    }
  } while (swapped);
  Promise.all(promises);
};

export const SelectionSort = async (array, updateCallback, delay) => {
  const newArray = [...array];
  const promises = [];
  for (let i = 0; i < newArray.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < newArray.length; j += 1) {
      if (newArray[min] > newArray[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const tmp = newArray[i];
      newArray[i] = newArray[min];
      newArray[min] = tmp;
      promises.push(sleep(updateCallback, [...newArray], delay * i));
    }
  }
  Promise.all(promises);
};

const defaultComparator = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const QuickSort = (
  unsortedArray,
  updateCallback,
  speed,
  comparator = defaultComparator,
) => {
  const sortedArray = [...unsortedArray];
  const promises = [];
  let delayOffset = 1;
  const recursiveSort = (start, end) => {
    if (end - start < 1) {
      return;
    }
    const pivotValue = sortedArray[end];
    let splitIndex = start;
    for (let i = start; i < end; i += 1) {
      const sort = comparator(sortedArray[i], pivotValue);
      if (sort === -1) {
        if (splitIndex !== i) {
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
          delayOffset += 1;
          promises.push(
            sleep(updateCallback, [...sortedArray], speed * delayOffset),
          );
        }
        splitIndex += 1;
      }
    }
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;
    delayOffset += 1;
    promises.push(sleep(updateCallback, [...sortedArray], speed * delayOffset));
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };
  recursiveSort(0, unsortedArray.length - 1);
  Promise.all(promises);
};

export const CycleSort = (unsortedArray, updateCallback, speed) => {
  const newArray = [...unsortedArray];
  let delayOffset = 1;
  const promises = [];
  for (let cycleStart = 0; cycleStart < newArray.length - 1; cycleStart += 1) {
    let item = newArray[cycleStart];
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < newArray.length; i += 1) {
      if (newArray[i] < item) pos += 1;
    }
    // eslint-disable-next-line no-continue
    if (pos === cycleStart) continue;
    while (item === newArray[pos]) {
      pos += 1;
    }
    const swap = newArray[pos];
    newArray[pos] = item;
    item = swap;
    delayOffset += 1;
    promises.push(sleep(updateCallback, [...newArray], speed * delayOffset));
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < newArray.length; i += 1) {
        if (newArray[i] < item) pos += 1;
      }
      while (item === newArray[pos]) {
        pos += 1;
      }
      const aux = newArray[pos];
      newArray[pos] = item;
      item = aux;
      delayOffset += 1;
      promises.push(sleep(updateCallback, [...newArray], speed * delayOffset));
    }
  }
};

export const ComboSort = (unsortedArray, updateCallback, speed) => {
  const newArray = [...unsortedArray];
  const promises = [];
  let delayOffset = 1;
  const isArraySorted = (arr) => {
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        break;
      }
    }
    return sorted;
  };
  let iterationCount = 0;
  let gap = newArray.length - 2;
  const decreaseFactor = 1.25;
  while (!isArraySorted(newArray)) {
    if (iterationCount > 0)
      gap = gap === 1 ? gap : Math.floor(gap / decreaseFactor);
    let front = 0;
    let back = gap;
    while (back <= newArray.length - 1) {
      if (newArray[front] > newArray[back]) {
        const temp = newArray[front];
        newArray[front] = newArray[back];
        newArray[back] = temp;
        delayOffset += 1;
        promises.push(
          sleep(updateCallback, [...newArray], speed * delayOffset),
        );
      }
      front += 1;
      back += 1;
    }
    iterationCount += 1;
  }
  Promise.all(promises);
};

export const BogoSort = (unsortedArray, updateCallback, speed) => {
  let newArray = [...unsortedArray];
  const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  const shuffle = (arr) => {
    let count = newArray.length;
    let temp;
    let index;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count -= 1;

      temp = newArray[count];
      newArray[count] = newArray[index];
      newArray[index] = temp;
    }

    return arr;
  };

  const sort = async (arr) => {
    let sorted = false;
    while (!sorted) {
      newArray = shuffle(newArray);
      // Cannot use promise array cause the probability of succes is 1/!N
      // eslint-disable-next-line no-await-in-loop
      await sleep(updateCallback, [...newArray], speed);
      sorted = isSorted(arr);
    }
    return newArray;
  };
  return sort(newArray);
};
