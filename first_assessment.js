const benin = {
  isoCode: 'bj',
  officialLanguage: 'fr',
  capital: 'Porto-Novo',
};

const copyBenin = Object.assign({}, benin);
copyBenin.capital = 'Cotonou';

//if (benin.capital != 'Porto-novo') benin.capital = 'Porto-novo';

console.log('benin', benin);
console.log('copyBenin', copyBenin);

const copyBenin = { ...benin, capital: 'Cotonou' };
