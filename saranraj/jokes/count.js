const axios=require('axios');
axios.get("https://v2.jokeapi.dev/joke/Programming?type=single").then((res)=>{
    console.log(res);
})