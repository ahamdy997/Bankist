'use strict';

// const julia = [3, 5, 2, 12, 7];
// const juliaCorrectData = arr => arr.slice(1, -2);

// const checkDogAge = function (arr1, arr2) {
//   const arrFinal = arr1.concat(arr2);
//   for (const [i, age] of arrFinal.entries())
//     age >= 3
//       ? console.log(`the dog Number ${i + 1} is adult, and he is ${age}`)
//       : console.log(`the dog Number ${i + 1} is puppy🐶, and he is ${age}`);
// };
// // dogAge > -3 ? 'adult' : 'puppy';

// checkDogAge(juliaCorrectData(julia), [4, 1, 15, 8, 3]);
// // checkDogAge(juliaCorrectData([9, 16, 6, 8, 3]), [10, 5, 6, 1, 4]);

// console.log(julia);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2023-09-16T18:49:59.371Z',
    '2023-09-19T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'Salma Zidan',
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 1000],
  interestRate: 1.4,
  pin: 5555,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
    '2023-09-20T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account6 = {
  owner: 'Ahmed Hamdy',
  movements: [2000, -200, -840, 3000, -20, 500, 400, 4000, -1000],
  interestRate: 1.5,
  pin: 6666,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
    '2023-09-20T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let sortedArray = [];
let count = 0;
let timer;
/////////////////////////////////////////////////

const timeLogOut = function () {
  let time = 120;

  const tiktok = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    if (time === 0) {
      containerApp.style.opacity = 0;
      clearInterval(logOutTime);
      labelWelcome.textContent = 'Log in to get started';
    }
    labelTimer.textContent = `${min} : ${sec}`;
    time--;
  };

  tiktok();
  const logOutTime = setInterval(tiktok, 1000);
  return logOutTime;
};

const dateCalc = function (acc) {
  const date = new Date();
  // const local = navigator.language;
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };
  labelDate.textContent = new Intl.DateTimeFormat(
    accountLogged.locale,
    options
  ).format(date);
};

const dateFormate = function (date) {
  const calcDae = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDae(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const local = navigator.language;
  // const options = {
  //   day: '2-digit',
  //   month: '2-digit',
  //   year: 'numeric',
  //   weekday: 'short',
  // };
  return new Intl.DateTimeFormat(accountLogged.locale).format(date);
};

const formateCur = function (acc, val) {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: `${acc.currency}`,
  }).format(val);
};

const displayMovements = function (acc) {
  containerApp.style.opacity = 1;
  containerMovements.innerHTML = '';
  inputLoginUsername.value = inputLoginPin.value = '';
  const array = count % 2 === 0 ? acc.movements : sortedArray;
  for (const [i, move] of array.entries()) {
    const dOrW = move < 0 ? 'withdrawal' : 'deposit';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = dateFormate(date);
    const formateCurrency = formateCur(acc, acc.movements[i]);
    const html = `      
    <div class="movements__row">
      <div class="movements__type movements__type--${dOrW}">${
      i + 1
    } ${dOrW}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formateCurrency}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }
};

// chellange

const currentBalance = function (acc) {
  labelBalance.textContent = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: `${acc.currency}`,
  }).format(`${acc.movements.reduce((acu, cur) => acu + cur, 0)}`);
  acc.balance = labelBalance.textContent;
};

let accountLogged;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  accountLogged = accounts.find(
    acc =>
      acc.user === inputLoginUsername.value && acc.pin === +inputLoginPin.value
  );
  labelWelcome.textContent = `Welcome Back, ${
    accountLogged.owner.split(' ')[0]
  }`;
  allFuncions(accountLogged);
  if (timer) clearInterval(timer);
  timer = timeLogOut();
});

const allFuncions = function (acc) {
  displayMovements(accountLogged);
  currentBalance(accountLogged);
  calcIncome(accountLogged);
  calcOutcome(accountLogged);
  calcInterest(accountLogged);
  dateCalc(accountLogged);
};
const computeUserName = function (acc) {
  acc.user = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

accounts.forEach(acc => computeUserName(acc));

const calcIncome = function (aco) {
  labelSumIn.textContent = formateCur(
    aco,
    aco.movements.filter(val => val > 0).reduce((acu, val) => acu + val, 0)
  );
};

const calcOutcome = function (aco) {
  labelSumOut.textContent = formateCur(
    aco,
    Math.abs(
      aco.movements.filter(val => val < 0).reduce((acu, val) => acu + val, 0)
    )
  );
};

const calcInterest = function (aco) {
  labelSumInterest.textContent = formateCur(
    aco,
    aco.movements
      .filter(val => val > 0)
      .map(val => (val * aco.interestRate) / 100)
      .filter(val => val >= 1)
      .reduce((acu, val) => acu + val, 0)
  );
};
// inputTransferTo,inputTransferAmount,btnTransfer
const transferMoneyFrom = function (acc) {
  acc.movements.push(-inputTransferAmount.value);
  acc.movementsDates.push(new Date().toISOString());
};
const transferMoneyTo = function (acc) {
  const rec = acc.find(acc => acc.user === inputTransferTo.value);
  rec.movements.push(+inputTransferAmount.value);
  rec.movementsDates.push(new Date().toISOString());
};

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  if (
    transferAmount < parseInt(accountLogged.balance) &&
    accountLogged.user !== inputTransferTo.value &&
    parseInt(accountLogged.balance) >= parseInt(transferAmount) &&
    transferAmount > 0
  ) {
    transferMoneyFrom(accountLogged);
    transferMoneyTo(accounts);
    allFuncions(accountLogged);
    clearTransferField();
    clearTimeout(timer);
    timer = timeLogOut();
  }
});
const clearTransferField = function () {
  inputTransferAmount.value = inputTransferTo.value = '';
};

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const index = accounts.findIndex(acc => acc.user === accountLogged.user);
  console.log(index);
  if (
    accountLogged.user === inputCloseUsername.value &&
    accountLogged.pin === +inputClosePin.value
  ) {
    accounts.splice(index, 1);
    allFuncions(accountLogged);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    accountLogged.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    setTimeout(() => {
      accountLogged.movements.push(loanAmount);
      accountLogged.movementsDates.push(new Date().toISOString());
      allFuncions(accountLogged);
      inputLoanAmount.value = '';
      clearTimeout(timer);
      timer = timeLogOut();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnSort.addEventListener('click', function () {
  count++;
  if (count % 2 === 0) {
    displayMovements(accountLogged);
  } else {
    sortedArray = accountLogged.movements.map(val => val).sort((a, b) => a - b);
    accountLogged.sortedArray = sortedArray;
    displayMovements(accountLogged);
  }
});

// chellanges
// console.log(
//   accounts
//     .map(el =>
//       el.movements.reduce((acc, val) => {
//         if (val > 0) return val + acc;
//         else return acc;
//       }, 0)
//     )
//     .reduce((acc, val) => acc + val, 0)
// );

// console.log(
//   accounts.map(el => el.movements.filter(val => val >= 1000)).flat().length
// );

// const x = accounts
//   .flatMap(el => el.movements)
//   .reduce(
//     (acc, val) => {
//       val > 0 ? (acc.deposit += val) : (acc.withdraw += val);
//       return acc;
//     },
//     {
//       deposit: 0,
//       withdraw: 0,
//     }
//   );
// console.log(x);
// const convertWord = function (word) {
//   const exc = ['this', 'a', 'with', 'is'];
//   const w = word
//     .toLowerCase()
//     .split(' ')
//     .map(w => (exc.includes(w) ? w : w[0].toUpperCase() + w.slice(1)))
//     .join(' ');
//   console.log(w);
// };

// convertWord('this Is Ahmed hamdy with jonas');
// const date = new Date(2020, 10, 25, 15, 40, 43);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getHours());
// date.setFullYear(2030);
// console.log(date.getFullYear());
// console.log(Date.now());

// console.log(new Date(1695215176064));

//Fake Login in
// accountLogged = account1;
// allFuncions(accountLogged);
// containerApp.style.opacity = 1;

// setInterval(() => {
//   const date = new Date();
//   console.log(
//     new Intl.DateTimeFormat('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     }).format(date)
//   );
// }, 1000);
