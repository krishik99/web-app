export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url,options) => {
    try{
      const response = await fetch(url,options)
      console.log(response)
      if(response.ok){
        const data = await response.json()
        return data
      }else{
        throw new Error(response)
      }
    }catch(error){
      console.error(error)
    }
}