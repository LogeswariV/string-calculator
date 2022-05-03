const getSum = (stringArr) =>{
    let sum = stringArr.reduce((total, num)=>{
        return parseFloat(total) + parseFloat(num);
      });
  
      return sum;
}
const filterArray = (string) => {
    return string.split('')
    .filter(n => n !== '')
    .map(n => parseInt(n))
}

export function calculation(stringInput){
    if(stringInput === ''){
        return 0
    }
    return getSum(filterArray(stringInput));
}
