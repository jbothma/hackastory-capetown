initialTurn = {
    "context": {
        "text" : "a protest is starting",
        "media" : {
            "type": "image",
            "url": "media/blue-macaw-bird.jpg"
        }
    },
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
}

turns = [
    {
        "context": {
            "text" : "the crowd gets near the mayor's office",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
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
        "context": {
            "text" : "the crowd starts throwing stones",
            "media" : {
                "type": "image",
                "url": "media/rainbow.jpg"
            }
        },
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
