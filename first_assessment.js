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
