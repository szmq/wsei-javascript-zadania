document.addEventListener('DOMContentLoaded', (event) => {
  const type = document.getElementById('type')
  const input = document.getElementById('name')

  const getCardIssuer = number => {
    if (number[0] == 4) {
      return 'Visa'
    }
    if (number[0] == 5) {
      return 'Mastercard'
    }
    if (number[0] == 3 && (number[1] == 4 || number[1] == 7)) {
      return 'American Express'
    }
    return '';
  };

  const isVisa = number => number.length >= 13 && number.length <= 16
  const isMastercard = number => number.length === 16
  const isAmericanExpress = number => number.length === 15

  const isCardValid = (number, issuer) => {
    return !!((issuer === 'Visa' && isVisa(number)) ||
      (issuer === 'Mastercard' && isMastercard(number)) ||
      (issuer === 'American Express' && isAmericanExpress(number)));
  };

  const validate = (number, issuer) => {
    if (isCardValid(number, issuer)) {
      input.style = 'border: 2px solid green'
    } else {
      input.style = ''
    }
  };

  input.addEventListener('input', () => {
    const issuer = getCardIssuer(input.value);
    validate(input.value, issuer);

    type.innerText = issuer

  })
});
