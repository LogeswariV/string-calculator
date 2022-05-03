const getSum = (stringArr) => {
  const negatives = [];
  let sum = stringArr.reduce((total, num) => {
    if (num > 1000) {
      return 0;
    }
    if (num < 0) {
      negatives.push(num);
      return 0;
    }
    return total + num;
  }, 0);
  if (negatives.length > 0) {
    throw new Error("Negatives not allowed");
  }
  return sum;
};

const getDelimiters = (args) => {
  return args.split(/\[|\]/).filter(function (delim) {
    return !!delim.length;
  });
};

const getConfig = (stringInput) => {
  var matcher = /\/\/(.*?)\n/;
  var result = matcher.exec(stringInput);
  console.log(result);
  if (result) {
    return {
      delimiters: getDelimiters(result[1]),
      input: stringInput.slice(matcher.lastIndex),
    };
  } else {
    return { delimiters: [","], input: stringInput };
  }
};

const splitOnDelimiters = (numbers, delimiters) => {
  if (delimiters.length === 0) {
    return numbers.map(function (num) {
      return +num || 0;
    });
  }
  var delimiter = delimiters.pop();
  var newNums = numbers.reduce((arr, num) => {
    return arr.concat(num.split(delimiter));
  }, []);
  return splitOnDelimiters(newNums, delimiters);
};
const getNumbers = (string) => {
  var config = getConfig(string);
  var numbers = config.input.split("\n");
  return splitOnDelimiters(numbers, config.delimiters);
};

export function calculation(stringInput) {
  if (stringInput === "") {
    return 0;
  }
  return getSum(getNumbers(stringInput));
}
