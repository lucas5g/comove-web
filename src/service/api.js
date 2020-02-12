import axios from 'axios'

const hostname = () => {
  const app = window.location.hostname 
  if(app === 'localhost'){
    return 'http://localhost:8001' 
  }
  /*
  if(app === 'comeve.netlify.com'){
    return 'https://comeve.azurewebsites.net'
  }
  /** */
  if(app === 'teste-comeve.netlify.com' || app === 'comeve.netlify.com'){
    return 'https://comeve.detec.site'
  }
  //https://comeve.netlify.com/
  return 'http://10.20.0.26:8001'
}

const api = axios.create({
  baseURL: hostname(),
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
console.log('23:38')
console.log(hostname())
export default api
