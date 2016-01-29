(function(engine) {

    var currState = null;

    //currState = engine.takeTurn(currState,0);
    function updateState(n) {

        if (currState === null){
            currState = engine.initialState;
        } else {
            currState = engine.takeTurn(currState, n );
        }

        console.log(currState);

        if (currState.turn !== null) {
            updateView( currState.turn.context,
                        currState.turn.options);
        } else {
            if (typeof currState.ending !== 'undefined'){
                endGame(currState.ending.vitals);
            }
        }
    }
    updateState();

    function updateView(context, options) {

        var $newCard = $('#mainCard').clone()
            .attr('id','newCard')
            .attr('style', '')
            .appendTo( $('body') )
            .show()
            .transition({left: '0'}, 500, function() {
                $('#mainCard').remove();
                $newCard.attr('id','mainCard')
                    .css('position','static');
            });

        var $qText = $newCard.find('.questionText');
        var $qContainer = $newCard.find('.question');
        var $qVideo = $qContainer.find('.videoContainer');
        var $aList = $newCard.find('.answerList');
        var $aHint = $newCard.find('.aHint');
        // SET DESCRIPTION TEXT

        if (typeof(context.text) !== 'undefined')
            $qText.html(context.text);

        if (typeof(context.hint) !== 'undefined') {
            $aHint.attr('href',context.hint)
                .css('display','inline');
        } else {
            $aHint.css('display','none');
        }

        // SET DESCRIPTION MEDIA

        if (typeof(context.media) !== 'undefined')
            switch (context.media.type) {
                case "image" :
                    $qContainer.css('background-image','url('+ context.media.url +')');
                    $qVideo.css('visibility','hidden');
                    break;
                case "youtube" :
                    $qContainer.css('background-image','url(media/police-vague.jpg)');
                    $qVideo.empty().append(
                        $('<iframe>').attr('src', context.media.url)
                    ).css('visibility','visible');
                    break;
                case "logo" :
                    $qContainer.css('background-image','url(media/police-vague.jpg)');
                    $qVideo.empty().append(
                        $('<img>').attr('src', context.media.url).addClass('logo')
                    ).css('visibility','visible');
                    break;
            }

        // SET ANSWERS

        $aList.empty();

        var option;

        Object.keys(options).forEach(function(n) {

           option = options[n];

           $aList.append(
                $('<li>').html(option.label)
                    .on('click', function() {
                        //animate();
                        updateState(n);
                    })
           );
        });


    }

    function endGame(vitals){
        $('#mainCard').css('position','absolute')
            .transition({left: '-100%'}, 500, function() {
                $('#mainCard').remove();
            });

        var $endCard = $('<main>')
            .appendTo( $('body') )
            .append( $('<section>')
                .addClass('question')
                .css('background-image','url(media/police-disperce-tuition-protesters-3.jpg)')
                .append( $('<div>')
                    .addClass('videoContainer')
                )
                .append( $('<section>')
                    .addClass('gameOver')
                    .append( $('<header>').html('Thank you for playing!'))
                    .append( $('<article>').html(makeEndText(vitals)))
                )
            )
            .transition({left: '0'}, 500, function() {

            });

    }

    function makeEndText(vitals){
        var txt = "";

        var vital;
        var won = false;

        Object.keys(vitals).forEach(function(n) {

            vital = vitals[n];

            if (typeof vital.win !== 'undefined')
                if (vital.win)
                    won = true;
        });

        if (won) {
            txt += "<h1>You've won!</h1>";
        } else {
            txt += "<h1>You've lost!</h1>";
        }

        txt += "Your score is:<br>";

        if (typeof vitals.peacefulProtest !== 'undefined')
            txt += vitals.peacefulProtest.value + " peacefulProtest<br><br>";

        if (typeof vitals.protestSuccess !== 'undefined')
            txt += vitals.protestSuccess.value + " protestSuccess<br>";

        txt += "Made for <br><img src='media/logo-circle.png' style='width: 75%'>"
        txt += "<br><a href='https://www.hackastory.com/' target='_blank'>Hackastory Capetown 2016</a>";
        txt += "<br><br>by people";
        txt += "<br>who have names";
        txt += "<br>which will be listed here";

        return txt;

    }

    $('#popover').find('.popoverClose').on('click', function() {
        $('#popover').hide();
    });

    $('body').find('.showHint').on('click', function() {
        $('#popover').show();
    });

})(engine);