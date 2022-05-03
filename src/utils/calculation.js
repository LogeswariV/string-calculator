const getSum = (stringArr) =>{
    let sum = stringArr.reduce((total, num)=>{
        return parseFloat(total) + parseFloat(num);
      });
  
      return sum;
}
const  getDelimiter = () => {
    return /[\n,]/
}

const getNumbers = (string,delimiter) => {
    return string.split(delimiter)
    .filter(n => n !== '')
    .map(n => parseInt(n))
}


export function calculation(stringInput){
    if(stringInput === ''){
        return 0
    }
    const delimiters = getDelimiter();
    return getSum(getNumbers(stringInput,delimiters));
}