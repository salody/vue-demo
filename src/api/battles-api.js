import axios from 'axios'

const BASE_URL = process.env.BATTLE_API

function getPublicStartupBattles () {
  const url = `${BASE_URL}/api/battles/public`
  return axios.get(url).then(response => response.data)
}

function getPrivateStartupBattles () {
  const url = `${BASE_URL}/api/battles/private`
  return axios.get(url).then(response => response.data)
}

export {getPublicStartupBattles, getPrivateStartupBattles}
