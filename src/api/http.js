import axios from 'axios'
import storeBase from './../store/'

const ax = axios.create({
  headers: {'X-Requested-Token': storeBase.state.user.token}
})

export default ax
