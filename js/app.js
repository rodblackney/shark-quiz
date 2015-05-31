$(document).ready(function() {

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
        
 });