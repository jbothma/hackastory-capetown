engine = {

    initialState: {
        vitals: {
            peacefulProtest : 100,
            legality: 100,
            policeDeath: 0,
            protestSuccess: 0,
            negotiations: 0
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
                    win: false
                },
            }
        },
        {
            vitals: {
                protestSuccess: {
                    cmp: "gte",
                    value: 100,
                    win: true
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
        console.log(relevantTurns.length);
        if (relevantTurns.length > 1) {
            relevantTurns = relevantTurns.filter(function(turn) {
                return turn != state.previousTurn;
            })
        };
        console.log(relevantTurns.length);
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
