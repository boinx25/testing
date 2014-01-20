  $(document).ready(function (){

	var name = " ";
	var storedName = localStorage.getItem('userName');
	var a;
	var id = 1;
	var AnswerModuleCounter;
	var QuestionCounter;
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
	{id: 1, question: "All other elements of HTML or XHTML must be a descendant of this element. What is this element?", answers: [{ansText: "< head > Tag", number:1}, {ansText: "< html > Tag", number:2}, {ansText: "< body > Tag", number:3}], correctAns:/*2*/'< html > Tag'},
	{id: 2, question: "It represents the content of an HTML document. All contents should be placed inside this tag. What is this element?", answers: [{ansText: "< html > Tag", number:1}, {ansText: "< head > Tag", number:2}, {ansText: "< body > Tag", number:3}], correctAns:/*3*/'< body > Tag'},
	{id: 3, question: "There are two ways to write CSS - Inline or external.If you'll use the 'inline' method, your CSS will be written inside of what tag?", answers: [{ansText: "< link > Tag", number:1}, {ansText: "< style > Tag", number:2}, {ansText: "< head > Tag", number:3}], correctAns:/*2*/'< style > Tag'},
	{id: 4, question: "There are two ways to write CSS - Inline or external.If you'll use the 'external' method, you'll have to use what tag?", answers: [{ansText: "< link > Tag", number:1}, {ansText: "< style > Tag", number:2}, {ansText: "< head > Tag", number:3}], correctAns:/*1*/ '< link > Tag'},
	{id: 5, question: "It is use to define the title of the document. This tag only accepts text and any tags inside this tag will not be interpreted.", answers: [{ansText: "< head > Tag", number:1}, {ansText: "< title > Tag", number:2}, {ansText: "< style > Tag", number:3}], correctAns:/*2*/'< title > Tag'},
	{id: 6, question: "< link > tags and < title >< /title > are usually placed inside this tag. It represent the collection of metadata about the document. What is this tag?", answers: [{ansText: "< head > Tag", number:1}, {ansText: "< title > Tag", number:2}, {ansText: "< html > Tag", number:3}], correctAns:/*1*/'< head > Tag'},
	{id: 7, question: "It defines either an external or an internal script (JavaScript). What tag is this?", answers: [{ansText: "< title > Tag", number:1}, {ansText: "< script > Tag", number:2}, {ansText: "< head > Tag", number:3}], correctAns:/*2*/'< script > Tag'},
	{id: 8, question: "HTML stands for?", answers: [{ansText: "Hypertext Markup Language", number:1}, {ansText: "Hyperprocessor Markup Language", number:2}, {ansText: "Hypertext Markdown Language", number:3}], correctAns:/*1*/'Hypertext Markup Language'},
	{id: 9, question: "He's the inventor of HTML. Who is he?", answers: [{ansText: "Tim Berners-Lee", number:1}, {ansText: "Tim Ben-Lee", number:2}, {ansText: "Tim Bennett-Lee", number:3}], correctAns:/*1*/'Tim Berners-Lee'},
	{id: 10, question: "They develop protocols, guidlines, and standards for webdesign. This group is currently lead by the man who created HTML.", answers: [{ansText: "W3schools", number:1}, {ansText: "W3c", number:2}, {ansText: "echoecho", number:3}], correctAns:/*2*/'W3c'}
	],
	set2: [
	{id: 1, question: "The physics laboratory where Tim Berners-Lee is working when he came up with the concept of HTML.?", answers: [{ansText: "CERN", number:1}, {ansText: "CNER", number:2}, {ansText: "CRNE", number:3}], correctAns:'CERN'},
	{id: 2, question: " He introduced HTML3.0. Who is he?", answers: [{ansText: "Dave Raggetts", number:1}, {ansText: "Dave Raggett", number:2}, {ansText: "Dave Ragett", number:3}], correctAns:/*2*/ 'Dave Raggett'},
	{id: 3, question: "'Cougar' was the codename given to what version of HTML?", answers: [{ansText: "HTML 5", number:1}, {ansText: "HTML 4.0", number:2}, {ansText: "HTML 3", number:3}], correctAns:/*2*/'HTML 4.0'},
	{id: 4, question: "It was the final revision of HTML and it is the current version being used today. What version of HTML is this?", answers: [{ansText: "HTML4.01", number:1}, {ansText: "HTML4.5", number:2}, {ansText: "HTML3", number:3}], correctAns:/*1*/'HTML4.01'},
	{id: 5, question: "HTML2.0 is also called RFC ____. Give the missing four numbers:", answers: [{ansText: "1876", number:1}, {ansText: "1886", number:2}, {ansText: "1868", number:3}], correctAns:/*2*/'1886'},
	{id: 6, question: "They are the one responsible in developing HTML5. What is the name of their group?", answers: [{ansText: "WYSIWIG", number:1}, {ansText: "WhatWGS", number:2}, {ansText: "WHATWG", number:3}], correctAns:/*3*/'WHATWG'},
	{id: 7, question: "It is the standard of webdesign until 1997. Also called as RFC 1866. What version is this? ", answers: [{ansText: "HTML 2.0", number:1}, {ansText: "HTML 3.0", number:2}, {ansText: "HTML 2.5", number:3}], correctAns:/*1*/ 'HTML 2.0'},
	{id: 8, question: "What is the codename given to HTML3.2?", answers: [{ansText: "WILBUN", number:1}, {ansText: "WILBUR", number:2}, {ansText: "WILBURNT", number:3}], correctAns:/*2*/ 'WILBUR'},
	{id: 9, question: "It was published late 1991 and was a document called 'HTML tags'. What version of HTML is this?", answers: [{ansText: "HTML 2.0", number:1}, {ansText: "HTML 2.5", number:2}, {ansText: "HTML 1.0", number:3}], correctAns:/*3*/'HTML 1.0'},
	{id: 10, question: "The hypertext system that Tim Berners-Lee develop before he worked for CERN.", answers: [{ansText: "INQUIRE", number:1}, {ansText: "ENQUIRE", number:2}, {ansText: "ENQUIRED", number:3}], correctAns:/*2*/'ENQUIRE'}
	],
	set3: [
	{id: 1, question: "It is a generic container with no special meaning. Used to divide section in an HTML file. What tag is this? answer:", answers: [{ansText: "< body > Tag", number:1}, {ansText: "< div > Tag", number:2}, {ansText: "< head > Tag", number:3}], correctAns:/*2*/'< div > Tag'},
	{id: 2, question: "There are six header tags that you can use freely in HTML, what is the largest of the six?", answers: [{ansText: "< h1 > Tag", number:1}, {ansText: "< h2 > Tag", number:2}, {ansText: "< h6 > Tag", number:3}], correctAns:/*1*/'< h1 > Tag'},
	{id: 3, question: "It defines a portion of an HTML that should be displayed as a paragraph. What tag is this?", answers: [{ansText: "< p > Tag", number:1}, {ansText: "< para > Tag", number:2}, {ansText: "< pgraph > Tag", number:3}], correctAns:/*1*/'< p > Tag'},
	{id: 4, question: "This tag is use to display an image. What tag is this?", answers: [{ansText: "< img >", number:1}, {ansText: "< images >", number:2}, {ansText: "< imgs >", number:3}], correctAns:/*1*/'< img >'},
	{id: 5, question: "Represents a form, cosisting of controls, that can be submitted to a server for processing. What is this?", answers: [{ansText: "< forms > Tag", number:1}, {ansText: "< form > Tag", number:2}, {ansText: "< formsheet > Tag", number:3}], correctAns:/*2*/'< form > Tag'},
	{id: 6, question: "There are two list that you can use in HTML, unordered and ordered, if you're going to use ordered list, what tag are you going to type?", answers: [{ansText: "< orderl > Tag", number:1}, {ansText: "< ordered > Tag", number:2}, {ansText: "< ol > Tag", number:3}], correctAns:/*3*/'< ol > Tag'},
	{id: 7, question: "Represents a list item of a list. What tag is this?", answers: [{ansText: "< li > Tag", number:1}, {ansText: "< lists > Tag", number:2}, {ansText: "< listed > Tag", number:3}], correctAns:/*1*/'< li > Tag'},
	{id: 8, question: "This tag represents a hyperlink. What tag is this?", answers: [{ansText: "< alink > Tag", number:1}, {ansText: "< a > Tag", number:2}, {ansText: "< link > Tag", number:3}], correctAns:/*2*/'< a > Tag'},
	{id: 9, question: "Represents a typed data field allowing user to edit data. This tag is usually located within the < form >< /form > tags. What tag is this?", answers: [{ansText: "< output >", number:1}, {ansText: "< i > Tag", number:2}, {ansText: "< input >", number:3}], correctAns:/*3*/'< input >'},
	{id: 10, question: "Represents data with more than one dimension. Use to create a table.", answers: [{ansText: "< tbls > Tag", number:1}, {ansText: "< t > Tag", number:2}, {ansText: "< table > Tag", number:3}], correctAns:/*3*/'< table > Tag'}
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
						$('#correct').html(correctAnswers1);
						$('#wrong').html(wrongAnswers1);
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
					$('#option-1').html(questions.set1[a].answers[0].ansText);
					$('#option-2').html(questions.set1[a].answers[1].ansText);
					$('#option-3').html(questions.set1[a].answers[2].ansText);
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
							$('#correct').html(correctAnswers2);
							$('#wrong').html(wrongAnswers2);
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
						$('#option-1').html(questions.set2[a].answers[0].ansText);
						$('#option-2').html(questions.set2[a].answers[1].ansText);
						$('#option-3').html(questions.set2[a].answers[2].ansText);
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
							$('#correct').html(correctAnswers3);
							$('#wrong').html(wrongAnswers3);
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
							$('#option-1').html(questions.set3[a].answers[0].ansText);
							$('#option-2').html(questions.set3[a].answers[1].ansText);
							$('#option-3').html(questions.set3[a].answers[2].ansText);
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

					$('.question').hide();
					$('#option-1').hide();
					$('#option-2').hide();
					$('#option-3').hide();

					$('.question').fadeIn(700).html(questions.set1[a].question);
					$('#option-1').fadeIn(700).html(questions.set1[a].answers[0].ansText);
					$('#option-2').fadeIn(700).html(questions.set1[a].answers[1].ansText);
					$('#option-3').fadeIn(700).html(questions.set1[a].answers[2].ansText);
					}else{
							AnswerModuleCounter = 1;
							QuestionCounter = 0;
							for(var counter =2; counter <= AnswersModule1.length; counter++){
							if(AnswersModule1[AnswerModuleCounter].id == questions.set1[QuestionCounter].id){
								if(AnswersModule1[AnswerModuleCounter].Answer == questions.set1[QuestionCounter].correctAns){
									
									correctAnswers1 += 1;
								}
								else{
									wrongAnswers1 += 1;
								}
							
							AnswerModuleCounter++;
							QuestionCounter++;
							
							}
						}

						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$(".con").html(result);
							$('#correct').html(correctAnswers1);
							$('#wrong').html(wrongAnswers1);
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
					// console.log(a);
					// console.log(b);
					a++;
					if(a<questions.set2.length){
					id += 1;	
					$('.question').hide();
					$('#option-1').hide();
					$('#option-2').hide();
					$('#option-3').hide();

					$('.question').fadeIn(700).html(questions.set2[a].question);
					$('#option-1').fadeIn(700).html(questions.set2[a].answers[0].ansText);
					$('#option-2').fadeIn(700).html(questions.set2[a].answers[1].ansText);
					$('#option-3').fadeIn(700).html(questions.set2[a].answers[2].ansText);
					}else{
						AnswerModuleCounter = 1;
						QuestionCounter = 0;
						for(var counter =2; counter <= AnswersModule2.length; counter++){
								if(AnswersModule2[AnswerModuleCounter].id == questions.set2[QuestionCounter].id){
									if(AnswersModule2[AnswerModuleCounter].Answer == questions.set2[QuestionCounter].correctAns){
										
										correctAnswers2 += 1;
									}
									else{
										wrongAnswers2 += 1;
									}
								
								AnswerModuleCounter++;
								QuestionCounter++;
								
								}
						}

						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$(".con").html(result);
							$('#correct').html(correctAnswers2);
							$('#wrong').html(wrongAnswers2);
							console.log(AnswersModule2);
							console.log(correctAnswers1);
							console.log(wrongAnswers1);
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
					$('.question').hide();
					$('#option-1').hide();
					$('#option-2').hide();
					$('#option-3').hide();

					$('.question').fadeIn(700).html(questions.set3[a].question);
					$('#option-1').fadeIn(700).html(questions.set3[a].answers[0].ansText);
					$('#option-2').fadeIn(700).html(questions.set3[a].answers[1].ansText);
					$('#option-3').fadeIn(700).html(questions.set3[a].answers[2].ansText);
					}else{
						AnswerModuleCounter = 1;
						QuestionCounter = 0;
						for(var counter =2; counter <= AnswersModule3.length; counter++){
								if(AnswersModule3[AnswerModuleCounter].id == questions.set3[QuestionCounter].id){
									if(AnswersModule3[AnswerModuleCounter].Answer == questions.set3[QuestionCounter].correctAns){
										
										correctAnswers3 += 1;
									}
									else{
										wrongAnswers3 += 1;
									}
								
								AnswerModuleCounter++;
								QuestionCounter++;
								
								}
						}

						$.ajax({
						url: "quiz-done.html",
						success:function(result){
							$(".con").html(result);
							$('#correct').html(correctAnswers3);
							$('#wrong').html(wrongAnswers3);
							console.log(AnswersModule3);
							retakeQuiz3();

						}});
					}
				});
			}

	function retakeQuiz1(){
		$('#retakeQuiz').click(function(){
			correctAnswers1 = 0;
			wrongAnswers1 = 0;
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
			correctAnswers2 = 0;
			wrongAnswers2 = 0;
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
			correctAnswers3 = 0;
			wrongAnswers3 = 0;
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