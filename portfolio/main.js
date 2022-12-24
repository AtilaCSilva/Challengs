const url = 'https://api.github.com/users/atilaCSilva'

axios
  .get(url)
  .then(response => {
    const data = response.data
    picture.src = data.avatar_url
  })
  .catch(err => console.log(err))
