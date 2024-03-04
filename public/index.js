// global vars
let saveTimeout = null

// elements
const p1name = document.getElementById("p1name")
const p1score = document.getElementById("p1score")
const p2name = document.getElementById("p2name")
const p2score = document.getElementById("p2score")
const resetPlayersBtn = document.getElementById("reset-players")
const tourneyRound = document.getElementById("tourney-round")
const tourneyName = document.getElementById("tourney-name")
const saveBtn = document.getElementById("save")
const statusMsg = document.getElementById("status-msg")

// event listeners
resetPlayersBtn.addEventListener("click", resetPlayers)
saveBtn.addEventListener("click", save)

// event handlers
function resetPlayers () {
    p1name.value = ""
    p1score.value = "0"
    p2name.value = ""
    p2score.value = "0"
}

async function save () {
    if (saveTimeout) clearTimeout(saveTimeout)

    let result = await fetch('/save', {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({
            p1name: p1name.value,
            p1score: p1score.value,
            p2name: p2name.value,
            p2score: p2score.value,
            tourneyRound: tourneyRound.value,
            tourneyName: tourneyName.value
        })
    })
    result = await result.json()
    
    if (result.success) {
        statusMsg.textContent = "saved"
        statusMsg.style = "color: green"
    } else {
        statusMsg.textContent = "error"
        statusMsg.style = "color: red"
    }

    saveTimeout = setTimeout(() => {statusMsg.textContent = ""}, 1500)
}

// main functions

function init () {
    p1score.value = "0"
    p2score.value = "0"
}

init()