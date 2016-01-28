engine = {

    "initialState": {
        "vitals": {
            "peacefulProtest" : 100,
            "legality": 100,
            "policeDeath": 0,
            "protestSuccess": 0
        },
        nextTurn: initialTurn,
        ending: null
    },

    "endings": [
        {
            "field": {
                "peacefulProtest": {
                    "cmp": "lte",
                    "value": 0
                },
                "win": false
            }
        },
        {
            "field": {
                "protestSuccess": {
                    "cmp": "gte",
                    "value": 100
                },
                "win": true
            }
        }
    ],


    "takeTurn": function(state, optionId) {
        state.vitals.peacefulProtest = 0;
        state.nextTurn = null;
        state.ending = this.endings[0];
        return state
    },

    "check": function() {
        console.log("Hello World!");
        console.log(this);
        console.log("-------------")
    }
}
