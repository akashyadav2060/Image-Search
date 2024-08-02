
import populateLabels from './labels.js';
import search from'./search.js';
import {getCookie} from './cookies.js'
populateLabels();
document.querySelector('form').addEventListener('submit',async function(event){
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await search(query);

    
});
(async() => {
    const query = getCookie();
    await search(query);
})()
