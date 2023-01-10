import { promiseAllLimited } from './index';

describe('promiseAllParallel', () => {
  it('keeps order', async () => {
    expect(
      await promiseAllLimited(10,
        
        new Array(100).fill(0).map((_, i) => i).map(i => () => Promise.resolve(i)),
      )
    ).toEqual(new Array(100).fill(0).map((_, i) => i))
  })
})
