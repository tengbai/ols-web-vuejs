import http from './http'

const API_BASE = 'http://10.204.21.136:8081/nho/api'

export default {
  login () {
    return http.post(`${API_BASE}/login`)
  },
  createTraining (training) {
    return http.post(`${API_BASE}/training/`, training)
  }
}
