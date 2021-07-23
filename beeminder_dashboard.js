const params = require("./params.json");

const beeminder = require('beeminder');
const bm = beeminder(params.BEEMINDER_AUTH_TOKEN);

function saveURLsToFile(data) {
    // This is a Tasker function.
    writeFile('./graph_urls.txt', data);
}

bm.getUserSkinny(function(err, result) {
    if (err) {
        throw err;
    }

    goalUrls = [];
    for (let i = 0; i <  result['goals'].length; i++) {
        goalUrls.append(result['goals'][i]['graph_url']);
    }
    return goalUrls;
})
    .then(saveURLsToFile)
    .catch(() => {flash("There was an error fetching Beeminder URLs!")});