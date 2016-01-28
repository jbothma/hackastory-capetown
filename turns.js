initialTurn = {
    "context": "a protest is starting",
    "triggerLimits": [],
    "options": [
        {
            "label": "Shoot them all",
            "vitalsDeltas": {
                "peacefulProtest" : 0,
                "legality": -50,
                "policeDeath": 0
            }
        },
        {
            "label": "Leave them be",
            "vitalsDeltas": {
                "peacefulProtest" : 5,
                "legality": 0,
                "policeDeath": 0
            }
        }
    ]
}

turns = [
    {
        "context": "The crowd get near the mayor's office",
        "triggerLimits": [],
        "options": {
            1: {
                "label": "Shoot them all",
                "vitalsDeltas": {
                    "peacefulProtest" : 0,
                    "legality": -50,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Leave them be",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0
                }
            }
        }
    },
    {
        "context": "The crowd start throwing stones",
        "triggerLimits": [],
        "options": {
            1: {
                "label": "Throw stones back",
                "vitalsDeltas": {
                    "peacefulProtest" : 0,
                    "legality": -20,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Hold the line",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0
                }
            }
        }
    }
]
