// packages
const fs = require('fs')

// main fields
const p1field = document.getElementById("p1name")
const p2field = document.getElementById("p2name")
const resetScoresBtn = document.getElementById("reset-scores")
const tourneyRoundField = document.getElementById("tourney-round")
const tourneyNameField = document.getElementById("tourney-name")
const saveBtn = document.getElementById("save")
const fields = [p1field, p2field, resetScoresBtn, tourneyRoundField, tourneyNameField, saveBtn]

// other elements
const p1score = document.getElementById("p1score")
const p2score = document.getElementById("p2score")

// event listeners
for (let field of fields) field.addEventListener("focus", handleFocus)
window.addEventListener("keydown", handleKeyDown)
resetScoresBtn.addEventListener("click", resetScores)
saveBtn.addEventListener("click", save)

// constants
const numFields = fields.length

// state
let state = {
    fieldIndex: 0,
    shiftPressed: false,
    p1score: 0,
    p2score: 0,
    p1name: "",
    p2name: "",
    tourneyName: "",
    tourneyRound: ""
}

// event handlers
async function handleKeyDown (e) {
    let doFocus = false
    switch(e.key) {
        case "ArrowRight":
            state.fieldIndex++
            doFocus = true
            break
        case "ArrowLeft":
            state.fieldIndex--
            doFocus = true
            break
        case "ArrowUp":
            if (state.fieldIndex===0) {
                state.p1score++
                p1score.value = state.p1score.toString()
            } else if (state.fieldIndex===1) {
                state.p2score++
                p2score.value = state.p2score.toString()
            }
            doFocus = true
            break
        case "ArrowDown":
            if (state.fieldIndex===0) {
                state.p1score--
                if (state.p1score < 0) state.p1score = 0
                p1score.value = state.p1score.toString()
            } else if (state.fieldIndex===1) {
                state.p2score--
                if (state.p2score < 0) state.p2score = 0
                p2score.value = state.p2score.toString()
            }
            doFocus = true
            break
    }
    if (doFocus) {
        state.fieldIndex = (state.fieldIndex + numFields)%numFields
        fields[state.fieldIndex].focus()
    }
}

function handleFocus (e) {
    switch (e.target.id) {
        case "p1name": state.fieldIndex = 0
            break;
        case "p2name": state.fieldIndex = 1
            break;
        case "reset-scores": state.fieldIndex = 2
            break;
        case "tourney-round": state.fieldIndex = 3
            break;
        case "tourney-name": state.fieldIndex = 4
            break;
        case "save": state.fieldIndex = 5
            break;
    }
}

// main functions
function init () {
    p1field.select()
    resetScores()
}

function resetScores () {
    p1score.value = "0"
    p2score.value = "0"
    state.p1score = 0
    state.p2score = 0
}

function save () {
    fs.writeFileSync('./text/p1name', state.p1name)
    fs.writeFileSync('./text/p1score', state.p1score)
    fs.writeFileSync('./text/p2name', state.p2name)
    fs.writeFileSync('./text/p1score', state.p2score)
    fs.writeFileSync('./text/tourneyround', state.tourneyRound)
    fs.writeFileSync('./text/tourneyname', state.tourneyName)
}

init()