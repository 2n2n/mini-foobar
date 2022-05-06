const generateArray = function (end, start = 1) {
  return Array(end - start  + 1).fill().map((_, idx) => start + idx)
};

const foobar = function (_numbers = []) {
  return _numbers.map((_number) => {
    let result = "";
    if (_number % 3 === 0) {
      result += "PICK"
    }
    else if(_number % 5 === 0) {
      result += "AROO"
    }
    else {
      result = _number
    }

    return result;
  })  
}
const numbers = generateArray(100)
console.log(foobar(numbers))