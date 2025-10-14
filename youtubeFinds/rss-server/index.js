import RSSparser from 'rss-parser';
import cors from 'cors';
import express from 'express';

const feedURL = "https://feeds-api.dotdashmeredith.com/v1/rss/google/f6a0e92b-be8d-4abb-9106-703b04059e19"

const parser = new RSSparser();

let articles = [];

const parse = async url => {
    const feed = await parser.parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        articles.push({item});
    })  
}

parse(feedURL)

let app = express();
app.use(cors());

app.get("/", (req,res) => {
    res.send(articles)
})

const server = app.listen("4000", () => {
    console.log("App is listening at http://localhost:4000");
})

export default server;