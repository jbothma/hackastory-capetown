engine = {

    initialState: {
        vitals: {
            peacefulProtest : 100,
            legality: 100,
            policeDeath: 0,
            protestSuccess: 0
        },
        turn: initialTurn,
        ending: null
    },

    endings: [
        {
            field: {
                peacefulProtest: {
                    cmp: "lte",
                    value: 0
                },
                win: false
            }
        },
        {
            field: {
                protestSuccess: {
                    cmp: "gte",
                    value: 100
                },
                win: true
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

    transition: function(state) {
        state.turn = turns[Math.round(Math.random(turns.length))];
        state.ending = null;
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
