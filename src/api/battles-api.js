import axios from 'axios'

const BASE_URL = process.env.BATTLE_API

function getPublicStartupBattles () {
  const url = `${BASE_URL}/api/battles/public`
  return axios.get(url).then(response => response.data)
}

function getPrivateStartupBattles () {
  const url = `${BASE_URL}/api/battles/private`
  return axios.get(url)
    .then(response => response.data)
    .catch((err) => {
      if (err.toString().includes('401')) {
        return axios.get(url, {
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFqZENSRUkzUVVORU5UbENNelF3TlVFd01rWkVNVEk1TmtaQlJrVkROakZHUkVSQk1UQkZNQSJ9.eyJpc3MiOiJodHRwczovL3NhbG9keS5hdXRoMC5jb20vIiwic3ViIjoiaDdMQ1NBMXM1NVp6eTBSeU1TN2g2QkQ0R0R2anRGdjhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc2Fsb2R5LmNjIiwiaWF0IjoxNTI4OTMwODUzLCJleHAiOjE1MjkwMTcyNTMsImF6cCI6Img3TENTQTFzNTVaenkwUnlNUzdoNkJENEdEdmp0RnY4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.Sf9KV5V2hZviiFuweeKPCkp6PDFt9kU6C0LU0Fw0oEETnPTN8PEeCsLtQ4fnKezRGGxyOBSJx4kGflSI4yeh3JrgN2akLzMEZMU5f7ZaBGjN4UKd5-ljojIYj2AAbCtjb9z7Ca1oZbDJXiSrAgplTNxGcJE63gq_7mtAsMhqNSUzcMU2o5ZYhhoCcSiu9TN4OjBEBc7aEtO7a2DXtIFFc8mwDVYG-RauU0fJKlIEQ8KXB3HRpU_RBa5ix2Qj2c0qB5VagL_yRDbqQO1Mx4ELZfdhPmxPAS3z3aM1hwbdHsBnfohcD2D6WWQmx2ElHe18dOI84N-scolCLVsEPTV9Cg'
          }
        }).then(response => response.data)
      }
    })
}

export {getPublicStartupBattles, getPrivateStartupBattles}
