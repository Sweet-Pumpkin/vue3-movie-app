import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const _defultMessage = 'Search for the movie title';

export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: _defultMessage,
    loading: false,
    theMovie: {}
  }),
  // computed
  gatters: {},
  // methods
  // 변이
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
      state.message = _defultMessage,
      state.loading = false
    }
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) {
        return
      }
      commit('updateState', {
        message: '',
        loading: true
      })
      try {
        const result = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = result.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
        console.log(totalResults) // 305
        console.log(typeof totalResults) // string
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10) // 305 올림 후 나누기 10 = 출력해야 할 페이지 수
  
        // 추가 요청
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > (payload.number) / 10) {
              break
            }
            const result = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = result.data
            commit('updateState', {
              movies: [
                ...state.movies, 
                ..._uniqBy(Search, 'imdbID')
              ]
            })
          }
        }
      } catch ({ message }) {
        commit('updateState', {
          movies: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return
      
      commit('updateState', {
        theMovie: {},
        loading: true
      })
      try {
        const result = await _fetchMovie(payload)
        console.log(result.data)
        commit('updateState', {
          theMovie: result.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
};

async function _fetchMovie(payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}