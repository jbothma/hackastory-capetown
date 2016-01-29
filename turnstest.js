initialTurn = {
    "context": {
        "text" : "Question nr 1",
        "media" : {
            "type": "image",
            "url": "media/1.png"
        }
    },
    "triggerLimits": [],
    "options": {
        1: {
            "label": "1-1",
            "vitalsDeltas": {
                "peacefulProtest" : -25,
                "legality": -25,
                "policeDeath": 0
            }
        },
        2: {
            "label": "1-2",
            "vitalsDeltas": {
                "peacefulProtest" : -25,
                "legality": -25,
                "policeDeath": 0,
                "protestSuccess": 0
            }
        },
        3: {
            "label": "1-3",
            "vitalsDeltas": {
                "peacefulProtest" : 10,
                "legality": 0,
                "policeDeath": 0,
                "protestSuccess": 20
            }
        },
        4: {
            "label": "1-4",
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
            "text": "Question nr 2",
            "media": {
                "type": "youtube",
                "url": "https://www.youtube.com/embed/zuJYCwMtIAc"
            }
        },
        "triggerLimits": {},
        "options": {
            1: {
                "label": "2-1",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "2-2",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "2-3",
                "vitalsDeltas": {
                    "peacefulProtest": 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "2-4",
                "vitalsDeltas": {
                    "peacefulProtest": 0,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 5
                }
            }
        }
    },
    {
        "context": {
            "text": "Question nr 3",
            "media": {
                "type": "image",
                "url": "media/3.png"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 50
            }
        },
        "options": {
            1: {
                "label": "3-1",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "3-2",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "3-3",
                "vitalsDeltas": {
                    "peacefulProtest": 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "3-4",
                "vitalsDeltas": {
                    "peacefulProtest": 0,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 5
                }
            }
        }
    },
    {
        "context": {
            "text": "Question nr 4",
            "media": {
                "type": "image",
                "url": "media/4.jpg"
            }
        },
        "triggerLimits": [],
        "options": {
            1: {
                "label": "4-1",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "4-2",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "4-3",
                "vitalsDeltas": {
                    "peacefulProtest": 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "4-4",
                "vitalsDeltas": {
                    "peacefulProtest": 0,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 5
                }
            }
        }
    },
    {
        "context": {
            "text": "Question nr 5",
            "media": {
                "type": "image",
                "url": "media/5.png"
            }
        },
        "triggerLimits": [],
        "options": {
            1: {
                "label": "5-1",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "5-2",
                "vitalsDeltas": {
                    "peacefulProtest": -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "5-3",
                "vitalsDeltas": {
                    "peacefulProtest": 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "5-4",
                "vitalsDeltas": {
                    "peacefulProtest": 0,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 5
                }
            }
        }
    }
    ]
