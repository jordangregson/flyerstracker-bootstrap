function nhlStandings() {

    const api_url = `https://api.sportsdata.io/v3/nhl/scores/json/Standings/2021?key=ae256145ae3b45d19da29122634bd4c4`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            for (var i = 0; i <= data.length; i++) {
                if (data[i].Division === "East") {
                    var east = data[i];
                    console.log(east);
                    return east;
                }
                
            }



        })
} nhlStandings();