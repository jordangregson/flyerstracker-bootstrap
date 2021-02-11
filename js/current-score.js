function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var date = today.getDate();
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;


    if (numMonth == "0") {
        month = "Jan";
    }

    if (numMonth == "1") {
        month = "Feb";
    }

    if (numMonth == "2") {
        month = "Mar";
    }

    if (numMonth == "3") {
        month = "Apr";
    }

    if (numMonth == "4") {
        month = "May";
    }

    if (numMonth == "5") {
        month = "Jun";
    }

    if (numMonth == "6") {
        month = "Jul";
    }

    if (numMonth == "7") {
        month = "Aug";
    }

    if (numMonth == "8") {
        month = "Sep";
    }

    if (numMonth == "9") {
        month = "Oct";
    }

    if (numMonth == "10") {
        month = "Nov";
    }

    if (numMonth == "11") {
        month = "Dec";
    }

    

    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = `https://api.sportsdata.io/v3/nhl/scores/json/GamesByDate/${apiDate}?key=ae256145ae3b45d19da29122634bd4c4`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //THIS IS AN ALGORITHM DESIGNED TO SEE WHICH ARRAY THE SIXERS GAME TAKES PLACE IN
            
            for(var i = 0; i < data.length; i++) {
                if(data[i].HomeTeamID === 13 | data[i].AwayTeamID === 13) {
                    
                    
                    var teamsPlaying;
                    teamsPlaying = document.getElementById("teams-playing-txt");
                    teamsPlaying.textContent = data[i].AwayTeam + " at " + data[i].HomeTeam;
                    
                    var awayName;
                    awayName =document.getElementById("away-name");
                    awayName.textContent = data[i].AwayTeam;

                    var homeName;
                    homeName =document.getElementById("home-name");
                    homeName.textContent = data[i].HomeTeam;

                    if(data[i].HomeTeamID === 13) {
                        var sixersHome;
                        sixersHome = document.getElementById("home-score");
                        sixersHome.textContent = data[i].HomeTeamScore;
                        

                    }

                    else if(data[i].AwayTeamID === 13) {
                        var sixersAway;
                        sixersAway = document.getElementById("away-score");
                        sixersAway.textContent = data[i].AwayTeamScore;
                    

                    }

                    if(data[i].HomeTeamID !== 13) {
                        var opponentHome;
                        opponentHome = document.getElementById("home-score");
                        opponentHome.textContent = data[i].HomeTeamScore;
                        
                    }

                    if(data[i].AwayTeamID !== 13) {
                        var opponentAway;
                        opponentAway = document.getElementById("away-score");
                        opponentAway.textContent = data[i].AwayTeamScore;
                        

                    }

                    if(data[i].AwayTeamScore === null) {
                        var zeroPlaceHolderAway;
                        zeroPlaceHolderAway = document.getElementById("away-score");
                        zeroPlaceHolderAway.textContent = "0";
                    } 
                    
                    if(data[i].HomeTeamScore === null) {
                        var zeroPlaceHolderHome;
                        zeroPlaceHolderHome = document.getElementById("home-score");
                        zeroPlaceHolderHome.textContent = "0";
                    }
                    
                    





                }
                
            }

        })
}
gameInProgress();

//setInterval(gameInProgress, 300000);
