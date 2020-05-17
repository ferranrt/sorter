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

const partition = async (items, left, right, updateCallback, delay, speed) => {
  const newArray = items;
  const pivot = newArray[Math.floor((right + left) / 2)]; // middle element
  let i = left; // left pointer
  let j = right; // right pointer
  while (i <= j) {
    while (newArray[i] < pivot) {
      i += 1;
    }
    while (newArray[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      const temp = newArray[left];
      newArray[left] = newArray[right];
      newArray[right] = temp;
      // eslint-disable-next-line no-await-in-loop
      await sleep(updateCallback, [...newArray], delay * speed); // sawpping two elements
      i += 1;
      j -= 1;
    }
  }
  return i;
};

export function QuickSort(items, left, right, updateCallback, speed, delay) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right, updateCallback, delay, speed);
    if (left < index - 1) {
      QuickSort([...items], left, index - 1, updateCallback, delay + 1, speed);
    }
    if (index < right) {
      QuickSort([...items], index, right, updateCallback, delay + 1, speed);
    }
  }
  return items;
}
