

let players = [];
let draft = [];
let nxtRnd = [];
let prevX = [];

function makeLottery(prePick, nxtRd, amnt) {
    for (let i = 0; i < amnt; i++) {
        nxtRd.push(prePick);
    }
}

function delLottery(pick, curRd, amnt) {
    for (let i = 0; i < curRd.length; i++) {
        if (curRd[i] === pick) {
            curRd.splice(i, amnt);
            break;
        }
    }    
}

function doDraft() {
    // variables
    let message = ''
    let rounds = document.getElementById("rounds").value;
    message += (`${rounds} rounds<br><br>`);
    let numOfPlayers = document.getElementById("numOfPlayers").value;
    message += (`${numOfPlayers} players<br>`);
    let player = 0;
    // for loop through rounds
    for (let i = 1; i <= rounds; i++) {
        message += (`<br>Round ${i}<br>`);
        // for loop through the number of players
        for (let index = 1; index <= numOfPlayers; index++) {
            // if round 1
            if (i === 1) {
                // assign initial values and round 1 placements
                players[index] = [index];
                // assign pick to index
                player = index;
                // display results round 1
                message += (`Pick ${index}: Player ${player}<br>`);
                // make lottery
                makeLottery(player, nxtRnd, index);
            } else {
                if (index === 1) {
                    draft = nxtRnd;
                    nxtRnd = [];
                }
                
                // pick from draft array
                player = draft[Math.floor(Math.random() * draft.length)];

                // display results round
                message += (`Pick ${index}: Player ${player}<br>`);

                // remove all values equal to pick in draft array
                delLottery(player, draft, prevX[player]);
                makeLottery(player, nxtRnd, index);
            }
            prevX[player] = index;
        }
    }
    document.getElementById('msg').innerHTML=message 
}