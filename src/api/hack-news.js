import axios from 'axios'

function getHackerNews (value, page) {
  const url = `https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`
  return axios.get(url).then(response => response.data)
}

export {getHackerNews}
