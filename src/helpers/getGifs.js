
const getGif = async(categoriaName) => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoriaName)}&api_key=RNbH9pTPA5uMB2Y3FKI1f2uUjg5FIVx2`
    const resp = await fetch(urlApi);
    
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            img: img.images?.downsized_medium.url,
        };
    });

    return gifs
}

export default getGif;