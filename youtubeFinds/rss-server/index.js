import RSSparser from 'rss-parser'; //Library that fetches RSS XML and turns it into Javascript objects
import cors from 'cors';//Middleware that allows cross origin requests and without it the app gets blocked by the browser because it lacks CORS headers for security reasons.
import express from 'express'; //minimalist http server for Node.js

const investopediaURL = "https://feeds-api.dotdashmeredith.com/v1/rss/google/f6a0e92b-be8d-4abb-9106-703b04059e19"
const cnbcURL = "https://www.cnbc.com/id/100003114/device/rss/rss.html"
const investingComURL = "https://www.investing.com/rss/news_1.rss"




const parser = new RSSparser(); //creates a reusable parser object which internally fetches URLs ,parse XML and returns JS objects.

const  feeds = [
    {name: "investopedia", url: investopediaURL},
    {name: "cnbc", url: cnbcURL},
    {name: "investing.com", url: investingComURL}
]

//
async function loadFeed(){

}