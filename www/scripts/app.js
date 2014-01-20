  $(document).ready(function (){

	var name = " ";
	var storedName = localStorage.getItem('userName');
	var a;
	var id = 1;
	var AnswerModuleCounter = 1;
	var QuestionCounter = 0;
	var correctAnswers1 = 0;
	var wrongAnswers1 = 0;
	var correctAnswers2 = 0;
	var wrongAnswers2 = 0;
	var correctAnswers3 = 0;
	var wrongAnswers3 = 0;
	var AnswersModule1 = [{}];
	var AnswersModule2 = [{}];
	var AnswersModule3 = [{}];

	if(storedName != null){
			$('#register').hide();
			$('.modal-backdrop').hide();
			$('#usericon').hide();
			$('#WelcomeM').html("Welcome," + storedName);
			$('#home').css('margin-left','5px');
			$('#Out').html("(Logout)");
			}else{
				$('#usericon').show();
			}
	// Animation of navigation buttons

	$('.navButton').mouseenter(function(){
		$(this).animate({opacity:'1'},600);
	});

	$('.navButton').mouseleave(function(){
		$(this).animate({opacity:'.25'},600);
	 });

	// Ajax of Home Button
	$('#home').click(function(){
		$.ajax({
			url: "index-con.html",
			success:function(result){
				$('.con').html(result);
			}});
		
	});

	// Ajax of Tags
	$('#htmltags').click(function(){
		$.ajax({
			url: "tags.html",
			success:function(result){
				$('.con').html(result);
		}});
	});

	// Ajax of History
	$('#history').click(function(){
		$.ajax({
			url: "history.html",
			success:function(result){
				$('.con').html(result);
		}});
	});

	// Ajax of Quiz
	$('#quiz').click(function(){
		$.ajax({
			url: "quiz-intro.html",
			success:function(result){
				$(".con").html(result);
				bindQuizIntroEvents();
				bindButton1();
				bindButton2();
				bindButton3();
				if(storedName!= null){
					$('#uName').html(storedName);	
				}else{
					$('#uName').html(name);
				}
			}});
	});

	//bind Register Button
	function bindRegBut(){
		$('#regBut').click(function(){
		var userName = $('#uname').val();
		if(userName == "" || userName == null){
			alert("You didn't put anything on the text field.");
		}
		else{
			localStorage.setItem('userName',userName);
			name = localStorage.getItem('userName');
			$('#register').hide();
			$('.modal-backdrop').hide();
			$('#usericon').hide();
			$('#WelcomeM').html("Welcome," + name);
			$('#WelcomeM').show();
			$('#LogOut').show();
			$('#Out').html("(Logout)");
			$('#uName').html(name);
			$('#home').css('margin-left','10px');
			// $('.modal').removeClass('fade');
			// $('.modal-backdrop').removeClass('in');
			// $('.modal-content').hide();
			bindUser();
			}

   		 });
	}

	//Para magamit yung Register Button
	bindRegBut();


		//Logout Function
		$('#Out').click(function(){
		storedName = localStorage.removeItem('userName');
		name = null;
		$("#LogOut").hide();
		$('#usericon').show();
		$("#WelcomeM").hide();
		$('#home').css('margin-left','50px');
		$('#uName').hide();
		$.ajax({
			url:"index-con.html",
			success:function(result){
				$(".con").html(result);
			}});
	});


	// bind
	function bindQuizIntroEvents(){
		$('#button').click(function(){
			$.ajax({
				url: "quiz.html",
				success:function(result){
					$(".con").html(result);
				
			 }});
		});
	}
    
    //bindUserIconButton
	function bindUser(){
		$('#usericon').click(function(){
			$('#register').show();
			$('.modal-backdrop').show();
			bindRegBut();

		});
	}


	//QUIZ PART
	var questions = {
	set1: [
	{id: 1, question: "All other elements of HTML or XHTML must be a descendant of this element. What is this element?", answers: [{ansText: "< head > Tag", value:1}, {ansText: " < html > Tag", value:2}, {ansText: "< body > Tag", value:3}], correctAns:2},
	{id: 2, question: "It represents the content of an HTML document. All contents should be placed inside this tag. What is this element?", answers: [{ansText: "< html > Tag", value:1}, {ansText: "< head > Tag", value:2}, {ansText: "< body > Tag", value:3}], correctAns:3},
	{id: 3, question: "There are two ways to write CSS - Inline or external.If you'll use the 'inline' method, your CSS will be written inside of what tag?", answers: [{ansText: "< link > Tag", value:1}, {ansText: "< style > Tag", value:2}, {ansText: "< head > Tag", value:3}], correctAns:2},
	{id: 4, question: "There are two ways to write CSS - Inline or external.If you'll use the 'external' method, you'll have to use what tag?", answers: [{ansText: "< link > Tag", value:1}, {ansText: "< style > Tag", value:2}, {ansText: "< head > Tag", value:3}], correctAns:1},
	{id: 5, question: "It is use to define the title of the document. This tag only accepts text and any tags inside this tag will not be interpreted.", answers: [{ansText: "< head > Tag", value:1}, {ansText: "< title > Tag", value:2}, {ansText: "< style > Tag", value:3}], correctAns:2},
	{id: 6, question: "< link > tags and < title >< /title > are usually placed inside this tag. It represent the collection of metadata about the document. What is this tag?", answers: [{ansText: "< head > Tag", value:1}, {ansText: "< title > Tag", value:2}, {ansText: "< html > Tag", value:3}], correctAns:1},
	{id: 7, question: "It defines either an external or an internal script (JavaScript). What tag is this?", answers: [{ansText: "< title > Tag", value:1}, {ansText: "< script > Tag", value:2}, {ansText: "< head > Tag", value:3}], correctAns:2},
	{id: 8, question: "HTML stands for?", answers: [{ansText: "Hypertext Markup Language", value:1}, {ansText: "Hyperprocessor Markup Language", value:2}, {ansText: "Hypertext Markdown Language", value:3}], correctAns:1},
	{id: 9, question: "He's the inventor of HTML. Who is he?", answers: [{ansText: "Tim Berners-Lee", value:1}, {ansText: "Tim Ben-Lee", value:2}, {ansText: "Tim Bennett-Lee", value:3}], correctAns:1},
	{id: 10, question: "They develop protocols, guidlines, and standards for webdesign. This group is currently lead by the man who created HTML.", answers: [{ansText: "W3schools", value:1}, {ansText: "W3c", value:2}, {ansText: "echoecho", value:3}], correctAns:2}
	],
	set2: [
	{id: 1, question: "The physics laboratory where Tim Berners-Lee is working when he came up with the concept of HTML.?", answers: [{ansText: "CERN", value:1}, {ansText: "CNER", value:2}, {ansText: "CRNE", value:3}], correctAns:1},
	{id: 2, question: " He introduced HTML3.0. Who is he?", answers: [{ansText: "Dave Raggetts", value:1}, {ansText: "Dave Raggett", value:2}, {ansText: "Dave Ragett", value:3}], correctAns:2},
	{id: 3, question: "'Cougar' was the codename given to what version of HTML?", answers: [{ansText: "HTML 5", value:1}, {ansText: "HTML 4.0", value:2}, {ansText: "HTML 3", value:3}], correctAns:2},
	{id: 4, question: "It was the final revision of HTML and it is the current version being used today. What version of HTML is this?", answers: [{ansText: "HTML4.01", value:1}, {ansText: "HTML4.5", value:2}, {ansText: "HTML3", value:3}], correctAns:1},
	{id: 5, question: "HTML2.0 is also called RFC ____. Give the missing four numbers:", answers: [{ansText: "1876", value:1}, {ansText: "1886", value:2}, {ansText: "1868", value:3}], correctAns:2},
	{id: 6, question: "They are the one responsible in developing HTML5. What is the name of their group?", answers: [{ansText: "WYSIWIG", value:1}, {ansText: "WhatWGS", value:2}, {ansText: "WHATWG", value:3}], correctAns:3},
	{id: 7, question: "It is the standard of webdesign until 1997. Also called as RFC 1866. What version is this? ", answers: [{ansText: "HTML 2.0", value:1}, {ansText: "HTML 3.0", value:2}, {ansText: "HTML 2.5", value:3}], correctAns:1},
	{id: 8, question: "What is the codename given to HTML3.2?", answers: [{ansText: "WILBUN", value:1}, {ansText: "WILBUR", value:2}, {ansText: "WILBURNT", value:3}], correctAns:2},
	{id: 9, question: "It was published late 1991 and was a document called 'HTML tags'. What version of HTML is this?", answers: [{ansText: "HTML 2.0", value:1}, {ansText: "HTML 2.5", value:2}, {ansText: "HTML 1.0", value:3}], correctAns:3},
	{id: 10, question: "The hypertext system that Tim Berners-Lee develop before he worked for CERN.", answers: [{ansText: "INQUIRE", value:1}, {ansText: "ENQUIRE", value:2}, {ansText: "ENQUIRED", value:3}], correctAns:2}
	],
	set3: [
	{id: 1, question: "It is a generic container with no special meaning. Used to divide section in an HTML file. What tag is this? answer:", answers: [{ansText: "< body > Tag", value:1}, {ansText: "< div > Tag", value:2}, {ansText: "< head > Tag", value:3}], correctAns:2},
	{id: 2, question: "There are six header tags that you can use freely in HTML, what is the largest of the six?", answers: [{ansText: "< h1 > Tag", value:1}, {ansText: "< h2 > Tag", value:2}, {ansText: "< h6 > Tag", value:3}], correctAns:1},
	{id: 3, question: "It defines a portion of an HTML that should be displayed as a paragraph. What tag is this?", answers: [{ansText: "< p > Tag", value:1}, {ansText: "< para > Tag", value:2}, {ansText: "< pgraph > Tag", value:3}], correctAns:1},
	{id: 4, question: "This tag is use to display an image. What tag is this?", answers: [{ansText: "< img >", value:1}, {ansText: "< images >", value:2}, {ansText: "< imgs >", value:3}], correctAns:1},
	{id: 5, question: "Represents a form, cosisting of controls, that can be submitted to a server for processing. What is this?", answers: [{ansText: "< forms > Tag", value:1}, {ansText: "< form > Tag", value:2}, {ansText: "< formsheet > Tag", value:3}], correctAns:2},
	{id: 6, question: "There are two list that you can use in HTML, unordered and ordered, if you're going to use ordered list, what tag are you going to type?", answers: [{ansText: "< orderl > Tag", value:1}, {ansText: "< ordered > Tag", value:2}, {ansText: "< ol > Tag", value:3}], correctAns:3},
	{id: 7, question: "Represents a list item of a list. What tag is this?", answers: [{ansText: "< li > Tag", value:1}, {ansText: "< lists > Tag", value:2}, {ansText: "< listed > Tag", value:3}], correctAns:1},
	{id: 8, question: "This tag represents a hyperlink. What tag is this?", answers: [{ansText: "< alink > Tag", value:1}, {ansText: "< a > Tag", value:2}, {ansText: "< link > Tag", value:3}], correctAns:2},
	{id: 9, question: "Represents a typed data field allowing user to edit data. This tag is usually located within the < form >< /form > tags. What tag is this?", answers: [{ansText: "< output >", value:1}, {ansText: "< i > Tag", value:2}, {ansText: "< input >", value:3}], correctAns:3},
	{id: 10, question: "Represents data with more than one dimension. Use to create a table.", answers: [{ansText: "< tbls > Tag", value:1}, {ansText: "< t > Tag", value:2}, {ansText: "< table > Tag", value:3}], correctAns:3}
	]
	}

	//Module 1 Button
	function bindButton1(){
	$('#button1').click(function(){
			if(AnswersModule1.length >= questions.set1.length){
				$.ajax({
					url: "quiz-done.html",
					success:function(result){
						$('.con').html(result);
					retakeQuiz1();
				}});
			}else{
			$.ajax({
				url: "quiz.html",
				success:function(result){
					a=0;
					id=1;
					$(".con").html(result);
					$('.question').html(questions.set1[a].question);
					console.log(questions.set1[a].question);
					$('#option-1').html(questions.set1[a].answers[0].ansText);
					$('#option-2').html(questions.set1[a].answers[1].ansText);
					$('#option-3').html(questions.set1[a].answers[2].ansText);
					console.log(questions.set1[a].answers[0].ansText);
					console.log(questions.set1[a].answers[1].ansText);
					console.log(questions.set1[a].answers[2].ansText);
					LoadingQuestionsModule1();
			 }});
			}
	});
	}

	//Module 2 Button
	function bindButton2(){
	$('#button2').click(function(){
				if(AnswersModule2.length >= questions.set2.length){
					$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$('.con').html(result);
							retakeQuiz2();
					}});
				}else{
					$.ajax({
					url: "quiz.html",
					success:function(result){
						a=0;
						id=1;
						$(".con").html(result);
						$('.question').html(questions.set2[a].question);
						console.log(questions.set1[0].question);
						$('#option-1').html(questions.set2[a].answers[0].ansText);
						$('#option-2').html(questions.set2[a].answers[1].ansText);
						$('#option-3').html(questions.set2[a].answers[2].ansText);
						console.log(questions.set2[a].answers[0].ansText);
						console.log(questions.set2[a].answers[1].ansText);
						console.log(questions.set2[a].answers[2].ansText);
						LoadingQuestionsModule2();
				 }});
				}
		});
	}

	//Module 3 Button
	function bindButton3(){
	$('#button3').click(function(){
				if(AnswersModule3.length >= questions.set3.length){
					$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$('.con').html(result);
							retakeQuiz3();
					}});
				}else{
					$.ajax({
						url: "quiz.html",
						success:function(result){
							a=0;
							id=1;
							$(".con").html(result);
							$('.question').html(questions.set3[a].question);
							console.log(questions.set1[0].question);
							$('#option-1').html(questions.set3[a].answers[0].ansText);
							$('#option-2').html(questions.set3[a].answers[1].ansText);
							$('#option-3').html(questions.set3[a].answers[2].ansText);
							console.log(questions.set3[a].answers[0].ansText);
							console.log(questions.set3[a].answers[1].ansText);
							console.log(questions.set3[a].answers[2].ansText);
							LoadingQuestionsModule3();
					 }});
				}
			});
	}

	//Module 1 Questions
	function LoadingQuestionsModule1(){
		$('.options').click(function(){
					var b= $(this).text();
					AnswersModule1.push({id:id,Answer:b});
					console.log(a);
					console.log(b);
					a++;
					if(a<questions.set1.length){
					id += 1;
					$('.question').html(questions.set1[a].question);
					$('#option-1').html(questions.set1[a].answers[0].ansText);
					$('#option-2').html(questions.set1[a].answers[1].ansText);
					$('#option-3').html(questions.set1[a].answers[2].ansText);
					}else{
						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$(".con").html(result);
							console.log(AnswersModule1);
							retakeQuiz1();
						}});
					}
						
			});
	}



	//Module 2 Questions
	function LoadingQuestionsModule2(){
		$('.options').click(function(){
					var b= $(this).text();
					AnswersModule2.push({id:id,Answer:b});
					console.log(a);
					console.log(b);
					a++;
					if(a<questions.set2.length){
					id += 1;
					$('.question').html(questions.set2[a].question);
					$('#option-1').html(questions.set2[a].answers[0].ansText);
					$('#option-2').html(questions.set2[a].answers[1].ansText);
					$('#option-3').html(questions.set2[a].answers[2].ansText);
					}else{
						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							// for(var counter = 1; counter <= AnswersModule2.length; counter++){
							// 	if(AnswersModule2[AnswerModuleCounter].id == questions.set2[QuestionCounter].id){
							// 		if(AnswersModule2[AnswersModuleCounter].Answer == questions.set2[QuestionCounter].ansText.value[correctAns])
							// 	}
							// }
							$(".con").html(result);
							console.log(AnswersModule2);
							retakeQuiz2();

						}});
					}
			});

		
	}

	//Module 3 Questions
	function LoadingQuestionsModule3(){
		$('.options').click(function(){
					var b=$(this).text();
					AnswersModule3.push({id:id,Answer:b});
					console.log(a);
					console.log(b);
					a++;
					if(a<questions.set3.length){
					id += 1;
					$('.question').html(questions.set3[a].question);
					$('#option-1').html(questions.set3[a].answers[0].ansText);
					$('#option-2').html(questions.set3[a].answers[1].ansText);
					$('#option-3').html(questions.set3[a].answers[2].ansText);
					}else{
						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$(".con").html(result);
							console.log(AnswersModule3);
							retakeQuiz3();

						}});
					}
			});

	}

	function retakeQuiz1(){
		$('#retakeQuiz').click(function(){
			$.ajax({
				url: "quiz.html",
				success:function(result){
					a=0;
					id=1;
					AnswersModule1 = [{}];
					$(".con").html(result);
					$('.question').html(questions.set1[a].question);
					console.log(questions.set1[a].question);
					$('#option-1').html(questions.set1[a].answers[0].ansText);
					$('#option-2').html(questions.set1[a].answers[1].ansText);
					$('#option-3').html(questions.set1[a].answers[2].ansText);
					console.log(questions.set1[a].answers[0].ansText);
					console.log(questions.set1[a].answers[1].ansText);
					console.log(questions.set1[a].answers[2].ansText);
					LoadingQuestionsModule1();
			 }});
		});
	}

	function retakeQuiz2(){
		$('#retakeQuiz').click(function(){
			$.ajax({
				url: "quiz.html",
				success:function(result){
					a=0;
					id=1;
					AnswersModule2 = [{}];
					$(".con").html(result);
					$('.question').html(questions.set2[a].question);
					console.log(questions.set2[a].question);
					$('#option-1').html(questions.set2[a].answers[0].ansText);
					$('#option-2').html(questions.set2[a].answers[1].ansText);
					$('#option-3').html(questions.set2[a].answers[2].ansText);
					console.log(questions.set2[a].answers[0].ansText);
					console.log(questions.set2[a].answers[1].ansText);
					console.log(questions.set2[a].answers[2].ansText);
					LoadingQuestionsModule2();
			 }});
		});
	}

	function retakeQuiz3(){
		$('#retakeQuiz').click(function(){
			$.ajax({
				url: "quiz.html",
				success:function(result){
					a=0;
					id=1;
					AnswersModule3 = [{}];
					$(".con").html(result);
					$('.question').html(questions.set3[a].question);
					console.log(questions.set3[a].question);
					$('#option-1').html(questions.set3[a].answers[0].ansText);
					$('#option-2').html(questions.set3[a].answers[1].ansText);
					$('#option-3').html(questions.set3[a].answers[2].ansText);
					console.log(questions.set3[a].answers[0].ansText);
					console.log(questions.set3[a].answers[1].ansText);
					console.log(questions.set3[a].answers[2].ansText);
					LoadingQuestionsModule3();
			 }});
		});
	}
});