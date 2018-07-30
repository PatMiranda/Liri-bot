require('dotenv').config();
var keys = require("./keys.js")
var Spotify = require("node-spotify-api")
var Twitter = require("twitter")
var spotifyKeys = new Spotify(keys.spotify);
var twitterKeys = new Twitter(keys.twitter);
var request = require("request");

var param = process.argv[2]
var searchValue = process.argv[3]



function getInfo(param){
  if (param == "spotify-this-song"){
    spotifyKeys.search({type: "track", query: searchValue, limit: 1}, function(err, data){
      if(err){
        console.log("Error Occurred: " + err)
      }
      else{
        console.log("<--------------------------------->")
        console.log("Artist: "+data.tracks.items[0].artists[0].name);
        console.log("Song: "+ data.tracks.items[0].name);
        console.log("<--------------------------------->")
        console.log("Links: ")
        console.log("Data")
      }
    })
  }
}
// var omdbUrl = "http://www.omdbapi.com/?apikey=d1dfff07&"

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: "8b27ea8c963641faa023ebf1bd140a74",
//   secret: a697fdcafc2140bda6edbc285a0d44b7
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });