const ACCESS_KEY = "wbiC4OLLECSekdC_SQzYx6XvDgCYWvcpOKl1LabNYyU";
const SECRET_KEY = "3s4Iv_zQUPhFznKaKf4H5TDu7O2SV2f8ElnUpNlaQGM";

document.querySelector('form').addEventListener('submit',async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;

    const url =`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;
    let imageElements = '';
    
    for(let image of images){
        const imageUrl = image.urls.regular;
        imageElements += `<img src="${imageUrl}" alt="">`;
        console.log({imageUrl});
    }
    document.querySelector('.images').innerHTML = imageElements;
    console.log({data});
})