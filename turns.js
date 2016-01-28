initialTurn = {
    "context": {
        "text" : "A large group of protesters comes around the corner and heads right for you!",
        "media" : {
            "type": "image",
            "url": "media/police-disperce-tuition-protesters-2.jpg"
        }
    },
    "triggerLimits": [],
    "options": {
        1: {
            "label": "Fire rubber bullets at them",
            "vitalsDeltas": {
                "peacefulProtest" : -25,
                "legality": -25,
                "policeDeath": 0
            }
        },
        2: {
            "label": "Deploy stun grenades to disperse them",
            "vitalsDeltas": {
                "peacefulProtest" : -25,
                "legality": -25,
                "policeDeath": 0,
                "protestSuccess": 0
            }
        },
        3: {
            "label": "Keep your distance and monitor the situation",
            "vitalsDeltas": {
                "peacefulProtest" : 10,
                "legality": 0,
                "policeDeath": 0,
                "protestSuccess": 20
            }
        },
        4: {
            "label": "Move in closely so that they know you are watching and make sure they see that you are armed",
            "vitalsDeltas": {
                "peacefulProtest" : 0,
                "legality": -10,
                "policeDeath": 0,
                "protestSuccess": 5
            }
        }
    }
}

turns = [
    {
        "context": {
            "text" : "The protesters reach the councillor's office... but he's no-show! People start getting angry and suddenly some bins are on fire.",
            "media" : {
                "type": "image",
                "url": "media/police-disperce-tuition-protesters-3.jpg"
            }
        },
        "triggerLimits": [],
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Deploy stun grenades to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Keep your distance and monitor the situation",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "Try to identify some of the leaders and negotiate with them to stop the burning of the bins",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            }
        }
    },
    {
        "context": {
            "text" : "The protesters reach the councillor's office... but he's no-show! People start getting angry and suddenly some bins are on fire.",
            "media" : {
                "type": "image",
                "url": "media/police-disperce-tuition-protesters-4.jpg"
            }
        },
        "triggerLimits": [],
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Deploy stun grenades to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Keep your distance and monitor the situation",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "Try to identify some of the leaders and negotiate with them to stop the burning of the bins",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            }
        }
    }
]
