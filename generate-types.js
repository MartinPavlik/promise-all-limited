

const generate = (xs) => {
  const generics = xs.join(', ');
  const promiseCreators = xs.map(x => `PromiseCreator<${x}>`)

  return `
  function promiseAllParallel<${generics}>(
    limit: number,
    promiseCreators: [${promiseCreators}],
  ): Promise<[${generics}]>;
  `
}



const xs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

let result = '';
for (let i = 1; i < xs.length + 1; i++) {
  const set = xs.slice(0, i);

  result += generate(set);
}

console.log(result)
