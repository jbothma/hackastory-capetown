engine = {

    initialState: {
        vitals: {
            peacefulProtest : 100,
            legality: 100,
            policeDeath: 0,
            protestSuccess: 0
        },
        nextTurn: initialTurn,
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
        return state;
    },

    transition: function(state) {
        state.nextTurn = turns[Math.round(Math.random(turns.length))];
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
