const benin = {
  isoCode: 'bj',
  officialLanguage: 'fr',
  capital: 'Porto-Novo',
};

const copyBenin = { ...benin, capital: 'Cotonou' };
// const copyBenin = Object.assign({}, benin);
// copyBenin.capital = 'Cotonou';

//if (benin.capital != 'Porto-novo') benin.capital = 'Porto-novo';

console.log('benin', benin);
console.log('copyBenin', copyBenin);

function solution(x, y) {
  let res = [];
  x = new Set(x);
  x.forEach((element) => {
    y.forEach((n) => {
      if (element === n) {
        res.push(element);
      }
    });
  });

  return res;
}
const result = solution([11, 12, 12, 11], [12, 12]);
console.log(result);

const ops = ['5', '2', 'C', 'D', '+'];
function getScrore(ops) {
  var values = [];
  var result = null;
  var last_score = null;
  ops.forEach((element) => {
    if (/^[0-9]*$/.test(element)) {
      values.push(parseInt(element));
      last_score = parseInt(values[values.length - (values.length - 1)]);
    } else {
      if (element == 'D') {
        var nw = 2 * last_score;
        console.log(nw, 'nw');
        values.push(nw);
      }
      if (element == 'C') {
        values.pop();
      }
      if (element == '+') {
        var nk = values[values.length - 1] + values[values.length - 2];
        values.push(nk);
      }
    }
  });
  // values.forEach((item) => {
  //   result = item + result;
  // });
  return values;
}

var score = getScrore(ops);
console.log(score);
