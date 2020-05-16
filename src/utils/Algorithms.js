const sleep = async (action, arg, iter) => {
  console.log(iter);
  return new Promise((resolve) =>
    setTimeout(() => {
      action(arg);
      resolve();
    }, 400),
  );
};

// eslint-disable-next-line no-unused-vars
export const InsertSort = (array, updateCallback) => {};
// eslint-disable-next-line no-unused-vars
export const BubbleSort = (array, updateCallback) => {};
// eslint-disable-next-line no-unused-vars
export const MergeSort = (array, updateCallback) => {};
// eslint-disable-next-line no-unused-vars
export const SelectionSort = async (array, updateCallback, delay) => {
  const newArray = [...array];
  const len = newArray.length;
  for (let i = 0; i < len; i += 1) {
    let min = i;
    for (let j = i + 1; j < len; j += 1) {
      if (newArray[min] > newArray[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const tmp = newArray[i];
      newArray[i] = newArray[min];
      newArray[min] = tmp;
      await sleep(updateCallback, [...newArray], i);
    }
  }
};
