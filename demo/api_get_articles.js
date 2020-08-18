const axios = require('axios');
const API_BASE_URL = 'https://361ef5e7e1c5.ngrok.io/api';
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzhlYzUyM2RiMzgyMjIxNGRiYjA1OSIsInVzZXJuYW1lIjoiZGVtbyIsImV4cCI6MTYwMjk0NzIwNCwiaWF0IjoxNTk3NzYzMjA0fQ.WU6a-CshktEKX9xL3pSGOe2-PVBbrzzq6eLQyk_h-s";

getArticles();

function getArticles() {

    axios({
            method: 'get',
            url: API_BASE_URL + '/articles',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + API_TOKEN
            }
        })
        .then(function(response) {
            console.log("Retrieving all articles:")
            var articles = response.data['articles'];
            for (let i = 0; i < articles.length; i++) {
                console.log(articles);
            }
        })
        .catch(function(error) {
            console.log(error);
        });

}