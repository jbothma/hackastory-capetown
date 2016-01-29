engine = {

    initialState: {
        vitals: {
            peacefulProtest : 100,
            legality: 100,
            policeDeath: 0,
            protestSuccess: 0,
            negotiations: 0,
            intro: 1
        },
        previousTurn: null,
        turn: initialTurn,
        ending: null
    },

    endings: [
        {
            vitals: {
                peacefulProtest: {
                    cmp: "lte",
                    value: 0,
                    win: false,
                    explanation: "You’ve lost control of the situation! <br>You came down way too hard on the protesters the march has ended in chaos and arrests - and possible criminal charges against you. Your clamp-downs backfired. <br>You should <a href=\"ni_4.pdf\">read the regulations on police conduct at protests</a>. Or resign as a cop!"
                },
            }
        },
        {
            vitals: {
                protestSuccess: {
                    cmp: "gte",
                    value: 60,
                    win: true,
                    explanation: "Well done! <br>Despite some chaos, the protest has concluded successfully and you managed to avoid major violence and chaos. Your conduct was more or less in line with <a href=\"ni_4.pdf\">the regulations on police conduct.</a>"
                },
            }
        }
    ],

    applyChoice: function(state, optionId) {
        Object.keys(state.vitals).forEach(function(vital) {
            var delta = 0;
            if (vital in state.turn.options[optionId].vitalsDeltas) {
                delta = state.turn.options[optionId].vitalsDeltas[vital];
            }

            state.vitals[vital] = state.vitals[vital] + delta;
        });
        return state;
    },

    getTurns: function(state) {
        var relevantTurns = turns.filter(function(turn) {
            var include = true;
            Object.keys(turn.triggerLimits).forEach(function(vital) {
                var currentVital = state.vitals[vital];
                var thresholds = turn.triggerLimits[vital];
                if ((currentVital < thresholds.min)
                    || (currentVital > thresholds.max)) {
                    include = false;
                }
            })
            return include;
        });
        if (relevantTurns.length > 1) {
            relevantTurns = relevantTurns.filter(function(turn) {
                return turn != state.previousTurn;
            })
        };
        console.log("Turn chosen randomly from ", relevantTurns.length);
        return relevantTurns;
    },

    transition: function(state) {
        this.endings.forEach(function(ending) {
            Object.keys(ending.vitals).forEach(function(vital) {
                var comparison = ending.vitals[vital].cmp;
                var currentVital = state.vitals[vital];
                var threshold = ending.vitals[vital].value;
                if ((comparison === "lte") && (currentVital <= threshold)) {
                    state.ending = ending;
                } else if ((comparison === "gte") && (currentVital >= threshold)) {
                    state.ending = ending;
                }
            })
        });
        state.previousTurn = state.turn;
        if (state.ending === null) {
            var turns = this.getTurns(state);
            var idx = Math.round(Math.random()*(turns.length-1));
            state.turn = turns[idx];
            if ('entryVitalDeltas' in state.turn) {
                Object.keys(state.turn.entryVitalDeltas).forEach(function(vital) {
                    var delta = state.turn.entryVitalDeltas[vital];
                    state.vitals[vital] = state.vitals[vital] + delta;
                })
            }
        } else {
            state.turn = null;
        }
        return state;
    },

    takeTurn: function(state, optionId) {
        state = this.applyChoice(state, optionId);
        state = this.transition(state);
        return state
    },

    "check": function() {
        console.log("Hello World!");
        console.log(this);
        console.log("-------------")
    }
}
