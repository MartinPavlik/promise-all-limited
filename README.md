# Promise All Limited

`Promise.all` with parallel limit.

## Install
```
yarn add install @satankebab/promise-all-limited
```

## Example usage with fetch

```ts
import { promiseAllLimited } from '@satankebab/promise-all-limited';

const urlsToFetch = ['https://google.com', 'https://screenmanager.tech', 'https://mtgstocks.com', 'https://something-else.com'];

// Every fetch function needs to be wrapped with a function so we can control when the fetch is executed
const jobs = urlsToFetch.map(url => () => fetch(url))

promiseAllLimited(
  2,
  jobs,
).then(console.log)
// Will fetch those urls, maximum of parallel requests is 2
```

## Error handling

It behaves the same as `Promise.all`. The only difference is that when an error occurs, the jobs that have not already started will not be started.

```ts
promiseAllLimited(
  2,
  jobs,
).then(console.log).catch(erorr => {
  console.error(error)
})
```
or
```ts
try {
  const result = await promiseAllLimited(
    2,
    jobs,
  )
  console.log(result)
} catch(error) {
  console.error(error)
}
```
or any way you prefer.
