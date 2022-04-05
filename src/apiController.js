export const get = ( page ) => {
  return fetch(`https://api.mwi.dev/content/${page}`)
      .then(response => response.json())
      .then(data => {
        return data;
      }).catch(err => console.log(err))
}