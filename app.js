// 10 questions
// show questions and options
// Easy to Hard 
// Each Question has points, total points displayed at the end and stars 


// Quiz Question and Answer Bank
var questionBank = {
	question1: [ "What continent is africa located in?" , "Asia", "Europe", "Africa"],
	question2: [ "What is the capital city of Somalia ?" , "Mogadishu", "Addis abba", "lagos"],
	question3: [ "What religon is predominate in Somalia?" , "Jewdaism", "Islam", "Sikhism"],
	question4: [ "When the country of Somalia formed?" , "1 July 1960", " 1 January 1964", "21 October 1967"],
	question5: [ "When was the Somalia Language first written?" , "In 1972", "In 1905", "In 1988"],
	question6: [ "What film was about somali pirates?" , "Captain Philips", "Black Hawk Down", "Africa "],
	question7: [ "What was somalia Known as before the civil war?" , "The Switzerland of Africa", "the Pearl of Africa", "The Emerald of the Equator"],
	question8: [ "What is the most valued asset in somalia?" , "camels", "sheep", "pigs"]
}

var answers = document.getElementsByName("answers");
var labels = document.querySelectorAll('label');
var Qdisplay = document.querySelector("#question");
var score = document.getElementById('score');
var form = document.getElementsByTagName('form');
var next = document.querySelector('#next');
var quiz = document.querySelector('#quiz');
var begin = document.querySelector('#begin');
const entries = Object.entries(questionBank);
var resultDisplay = document.querySelector('#resultDisplay');
var previouseVal ;
var points = 0;

begin.addEventListener('click', function(){
	quiz.style.display = 'block';
	begin.style.display = 'none';
	resultDisplay.style.display = 'none';

	// Display the question
	Qdisplay.textContent = entries[0][1][0];

	//displays the inputs the text in the label tags
	labels[0].childNodes[0].data = entries[0][1][1];
	labels[1].childNodes[0].data = entries[0][1][2];
	labels[2].childNodes[0].data = entries[0][1][3];

	//gives the radio buttons value 
	form[0].elements.answers[0].value = entries[0][1][1];
	form[0].elements.answers[1].value = entries[0][1][2];
	form[0].elements.answers[2].value = entries[0][1][3];

	// Adds a Event Listener to each of the checkboxes
	for(var i= 0; i <= answers.length - 1; i++){
		answers[i].addEventListener('change' , function(){
			if(this.checked){
				previouseVal = this.value;
			}
			if( previouseVal === 'Africa'       ||  
				previouseVal === "Mogadishu"  || 
				previouseVal === "The Switzerland of Africa" ||
				previouseVal === "Islam"      ||  
				previouseVal === "1 July 1960"||  
				previouseVal === "In 1972" 	  ||  
				previouseVal === "Captain Philips" ||
				previouseVal === "camels"
			){
				console.log('correct')
				points ++;
		}


		})

	}

});

var count = 1;

next.addEventListener('click', function(){
		if(count < 8){
			Qdisplay.innerHTML = entries[count][1][0];

			//after the first one: displays the inputs the text in the label tags for 
			labels[0].childNodes[0].data = entries[count][1][1];
			labels[1].childNodes[0].data = entries[count][1][2];
			labels[2].childNodes[0].data = entries[count][1][3];

			//gives the radio buttons value  
			form[0].elements.answers[0].value = entries[count][1][1];
			form[0].elements.answers[1].value = entries[count][1][2];
			form[0].elements.answers[2].value = entries[count][1][3];

			clearAllRadios();
			count++;	
		}else { 
			quiz.style.display = 'none'; // Hides the quiz form 
			resultDisplay.style.display = 'block';// Hides the Results section
			score.textContent = points + '/ 8'; // addes the score to the html

		}
		// if( previouseVal === 'Asia'       ||  
		// 	previouseVal === "Mogadishu"  || 
		// 	previouseVal === "The Switzerland of Africa" ||
		// 	previouseVal === "Islam"      ||  
		// 	previouseVal === "1 July 1960"||  
		// 	previouseVal === "In 1972" 	  ||  
		// 	previouseVal === "Captain Philips"
		// 	){
		// 		points += 1;
		// }


});


// clears all the radios
 function clearAllRadios() {
    
    for (var i = 0; i < answers.length; i++) {
      if(answers[i].checked) answers[i].checked = false;
    }
  }





