import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";
import { DATE } from "mysql/lib/protocol/constants/types";

const parser = new RSSParser();

const feeds = [
  { name: "CNBC", url: "https://www.cnbc.com/id/100003114/device/rss/rss.html" },
  { name: "Investopedia", url: "https://feeds-api.dotdashmeredith.com/v1/rss/google/f6a0e92b-be8d-4abb-9106-703b04059e19" },
  { name: "Investing.com", url: "https://www.investing.com/rss/news_1.rss" }
];

let articles = [];

function normalizeItem(item, source) {
  return {
    id: `${source}-${item.guid || item.link}`,
    source,
    title: item.title || "",
    summary: item.contentSnippet || item.content || "",
    link: item.link,
    pubDate: new Date(item.pubDate || item.isoDate).toISOString()
  };
}

//time filtering logic
function getTimeThreshold(timeRange){
  const  now = Date.now(); //Date.now() gives time in milliseconds

  //defining the time ranges that will reflect in the frontend in milliseconds
  const  ranges = {
    "30m" : 30 * 60 * 1000,
    "1h" : 60 * 60 *1000,
    "4h" : 4 * 60 *60 * 1000,
    "12h" : 12 * 60 * 60 * 1000,
    "24h" : 24 * 60 * 60 * 1000,
    "7d" : 7 * 24 * 60 * 60 * 1000
  }

  return ranges[timeRange] ? new Date(now - ranges[timeRange]) : null;
}


async function loadFeeds() {
  const results = await Promise.allSettled(
    feeds.map(async feed => {
      const parsed = await parser.parseURL(feed.url);
      return parsed.items.map(item =>
        normalizeItem(item, feed.name)
      );
    })
  );

  articles = results
    .filter(r => r.status === "fulfilled")
    .flatMap(r => r.value);
}

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(articles);
});

app.get("/filtered", (req, res) => {
  const {timeRange} = req.query;
  let filteredArticles = articles;

  if (timeRange){
    const threshold = getTimeThreshold(timeRange);
    if (threshold) {
      filteredArticles = articles.filter(article => new Date(app.pubDate) >= threshold)
    }
  }

  res.json(filteredArticles);
})

app.listen(4000, async () => {
  await loadFeeds();
  console.log("Listening on http://localhost:4000/");
});
