require('dotenv').config();

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  NODE_ENV
} = process.env;
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret:  TWITTER_CONSUMER_SECRET,
  access_token_key:  TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret:  TWITTER_ACCESS_TOKEN_SECRET
});
 
var params = {screen_name: 'awish4me'};

exports.wishesDrawn = (req, res) =>{
 
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    
    if (!error) {
      res.json(tweets.map(tweet =>{
     //   console.log(tweet.entities)
       

         return {
          "tweet_id": tweet.id,
          "tweet_url": ((tweet.entities ) ?((tweet.entities.media!==undefined)?((tweet.entities.media[0]!=="")?(tweet.entities.media[0].url):('')): ('')):'') ,
          
          "user_profile_image": tweet.user.profile_image_url,
          "text" : tweet.text,
          "retweet_count" : tweet.retweet_count,
          "favorite_count": tweet.favorite_count,   
          "image_url":((tweet.extended_entities ) ?((tweet.extended_entities.media!==undefined)?((tweet.extended_entities.media[0]!=="")?(tweet.extended_entities.media[0].media_url):('')): ('')):'') 
          };
  
         
        
     
    }))
  }})
}

