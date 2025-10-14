import RSSparser from 'rss-parser';

const feedURL = "https://feeds-api.dotdashmeredith.com/v1/rss/google/f6a0e92b-be8d-4abb-9106-703b04059e19"

const parser = new RSSparser();

const parse = async url => {
    const feed = await parser.parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    })  
}

parse(feedURL)