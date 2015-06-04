$(document).ready(function() {

// when document loads hide all other questions except question one
  //  $(".content").mouseenter(function() {
        $(".question-one").show();
        $(".question-two").hide();
        $(".question-three").hide();
        $(".question-four").hide();
        $(".question-five").hide();
    })

// when correct answer is chosen
    $('#choices').show(function(){
		$(".answer-one").show();
		$(".factoid-one").show();
    })

// when document loads hide all other questions except question two
//    $(".content").mouseenter(function() {
        $(".question-one").hide();
        $(".question-two").show();
        $(".question-three").hide();
        $(".question-four").hide();
        $(".question-five").hide();
    })

// when correct answer is chosen
    $('#choices').show(function(){
		$(".answer-two").show();
		$(".factoid-two").show();
    })

// when document loads hide all other questions except question three
 //   $(".content").mouseenter(function() {
        $(".question-one").hide();
        $(".question-two").hide();
        $(".question-three").show();
        $(".question-four").hide();
        $(".question-five").hide();
    })

// when correct answer is chosen for question three
    $('#choices').show(function(){
		$(".answer-three").show();
		$(".factoid-three").show();
    })

// when document loads hide all other questions except question four
 //   $(".content").mouseenter(function() {
        $(".question-one").hide();
        $(".question-two").hide();
        $(".question-three").hide();
        $(".question-four").show();
        $(".question-five").hide();
    })

// when correct answer is chosen
    $('#choices').show(function(){
		$(".answer-four").show();
		$(".factoid-four").show();
    })


// when document loads hide all other questions except question five
 //   $(".content").mouseenter(function() {
        $(".question-one").hide();
        $(".question-two").hide();
        $(".question-three").hide();
        $(".question-four").hide();
        $(".question-five").show();
    })

// when correct answer is chosen
    $('#choices').show(function(){
		$(".answer-five").show();
		$(".factoid-five").show();
    })

 });


