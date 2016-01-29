initialTurn = {
    "context": {
        "text" : "Welcome to South Africa, the protest capital of the world. Police are supposed to facilitate protests without interfering too much.  But it doesn’t always happen that way.",
        "media" : {
            "type": "image",
            "url": "media/crowd-is-advancing.jpg"
        }
    },
    "triggerLimits": {},
    "options": {
        1: {
            "label": "Think you can handle it as a cop in this situation?",
            "vitalsDeltas": {
                "intro": 1
            }
        }
    }
};

turns = [
    {
        "context": {
            "text" : "You are a member of a Public Order Policing unit in Cape Town. \n\nYou have a baton, a shield, and a shotgun with rubber bullets. You also get stun grenades and pepper spray, and your commander is nearby.\n\n The protesters are not your enemy. Your instructions are to use minimum force, but hey, it’s not always so easy.",
            "media" : {
                "type": "image",
                "url": "media/Illegal-protest.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 2,
                "max": 2
            }
        },
        "options": {
            1: {
                "label": "Tension is rising...",
                "vitalsDeltas": {
                    "intro": 1
                }
            }
        }
    },
    {
        "context": {
            "text" : "You've been deployed to a community that's been without water for weeks. Your unit receives word that thousands are marching to the Councillor's office. Before long, a massive group of protesters comes around the corner. They're heading right for you!",
            "media" : {
                "type": "image",
                "url": "media/police-disperce-tuition-protesters-1.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 3,
                "max": 3
            }
        },
        "options": {
            1: {
                "label": "A crowd like this could over-run you at any point. Run away!",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "intro": 1
                }
            },
            2: {
                "label": "Keep your distance and monitor the situation",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20,
                    "intro": 1
                }
            },
            3: {
                "label": "Use a stun grenade to slow the march and make sure you don't get swarmed",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0,
                    "intro": 1
                }
            },
            4: {
                "label": "Move in closely so that they know you are watching and make sure they see that you are armed",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 5,
                    "intro": 1
                }
            }
        }
    },
    {
        "context": {
            "text" : "The protesters reach the councillor's office... but he's no-show! After waiting for an hour for him to show up, people's frustration bubbles over. Suddenly some bins are on fire.",
            "media" : {
                "type": "youtube",
                "url": "https://www.youtube.com/embed/zuJYCwMtIAc"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "Hang back and just see how this plays out",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            2: {
                "label": "Okay, it's time for a stun grenade",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "This can't get out of hand. Fire off some rubber bullets and move them back",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0
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
            "text" : "The protesters reach the councillor's office and hand over their memorandum successfully. While some protesters start going home, others are still angry with the police and start throwing rubbish.",
            "media" : {
                "type": "image",
                "url": "media/shout.jpg"
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "You need to disperse them. Deploy some stun grenades",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            2: {
                "label": "Put an end to this. Arrest everyone",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0
                }
            },
            3: {
                "label": "Wait and see, this may resolve itself",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "See if you can figure out who's in charge and negotiate a solution.",
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
                "url": "media/protesters-split.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -5
                }
            },
            2: {
                "label": "Demand that the protest leaders keep them in formation",
                "vitalsDeltas": {
                    "peacefulProtest" : -20,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Keep your distance and monitor the situation",
                "vitalsDeltas": {
                    "peacefulProtest" : -15,
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
                "url": "media/Illegal-protest.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "Recipe for disaster. Block off the road and turn them back",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "You need to act decisively. Turn them back with rubber bullets or stun grenades.",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            3: {
                "label": "Illegal or not, they're here now. Let's let the protest go ahead and monitor the situation.",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 20
                }
            },
            4: {
                "label": "You don't need to stop them but you do need to send a message. Move close with a line of officers and make sure they can see that you are armed",
                "vitalsDeltas": {
                    "peacefulProtest" : -20,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            }
        }
    },

    {
        "context": {
            "text" : "There are WAY more people that what the protest organisers agreed to. You are completely out-numbered and could over-run at any point.",
            "media" : {
                "type": "image",
                "url": "media/outnumbered.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "Cordon off a section of the crowd and move them somewhere else",
                "vitalsDeltas": {
                    "peacefulProtest" : -25,
                    "legality": -15,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "You need to thin out the crowd a little bit. Rubber bullets are too severe. Try a stun grenade",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },

            3: {
                "label": "Give them space, and see how the situation unfolds",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            }
        }
    },

    {
        "context": {
            "text" : "People are now burning tyres. There is a thick cloud of smoke hanging low in the air and it stinks.",
            "media" : {
                "type": "image",
                "url": "media/burning-tyres.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "That's destruction of property! This thing is out of hand, arrest everyone",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "It's time to disperse. Give the order for stun grenades amd rubber bullets",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "The smoke stinks but for now just hold the line",
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
            "text" : "Over to the side of the march, a fight breaks out between traders and a few protesters!",
            "media" : {
                "type": "image",
                "url": "media/looting.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "There's no time to figure out what happened, but form a cordon on that side and keep the march moving",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 5,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            2: {
                "label": "Clear the area before looting breaks out. Deploy tear gas now!",
                "vitalsDeltas": {
                    "peacefulProtest" : -35,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
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
                    "peacefulProtest" : -5,
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
                "url": "media/tactics-have-worked.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "You can't afford to start a fight now. Just hang back and let this thing play out",
                "vitalsDeltas": {
                    "peacefulProtest" : -15,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            2: {
                "label": "Act decisively. Rubber bullets. Stun grenades",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Don't fire on them right now, but put your riot shotgun at the ready and make it clear you're ready to open fire",
                "vitalsDeltas": {
                    "peacefulProtest" : -15,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Try isolate the agitators from the rest of the crowd",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            }
        }
    },
    {
        "context": {
            "text" : "The crowd is getting angrier and advancing. They look aggressive.",
            "media" : {
                "type": "image",
                "url": "media/flagpicture.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                "label": "You need them to move way back. Fire off some rubber bullets",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "You need to divert the crowd. Stun grenades",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
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
                "url": "media/attack-the-police.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                    "peacefulProtest" : -55,
                    "legality": -25,
                    "policeDeath": 1,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Lob some stun grenades into the crowd and scatter them!",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
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
                    "peacefulProtest" : -40,
                    "legality": -20,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            }
        }
    },
    {
        "context": {
            "text" : "Your tactics haven't worked. Disrupters are now trying to set the councillor's office on fire.",
            "media" : {
                "type": "image",
                "url": "media/tactics-have-not-worked.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Use some teargas to scatter them",
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
                "label": "Things are out of control! It's time to move in - arrest them all",
                "vitalsDeltas": {
                    "peacefulProtest" : -30,
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
                "url": "media/angry.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            2: {
                "label": "Deploy stun grenades to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : -35,
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
                "url": "media/one.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            },
            2: {
                "label": "Release some teargas to disperse everyone",
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
                    "peacefulProtest" : -35,
                    "legality": -20,
                    "policeDeath": 0,
                    "protestSuccess": -20
                }
            },

            5: {
                "label": "Fire rubber bullets at them",
                "vitalsDeltas": {
                    "peacefulProtest" : -35,
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
                "url": "media/photograph2.jpg"
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            },
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
            "text" : "You are moved to a part of the protest that is quieter, but some protesters are insulting you and chanting that police brutality \"must fall\".",
            "media" : {
                "type": " ",
                "url": " "
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": -5
        },
        "options": {
            1: {
                "label": "Argue back and use force if they get angry.",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -5,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Deploy stun grenades to disperse them",
                "vitalsDeltas": {
                    "peacefulProtest" : -40,
                    "legality": -25,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Let them pass by.",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "Do not react, but keep an eye on the angrier protesters.",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            }
        }
    },
    {
        "context": {
            "text" : "The crowd quietens for a while and keeps moving.",
            "media" : {
                "type": " ",
                "url": " "
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            }
        },
        "entryVitalDeltas": {
            "protestSuccess": 5
        },
        "options": {
            1: {
                "label": "Keep an eye on possible instigators of violence.",
                "vitalsDeltas": {
                    "peacefulProtest" : 5,
                    "policeDeath": 0
                }
            },
            2: {
                "label": "Show them your weapons to keep them intimidated.",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -5,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            3: {
                "label": "Let them carry on and keep your distance.",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            4: {
                "label": "Tell them to hurry up and get going.",
                "vitalsDeltas": {
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": -10
                }
            }
        }
    },
    {
        "context": {
            "text" : "The crowd moves on while singing songs loudly and showing protest posters to observers.",
            "media" : {
                "type": " ",
                "url": " "
            }
        },
        "triggerLimits": {
            "intro": {
                "min": 4,
                "max": 4
            }
        },
        "entryVitalDeltas": {
            "peacefulProtest": 5
        },
        "options": {
            1: {
                "label": "Sing along and show your support for their cause.",
                "vitalsDeltas": {
                    "legality" : -10,
                    "policeDeath": 0
                }
            },
            2: {
	        "label": "Let them carry on and keep your distance.",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "legality": 0,
                    "policeDeath": 0,
                    "protestSuccess": 10
                }
            },
            3: {
                "label": "Sneer at them, so that they know you don't agree with their protest.",
                "vitalsDeltas": {
                    "peacefulProtest" : -10,
                    "legality": -10,
                    "policeDeath": 0,
                    "protestSuccess": 0
                }
            },
            4: {
                "label": "Keep an eye on the crowd and make sure no one interferes with their progress.",
                "vitalsDeltas": {
                    "peacefulProtest" : 10,
                    "policeDeath": 0,
                    "protestSuccess": 5
                }
            }
        }
    }
];
