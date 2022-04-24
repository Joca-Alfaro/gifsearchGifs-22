export const getApiGifp = async (category)=>{
    const Api_Key= 'eFYRPdthw1tBMBzZckIBGzLA3HBntu7g'
    const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${Api_Key}`
    const responsData = await fetch(URL)
    const {data} = await responsData.json()
    const Gif_Map = data.map((img)=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.original.url
            
        } 
       
    })
    console.log("--->",Gif_Map)
   
    

    
}

