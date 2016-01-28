(function(engine) {

    var currState = null;

    //currState = engine.takeTurn(currState,0);
    function updateState() {

        if (currState === null){
            currState = engine.initialState;
        } else {
            currState = engine.takeTurn(currState, 0 );
        }

        if (typeof(currState.turn.context) !== 'undefined' &&
            typeof(currState.turn.options) !== 'undefined')
            updateView(currState.turn.context,
                currState.turn.options);
    }
    updateState();

    function updateView(context, options) {
        console.log(context, options);

        var $newCard = $('#mainCard').clone()
            .attr('id','newCard')
            .appendTo( $('body') )
            .css('position', 'absolute')
            .css('top', '1em')
            .css('left', '100%')
            .animate({left: '1em'}, 500, function() {


                $('#mainCard').remove();
                $newCard.attr('id','mainCard')
                    .css('position','static');
            });

        var $qText = $newCard.find('.questionText');
        var $qMedia = $newCard.find('.questionMedia');
        var $aList = $newCard.find('.answerList');

        console.log($qText, $qMedia, $aList);
        // SET DESCRIPTION TEXT

        if (typeof(context.text) !== 'undefined')
            $qText.html(context.text);

        // SET DESCRIPTION MEDIA

        $qMedia.empty();

        if (typeof(context.media) !== 'undefined')
            if (context.media.type === "image")
                $qMedia.append(
                    $('<img>').attr('src',context.media.url)
                );

        // SET ANSWERS

        $aList.empty();

        var option;

        Object.keys(options).forEach(function(n) {

           option = options[n];

           $aList.append(
                $('<li>').html(option.label)
                    .on('click', function() {
                       console.log('click!' + n)
                        animate();
                        updateState();
                    })
           );
        });


    }

    function animate() {
        var $question = $('#question');
        var $answer = $('#answer');
    }


})(engine);