fetch("http://httpstat.us/500")
  .then(function(resp) {
    console.dir(resp)
  }).catch(function(error) {
    console.dir(error)
  })

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => (response.json()))
  .then(json => { console.log(json) })