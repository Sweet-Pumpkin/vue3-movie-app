import axios from 'axios'
import { fetchMoiveTitle } from './example.js'

describe('비동기 테스트', () => {
  test('영화 제목 변환', async () => {
    axios.get = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    })
    const title = await fetchMoiveTitle()
    expect(title).toBe('Frozen ii')
  })
})