
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

            console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].HomeTeamID === 13 | data[i].AwayTeamID === 13) {
                    if (data[i].HomeTeamScore === "null" && data[i].AwayTeamScore === "null") {
                        var gameIsNotHappening;
                        gameIsNotHappening = document.getElementById("gip-answer");
                        gameIsNotHappening.textContent = "No";
                    }

                    else if (data[i].HomeTeamScore !== "null" && data[i].AwayTeamScore !== "null") {
                        var gameIsHappening;
                        gameIsHappening = document.getElementById("gip-answer");
                        gameIsHappening.textContent = "Yes";
                    }




                }
            }


        })
}
gameInProgress();
