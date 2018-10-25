
var testing = false;

var home = {
		link: "#home",
		container: ".home-container",
		back: {
			link: "#contact",
			container: ".contact-container",},
		forw: {
			link: "#skills",
			container: ".skills-container"}}

var skills = {
		link: "#skills",
		container: ".skills-container",
		back: {
			link: "#home",
			container: ".home-container",},
		forw: {
			link: "#work",
			container: ".work-container"}}

var work ={
		link: "#work",
		container: ".work-container",
		back: {
			link: "#skills",
			container: ".skills-container",},
		forw: {
			link: "#projects",
			container: ".projects-container"}}

var projects = {
		link: "#projects",
		container: ".projects-container",
		back: {
			link: "#work",
			container: ".work-container",},
		forw: {
			link: "#contact",
			container: ".contact-container"}}

var contact ={
		link: "#contact",
		container: ".contact-container",
		back: {
			link: "#projects",
			container: ".projects-container",},
		forw: {
			link: "#home",
			container: ".home-container"}}	

var fadeTimer = 200

var routeChange = function(direction, sectionObj){
	if(direction == "forward"){
		$('.section').fadeOut(fadeTimer);
		setTimeout(function(){
			$('.section').hide()
			console.log(sectionObj.forw);
			$(sectionObj.forw.container).show()
			window.location.assign(sectionObj.forw.link)
		}, fadeTimer);
	} else {
		$('.section').fadeOut(fadeTimer);
		setTimeout(function(){
			$('.section').hide()
			console.log(sectionObj.back);
			$(sectionObj.back.container).show()
			window.location.assign(sectionObj.back.link)
		}, fadeTimer);
	}
}	

window.onload =function(){
	if (testing == false){
		var location = window.location.hash.substr(1)
		$('.section').hide();
		if (location != ""){$('.' + location + '-container').show();}
		else{$('.home-container').show();}
	}
};


document.addEventListener('keydown', function(event){
	var location = window.location.hash.substr(1)

	if (event.keyCode == 65 || event.keyCode == 68){
		var direction;
		if (event.keyCode == 65){
			console.log("a")
			direction = "backward"
		} else if (event.keyCode == 68){
			console.log("d");
			direction = "forward"
		}

		if (location == "" || location == "home"){
			routeChange(direction, home)
		} else if (location == "skills"){
			routeChange(direction, skills)
		} else if (location == "work"){
			routeChange(direction, work)
		} else if (location == "projects"){
			routeChange(direction, projects)
		} else if (location == "contact"){
			routeChange(direction, contact)
		}

	}
});