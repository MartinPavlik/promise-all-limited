type PromiseCreator<T> = () => Promise<T>


export function promiseAllLimited<A>(
  limit: number,
  promiseCreators: PromiseCreator<A>[],
): Promise<A[]>;

export function promiseAllLimited<A>(
  limit: number,
  promiseCreators: PromiseCreator<[A]>,
): Promise<[A]>;

export function promiseAllLimited<A, B>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>],
): Promise<[A, B]>;

export function promiseAllLimited<A, B, C>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>],
): Promise<[A, B, C]>;

export function promiseAllLimited<A, B, C, D>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>],
): Promise<[A, B, C, D]>;

export function promiseAllLimited<A, B, C, D, E>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>],
): Promise<[A, B, C, D, E]>;

export function promiseAllLimited<A, B, C, D, E, F>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>],
): Promise<[A, B, C, D, E, F]>;

export function promiseAllLimited<A, B, C, D, E, F, G>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>],
): Promise<[A, B, C, D, E, F, G]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>],
): Promise<[A, B, C, D, E, F, G, H]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>],
): Promise<[A, B, C, D, E, F, G, H, I]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I, J>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>,PromiseCreator<J>],
): Promise<[A, B, C, D, E, F, G, H, I, J]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I, J, K>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>,PromiseCreator<J>,PromiseCreator<K>],
): Promise<[A, B, C, D, E, F, G, H, I, J, K]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I, J, K, L>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>,PromiseCreator<J>,PromiseCreator<K>,PromiseCreator<L>],
): Promise<[A, B, C, D, E, F, G, H, I, J, K, L]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>,PromiseCreator<J>,PromiseCreator<K>,PromiseCreator<L>,PromiseCreator<M>],
): Promise<[A, B, C, D, E, F, G, H, I, J, K, L, M]>;

export function promiseAllLimited<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  limit: number,
  promiseCreators: [PromiseCreator<A>,PromiseCreator<B>,PromiseCreator<C>,PromiseCreator<D>,PromiseCreator<E>,PromiseCreator<F>,PromiseCreator<G>,PromiseCreator<H>,PromiseCreator<I>,PromiseCreator<J>,PromiseCreator<K>,PromiseCreator<L>,PromiseCreator<M>,PromiseCreator<N>],
): Promise<[A, B, C, D, E, F, G, H, I, J, K, L, M, N]>;


export async function promiseAllLimited(...args: any[])  {
  const limit = args[0];
  const promiseCreators = args[1];
  const workers = new Array(limit).fill(0).map((_, i) => i);
  const results = [];
  let i = 0;
  
  const run = async () => {
    const runIndex = i;
    const promiseCreator = promiseCreators[runIndex];
    i++;
    if (!promiseCreator) {
      return Promise.resolve();
    }
    const result = await promiseCreator();
    results[runIndex] = result;
    await run();
  }
  
  await Promise.all(workers.map(run));
  
  return results;
}
