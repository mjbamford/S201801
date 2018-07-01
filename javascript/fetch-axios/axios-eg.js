axios.get("http://httpstat.us/500")
  .then(function(resp) {
    console.dir(resp);
  }).catch(function(error) {
    console.dir(error);
  })

let api = axios.create({
    baseURL: 'https://jsonplaceholder',
    headers: { 'Authorization': 'Bearer 666' }
})

// Or, provide defaults on-the-fly
// api.defaults.headers.common['Authorization'] = 'Bearer 666'

api.get('/posts/1')
  .then(resp => { console.log(resp.data) })