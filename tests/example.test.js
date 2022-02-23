import { asyncFn } from './example.js'

describe('비동기 테스트', () => {
  test('done', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('Done!')
      done()
    })
  })
  test('then', () => {
    return asyncFn().then(res => {
      expect(res).toBe('Done!')
    })
  })

  test('resolves', () => expect(asyncFn()).resolves.toBe('Done!'))

  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('Done!')
  })
})