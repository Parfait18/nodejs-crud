const wait = (n) => {
  const seconde = n * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(seconde);
      console.log('time is out');
    }, seconde);
  });
};

const fn = async () => {
  console.log('start');
  const x = await wait(10);
  console.log('end');
};

fn();
