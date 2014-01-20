$(document).ready(function(){

	var questions = {
	set1: [
	{id: 1, question: "All other elements of HTML or XHTML must be a descendant of this element. What is this element?", answers: [{ansText: "<head></head>", value:1}, {ansText: "<html></html>", value:2}, {ansText: "<body></body>", value:3}], correctAns:2},
	{id: 2, question: "It represents the content of an HTML document. All contents should be placed inside this tag. What is this element?", answers: [{ansText: "<html></html>", value:1}, {ansText: "<head></head>", value:2}, {ansText: "<body></body>", value:3}], correctAns:3},
	{id: 3, question: "There are two ways to write CSS - Inline or external.If you'll use the 'inline' method, your CSS will be written inside of what tag?", answers: [{ansText: "<link>", value:1}, {ansText: "<style></style>", value:2}, {ansText: "<head></head>", value:3}], correctAns:2},
	{id: 4, question: "There are two ways to write CSS - Inline or external.If you'll use the 'external' method, you'll have to use what tag?", answers: [{ansText: "<link>", value:1}, {ansText: "<style></style>", value:2}, {ansText: "<head></head>", value:3}], correctAns:1},
	{id: 5, question: "It is use to define the title of the document. This tag only accepts text and any tags inside this tag will not be interpreted.", answers: [{ansText: "<head></head>", value:1}, {ansText: "<title></title>", value:2}, {ansText: "<style></style>", value:3}], correctAns:2},
	{id: 6, question: "<link> tags and <title></title> are usually placed inside this tag. It represent the collection of metadata about the document. What is this tag?", answers: [{ansText: "<head></head>", value:1}, {ansText: "<title></title>", value:2}, {ansText: "<html></html>", value:3}], correctAns:1},
	{id: 7, question: "It defines either an external or an internal script (JavaScript). What tag is this?", answers: [{ansText: "<title></title>", value:1}, {ansText: "<script></script>", value:2}, {ansText: "<head></head>", value:3}], correctAns:2},
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
	{id: 1, question: "It is a generic container with no special meaning. Used to divide section in an HTML file. What tag is this? answer:", answers: [{ansText: "<body></body>", value:1}, {ansText: "<div></div>", value:2}, {ansText: "<head></head>", value:3}], correctAns:2},
	{id: 2, question: "There are six header tags that you can use freely in HTML, what is the largest of the six?", answers: [{ansText: "<h1></h1>", value:1}, {ansText: "<h2></h2>", value:2}, {ansText: "<h6></h6>", value:3}], correctAns:1},
	{id: 3, question: "It defines a portion of an HTML that should be displayed as a paragraph. What tag is this?", answers: [{ansText: "<p></p>", value:1}, {ansText: "<para></para>", value:2}, {ansText: "<pgraph></pgraph>", value:3}], correctAns:1},
	{id: 4, question: "This tag is use to display an image. What tag is this?", answers: [{ansText: "<img>", value:1}, {ansText: "<images>", value:2}, {ansText: "<imgs>", value:3}], correctAns:1},
	{id: 5, question: "Represents a form, cosisting of controls, that can be submitted to a server for processing. What is this?", answers: [{ansText: "<forms></forms>", value:1}, {ansText: "<form></form>", value:2}, {ansText: "<formsheet></formsheet>", value:3}], correctAns:2},
	{id: 6, question: "There are two list that you can use in HTML, unordered and ordered, if you're going to use ordered list, what tag are you going to type?", answers: [{ansText: "<orderl></orderl>", value:1}, {ansText: "<ordered></ordered>", value:2}, {ansText: "<ol></ol>", value:3}], correctAns:3},
	{id: 7, question: "Represents a list item of a list. What tag is this?", answers: [{ansText: "<li></li>", value:1}, {ansText: "<lists></lists>", value:2}, {ansText: "<listed></listed>", value:3}], correctAns:1},
	{id: 8, question: "This tag represents a hyperlink. What tag is this?", answers: [{ansText: "<alink></alink>", value:1}, {ansText: "<a></a>", value:2}, {ansText: "<link></link>", value:3}], correctAns:2},
	{id: 9, question: "Represents a typed data field allowing user to edit data. This tag is usually located within the <form></form> tags. What tag is this?", answers: [{ansText: "<output>", value:1}, {ansText: "<i></i>", value:2}, {ansText: "<input>", value:3}], correctAns:3},
	{id: 10, question: "Represents data with more than one dimension. Use to create a table.", answers: [{ansText: "<tbls></tbls>", value:1}, {ansText: "<t></t>", value:2}, {ansText: "<table></table>", value:3}], correctAns:3}
	]
	}

	// Hover options
	$('.options').mouseenter(function(){

		$(this).css('background-color','white');
		$(this).css('color','#FF7F00');
		$(this).css('font-weight','bold');

	});

	$('.options').mouseleave(function(){

		$(this).css('background-color','#FF7F00');
		$(this).css('color','white');
		$(this).css('font-weight','normal');
	})

});