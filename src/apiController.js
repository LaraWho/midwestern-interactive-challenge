const url = 'https://api.mwi.dev'

export const get = (page) => {
  return fetch(`${url}/content/${page}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err))
}

export const post = (formValues) => {
  return fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      })
      .then(response => response.json())
      .then(data =>  data)
      .catch(err => console.log(err))
}