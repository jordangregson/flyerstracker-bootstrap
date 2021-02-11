function gameInProgress(apiDate) {

    //turning the date into sportsdata.io format

    var today = new Date();

    var date = today.getDate();
    
    var numMonth = today.getMonth();
    var year = today.getFullYear();

    var month;
    var date;

    


    //ADJUSTING THE STYLE OF THE DAY
    if (date == "1") {
        date = "01";
    }

    if (date == "2") {
        date = "02";
    }

    if (date == "3") {
        date = "03";
    }

    if (date == "4") {
        date = "04";
    }

    if (date == "5") {
        date = "05";
    }

    if (date == "6") {
        date = "06";
    }

    if (date == "7") {
        date = "07";
    }

    if (date == "8") {
        date = "08";
    }

    if (date == "9") {
        date = "09";
    }


    //ADJUSTING THE STYLE OF THE MONTH
    if (numMonth == "0") {
        month = "01";
    }

    if (numMonth == "1") {
        month = "02";
    }

    if (numMonth == "2") {
        month = "03";
    }

    if (numMonth == "3") {
        month = "04";
    }

    if (numMonth == "4") {
        month = "05";
    }

    if (numMonth == "5") {
        month = "06";
    }

    if (numMonth == "6") {
        month = "07";
    }

    if (numMonth == "7") {
        month = "08";
    }

    if (numMonth == "8") {
        month = "09";
    }

    if (numMonth == "9") {
        month = "10";
    }

    if (numMonth == "10") {
        month = "11";
    }

    if (numMonth == "11") {
        month = "12";
    }

    

    var apiDate;
    apiDate = year + "-" + month + "-" + date;


    const api_url = `https://api.sportsdata.io/v3/nhl/scores/json/GamesByDate/${apiDate}?key=ae256145ae3b45d19da29122634bd4c4`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            

            for(var i = 0; i < data.length; i++) {
                if(data[i].HomeTeamID === 13 | data[i].AwayTeamID === 13) {
                    if(data[i].HomeTeamScore === "null" && data[i].AwayTeamScore === "null") {
                        var gameIsNotHappening;
                        gameIsNotHappening = document.getElementById("gip-answer");
                        gameIsNotHappening.textContent = "No";
                    }

                    else if(data[i].HomeTeamScore !== "null" && data[i].AwayTeamScore !== "null") {
                        var gameIsHappening;
                        gameIsHappening = document.getElementById("gip-answer");
                        gameIsHappening.textContent = "Yes";
                    }
                   
                    
                    var displayedDate = dayjs(data[i].DateTime).format('dddd, MMM D, YYYY');
                    var displayedTime = dayjs(data[i].DateTime).format('h:mma');
                    

                    var gameTime = document.getElementById("game-start-date");
                    gameTime.textContent = displayedDate;

                    var gameDate = document.getElementById("game-start-time");
                    gameDate.textContent = displayedTime;
                }

                
            }


        })
}
gameInProgress();
