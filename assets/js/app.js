
import{ACCESS_KEY} from './constants'

const labels = ['Montréal', 'Canada', 'Collective', 'Table', 'Interior', 'Chair', 'Coffee Shop', 'Coffee Machine', 'Coffee', 'Cafe']
function populateLabels(){
    const labelElements = labels.map(label =>{
        return `<button class="label-btn">${label}</button>`;
    });
    document.querySelector('.labels-wrap').innerHTML = labelElements.join("");
   
}
populateLabels();
document.querySelectorAll('.label-btn').forEach(button =>{
    button.addEventListener('click', async(event)=>{

       const query =event.target.textContent;
       await search(query);
    
    })

})

document.querySelector('form').addEventListener('submit',async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await search(query);

    
});
async function search(query){
    const now = new Date();
    const expires = now.setTime(now.getTime() + (7 * 24 * 60 * 60 *1000));
    document.cookie=`query=${query}; expires=${ new Date(expires)}; path=/`;
    
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
};
(async() => {
    const cookie = document.cookie;
    const query = cookie.split("=")[1];
    console.log(cookie)
    console.log(query);
    await search(query);
})()
