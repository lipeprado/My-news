// Load axios
// function to return module
// call axios to fetch the Weather

var axios = require('axios');
const NEWS_API_KEY = 'cea3daa07100492aa257a48d7214f93d';
const URL_NEWS_API = 'https://newsapi.org/v1/articles?source=&apiKey=cea3daa07100492aa257a48d7214f93d';

module.exports = {
    getTemp: function(location){
        var encodedNews = encodeURIComponent(news);
        var requestUrl = `${URL_NEWS_API}&q=${encodedNews}`;
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                var parametros = {
                    author: res.data.articles.author,
                    description: res.data.articles.description,
                    url: res.data.articles.url

                };
                return parametros;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }


}
