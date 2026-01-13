import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

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

app.listen(4000, async () => {
  await loadFeeds();
  console.log("Listening on http://localhost:4000/");
});
