export const get = async ( page ) => {
  return await fetch(`https://api.mwi.dev/content/${page}`)
      .then(response => response.json())
      .then(data => {
        return data;
      }).catch(err => console.log(err))
}