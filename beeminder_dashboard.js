#!/data/data/com.termux/files/usr/bin/node

const params = require("./params.json");

const beeminder = require('beeminder');
const bm = beeminder(params.BEEMINDER_AUTH_TOKEN);
const fs = require("fs");

function saveURLsToFile(data) {
    goalUrls = [];
    for (let i = 0; i <  data['goals'].length; i++) {
        goalUrls.push(data['goals'][i]['graph_url']);
    }
    // This is a Tasker function.
    console.log(goalUrls);
    fs.writeFileSync('./graph_urls.json', JSON.stringify(goalUrls));
}

bm.getUserSkinny(function(err, result) {
})
    .then(saveURLsToFile)
    .catch(console.log);
