import RSSparser from 'rss-parser';
import cors from 'cors';
import express from 'express';

const investopediaURL = "https://feeds-api.dotdashmeredith.com/v1/rss/google/f6a0e92b-be8d-4abb-9106-703b04059e19"
const cnbcURL = "https://www.cnbc.com/id/100003114/device/rss/rss.html"
const investingComURL = "https://www.investing.com/rss/news_1.rss"




const parser = new RSSparser();

let articles = [];

const parse = async url => {
    const feed = await parser.parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        articles.push({item});
        console.log(articles)
    })  
}

parse(investingComURL);

let app = express();
app.use(cors());

app.get("/", (req,res) => {
    res.send(articles)
    
})

const server = app.listen("4000", () => {
    console.log("App is listening at http://localhost:4000");
})

export default server;