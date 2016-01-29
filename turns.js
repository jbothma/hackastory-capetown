initialTurn = {
    "context": {
        "text" : "A large group of protesters comes around the corner and heads right for you!",
        "media" : {
            "type": "image",
            "url": "media/police-disperce-tuition-protesters-1.jpg"
        }
    },
    "triggerLimits": {
        "peacefulProtest": {
            "min": 100,
            "max": 1000
        },
        "legality": {
            "min": 100,
            "max": 1000
        }
    },
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
};

turns = [

    {
        "context": {
            "text" : "The protesters reach the councillor's office... but he's no-show! People start getting angry and suddenly some bins are on fire.",
            "media" : {
                "type": "youtube",
                "url": "https://www.youtube.com/embed/zuJYCwMtIAc"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 50,
                "max": 1000
            },
            "protestSuccess": {
                "min": 0,
                "max": 30
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
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
            "text" : "The protesters reach the councillor's office and hand over their memorandum successfully. While some protesters start going home, others are angry at the police and start damaging the council property. ",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 50
            },
            "protestSuccess": {
                "min": 70,
                "max": 1000
            },
            "legality": {
                "min": 0,
                "max": 30
            }
        },
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
                "label": "Try to identify some of the leaders and negotiate with them.",
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
            "text" : "A bunch of protesters split away and start moving back to the train station",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "protestSuccess": {
                "min": 0,
                "max": 30
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": 5
        },
        "options": {
            1: {
                "label": "Stop them and turn them back. They didn't get permission to disperse early",
                "vitalsDeltas": {
                    "peacefulProtest" : -15,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -5
                }
            },
            2: {
                "label": "Demand that the protest leaders keep them in formation",
                "vitalsDeltas": {
                    "peacefulProtest" : -5,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Keep your distance and monitor the situation",
                "vitalsDeltas": {
                    "peacefulProtest" : -5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            }
        }
    },

    {
        "context": {
            "text" : "Wait! This is an illegal protest in terms of the Regulation of Gatherings Act",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "protestSuccess": {
                "min": 0,
                "max": 20
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": 0
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                    "peacefulProtest" : -5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Keep your distance and monitor the situation",
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
            "text" : "There are way more people that what the protest organisers agreed to.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "protestSuccess": {
                "min": 0,
                "max": 40
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": 0
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "Cordon off a section of the crowd and move them somewhere else",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            }
        }
    },

    {
        "context": {
            "text" : "People are now burning tyres. There is smoke rising in the air and they're singing",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 20,
                "max": 70
            },
        },
        "entryVitalDeltas": {
            "peacefulProtest": -1
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                "label": "Isolate the agitators from the rest of the crowd",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            }
        }
    },

    {
        "context": {
            "text" : "Someone's looting a trader!",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 20,
                "max": 50
            },
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                    "peacefulProtest" : -5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Isolate the agitators and arrest them",
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
            "text" : "Your tactics worked! But a group of disruptors has just arrived and calling for people to attack the police.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 50,
                "max": 1000
            },
            "negotiations": {
                "min": 9,
                "max": 21
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                    "peacefulProtest" : -5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Isolate the agitators from the rest of the crowd",
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
            "text" : "The crowd is getting angrier and advancing. They look aggressive.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 50
            },
            "legality": {
                "min": 0,
                "max": 50
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -2
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                "label": "Try negotiate with the leaders or try divert the march to another location",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "Issue a warning to the crowd that you will take action against them",
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
            "text" : "The protesters react angrily and now there are clashes between protesters and police",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 30
            },
            "legality": {
                "min": 0,
                "max": 20
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Open fire!",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 1,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Deploy stun grenades to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Deploy teargas to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Isolate the agitators and arrest them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            5: {
                "label": "Arrest everybody - NOW",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -20,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            }
        }
    },
    {
        "context": {
            "text" : "Your tactics haven't worked. Disrupters try to set the councillor's office on fire.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 50
            },
            "negotiations": {
                "min": 9,
                "max": 21
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Move in with truncheons. Anyone who doesn't run gets hit",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Deploy teargas to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Isolate the agitators and arrest them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "Arrest everybody - NOW",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -20,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            },
            5: {
                "label": "Issue a warning to the crowd that you will take action against them",
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
            "text" : "Your tactics haven't worked. Disrupters are now brandishing stones.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 0,
                "max": 50
            },
            "negotiations": {
                "min": 11,
                "max": 61
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
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
                "label": "Isolate the agitators from the rest of the crowd",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20

                }
            },
            4: {
                "label": "Issue a warning to the crowd that you will take action against them",
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
            "text" : "Your tactics have worked. But one of them throws a stone at you.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "peacefulProtest": {
                "min": 50,
                "max": 1000
            },
            "negotiations": {
                "min": 11,
                "max": 61
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -1
        },
        "options": {
            1: {
                "label": "Move in with truncheons. Anyone who doesn't run gets hit",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Deploy teargas to disperse everyone",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Isolate the agitator and arrest them",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "Arrest everybody - NOW",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -20,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            },

            5: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            }
        }
    },

    {
        "context": {
            "text" : "One of the protesters comes within arm's reach of you and he's photographing you.",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {
            "legality": {
                "min": -1000,
                "max": 50
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": 2
        },
        "options": {
            1: {
                "label": "Arrest him",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            2: {
                "label": "Just push him away",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Just get him to delete the pictures and move on",
                "vitalsDeltas": {
                    "peacefulProtest" : 0,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Take no action",
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
            "text" : "The crowd are just kinda carrying on with what they were doing",
            "media" : {
                "type": "image",
                "url": "media/lion.jpg"
            }
        },
        "triggerLimits": {},
        "options": {
            1: {
                "label": "Leave them be",
                "vitalsDeltas": {
                    "protestSuccess": 10
                }
            }
        }
    }
];
