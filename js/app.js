$(document).ready(function() {

<<<<<<< HEAD
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


=======

	// user selects a on keyboard
	$('#choice').on('keypress', function(evt) {
		if (evt.keyCode === 65)
			    console.log('a');
	}

	// user selects b on keyboard
		$('#choice').on('keypress', function(evt) {
		if (evt.keyCode === 66)
			    console.log('b');
	}


	// user selects c on keyboard
	$('#choice').on('keypress', function(evt) {
		if (evt.keyCode === 67)
			    console.log('c');
	}

	// user selects d on keyboard
	$('#choice').on('keypress', function(evt) {
		if (evt.keyCode === 68)
			    console.log('d');
	}
}


	else if {
			 var checked = $('#choice li:checked'); 

        // question one

        $('#question').append('<p>Which of these is NOT a species of shark</p>');
        // choices
        $('#choice').append('<li>a. Pygmy ribbontail catshark</li>');
		$('#choice').append('<li>b. Longnose Sawshark</li>');
		$('#choice').append('<li>c. Prickly dogfish</li>');
		$('#choice').append('<li>d. Humuhumunukunukuapuaa</li>');
		//answer
		$('#answer-wrong').append('<h3>Your answer was incorrect</h3>');
		$('#answer-right').append('<h3>Your answer was correct</h3>');		
		$('#answer').append('<h3>The answer is d. Humuhumunukunukuapuaa</h3>');
		//factoid
        $('#factoid').append('<p>There are more than 350 species of shark - Pygmy Ribbontail Catshark, Prickly Dogfish, and Longnose Sawshark are among them. The Humuhumunukunukuapuaa is the odd one out: Its not a shark - its a tropical triggerfish that gets its name from the pig-like grunting noise it makes.</p>');
 
		// question two

		$('#question').append('<p>The worlds fastest shark hs been recorded at speeds in excess of 50km/h. What species of shark set this records?</p>');
		// choices
		$('#choice').append('<li>a. Great white shark</li>');
		$('#choice').append('<li>b. Sicklefin hound shark</li>');
		$('#choice').append('<li>c. Shortfin mako shark</li>');
		//answer
		$('#answer-wrong').append('<h3>Your answer was incorrect</h3>');
		$('#answer-right').append('<h3>Your answer was correct</h3>');
		$('#answer').append('<h3>The answer is c. Shortfin Mako Shark</h3>');
		//factoid
		$('#factoid').append('<p>The Shortfin Mako Shark has been clocked at 56km/h (35mph) and can use this impressive speed to launch itself 6 meters out of the water. In short bursts during feeding, its believed they can travel even faster.</p>');

		// question three

		$('#question').append('<p>In early 2004, a female great white named Niclole made the longest recorded journey by a shark. Where did she travel?</p>');
		// choices
		$('#choice').append('<li>a. From Maine to California</li>');
		$('#choice').append('<li>b. Around the world, from Hawaii</li>');
		$('#choice').append('<li>c. From South Africa to Australia, and back</li>');
		//answer
		$('#answer-wrong').append('<h3>Your answer was incorrect</h3>');
		$('#answer-right').append('<h3>Your answer was correct</h3>');
		$('#answer').append('<h3>The answer is c. From South Africa to Australia, and back</h3>');
		//factoid
		$('#factoid').append('<p>Young female Nicole shocked marine biologists when she surfaced in Australia in Feburary 2004 - just three months after being caught and tagged in South Africa. Even more suprisingly, she then turned back and completed the 20,000 km (12,400 mile) round trip by August, setting long distance speed records in the process.</p>');


		// question four

		$('#question').append('<p> A Thresher Sharks scythe-like tail can account for up to half of its body length.How has the shark been observed using this tail?</p>');
		// choices
		$('#choice').append('<li>a. Filcking the tail over its head to slap shoals of fish</li>');
		$('#choice').append('<li>b. Around the world, from Hawaii</li>');
		$('#choice').append('<li>c. From South Africa to Australia, and back</li>');
		//answer
		$('#answer-wrong').append('<h3>Your answer was incorrect</h3>');
		$('#answer-right').append('<h3>Your answer was correct</h3>');
		$('#answer').append('<h3>The answer is c. From South Africa to Australia, and back</h3>');
		//factoid
		$('#factoid').append('<p>Young female Nicole shocked marine biologists when she surfaced in Australia in Feburary 2004 - just three months after being caught and tagged in South Africa. Even more suprisingly, she then turned back and completed the 20,000 km (12,400 mile) round trip by August, setting long distance speed records in the process.</p>');




	}

 });
>>>>>>> 13d6df290187d596b75bd31a3a3e42175b808a62
