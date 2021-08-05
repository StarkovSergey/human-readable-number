module.exports = function toReadable (number) {

  const getHumanOneNumber = (number) => {
    switch(number) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return '';
    }
  }

  const getHumanTwoNumbers = (number) => {
    const stringNumber = number.toString();
    switch(stringNumber[0]) {
      case '2':
        return 'twenty ' + getHumanOneNumber(+stringNumber[1]);
      case '3':
        return 'thirty ' + getHumanOneNumber(+stringNumber[1]);
      case '4':
        return 'forty ' + getHumanOneNumber(+stringNumber[1]);
      case '5':
        return 'fifty ' + getHumanOneNumber(+stringNumber[1]);
      case '6':
        return 'sixty ' + getHumanOneNumber(+stringNumber[1]);
      case '7':
        return 'seventy ' + getHumanOneNumber(+stringNumber[1]);
      case '8':
        return 'eighty ' + getHumanOneNumber(+stringNumber[1]);
      case '9':
        return 'ninety ' + getHumanOneNumber(+stringNumber[1]);
      case '1':
        switch(stringNumber[1]) {
          case '0':
            return 'ten';
          case '1':
            return 'eleven';
          case '2':
            return 'twelve';
          case '3':
            return 'thirteen';
          case '4':
            return 'fourteen';
          case '5':
            return 'fifteen';
          case '6':
            return 'sixteen';
          case '7':
            return 'seventeen';
          case '8':
            return 'eighteen';
          case '9':
            return 'nineteen';
        }
    }
  }

  const getHumanThreeNumbers = (number) => {
    const numbers = number.toString().split('');
    const firstNumber = numbers.shift();
    const twoLastNumbers = numbers.join('');
    if (twoLastNumbers[0] === '0') {
      return getHumanOneNumber(+firstNumber) + ' hundred ' + getHumanOneNumber(+numbers[1]);
    }
    return getHumanOneNumber(+firstNumber) + ' hundred ' + getHumanTwoNumbers(+twoLastNumbers);
  }

    const stringNumber = number.toString();
    if (stringNumber === '0') return 'zero';
  switch (stringNumber.length) {
    case 1:
      return getHumanOneNumber(number);
    case 2:
      return getHumanTwoNumbers(number).trim();
    case 3:
      return getHumanThreeNumbers(number).trim();
}
}
