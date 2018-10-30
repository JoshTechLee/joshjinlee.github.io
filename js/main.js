
var testing = true;
var navWidth = 100;
var fadeTimer = 200

var home = {
	position: navWidth * 4, path: "#home", container: ".home-container",
	back: { path: "#contact", container: ".contact-container", },
	forw: { path: "#skills", container: ".skills-container" }
}

var skills = {
	position: navWidth * 3, path: "#skills", container: ".skills-container",
	back: { path: "#home", container: ".home-container", },
	forw: { path: "#work", container: ".work-container" }
}

var work = {
	position: navWidth * 2, path: "#work", container: ".work-container",
	back: { path: "#skills", container: ".skills-container", },
	forw: { path: "#projects", container: ".projects-container" }
}

var projects = {
	position: navWidth * 1, path: "#projects", container: ".projects-container",
	back: { path: "#work", container: ".work-container", },
	forw: { path: "#contact", container: ".contact-container" }
}

var contact = {
	position: navWidth * 0, path: "#contact", container: ".contact-container",
	back: { path: "#projects", container: ".projects-container", },
	forw: { path: "#home", container: ".home-container" }
}

var currentPath = home;

$(window).bind("orientationchange", function(){
	var orientation = window.orientation;
	var new_orientation = (orientation) ? 0 : 180 + orientation;
	$('body').css({"-webkit-transform": "rotate(" + new_orientation + "deg)"});
	});


var routeChange = function (direction, sectionObj) {
	if (direction == "forward") {
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.forw.container).show()
			currentPath = assignCurrentPath(sectionObj.forw.path)
			$('.nav-selector').css('right', '' + currentPath.position + 'px')
		}, fadeTimer);
	} else if (direction == "backward"){
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.back.container).show()
			currentPath = assignCurrentPath(sectionObj.back.path)
			$('.nav-selector').css('right', '' + currentPath.position + 'px')
		}, fadeTimer);
	} else if (sectionObj.path != currentPath.path){
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.container).show()
			currentPath = assignCurrentPath(sectionObj.path)
			$('.nav-selector').css('right', '' + sectionObj.position + 'px')
		}, fadeTimer);
	}
}

var assignCurrentPath = function (path) {
	console.log("assignCurrentPath " + path)
	if (path == "#home") return home
	if (path == "#skills") return skills
	if (path == "#work") return work
	if (path == "#projects") return projects
	if (path == "#contact") return contact

}

window.onload = function () {
	if (testing == false) {
		currentPath = home
		$('.section').hide();
		$('.home-container').show();
	}
};

$('.nav-toggle').click(function(){
	$('.nav-container').toggleClass('nav-item-active');
	$('header').toggleClass('header-active');
});


$('#nav-home').hover(
	function () { $('.nav-selector').css('right', '' + home.position + 'px'); },
	function () { $('.nav-selector').css('right', '' + currentPath.position + 'px') });

$('#nav-skills').hover(
	function () { $('.nav-selector').css('right', '' + skills.position + 'px'); },
	function () { $('.nav-selector').css('right', '' + currentPath.position + 'px') });

$('#nav-work').hover(
	function () { $('.nav-selector').css('right', '' + work.position + 'px'); },
	function () { $('.nav-selector').css('right', '' + currentPath.position + 'px') });

$('#nav-projects').hover(
	function () { $('.nav-selector').css('right', '' + projects.position + 'px'); },
	function () { $('.nav-selector').css('right', '' + currentPath.position + 'px') });

$('#nav-contact').hover(
	function () { $('.nav-selector').css('right', '' + contact.position + 'px'); },
	function () { $('.nav-selector').css('right', '' + currentPath.position + 'px') });

$('#nav-home').click(function(){
	routeChange('click', home);
});

$('#nav-skills').click(function(){
	routeChange('click', skills);
});

$('#nav-work').click(function(){
	routeChange('click', work);
});

$('#nav-projects').click(function(){
	routeChange('click', projects);
});

$('#nav-contact').click(function(){
	routeChange('click', contact);
});

document.addEventListener('keydown', function (event) {

	if (event.keyCode == 65 || event.keyCode == 68) {
		var direction;
		if (event.keyCode == 65) {
			console.log("a")
			direction = "backward"
		} else if (event.keyCode == 68) {
			console.log("d");
			direction = "forward"
		}

		console.log(currentPath)

		if (currentPath == home) {
			routeChange(direction, home)
		} else if (currentPath == skills) {
			routeChange(direction, skills)
		} else if (currentPath == work) {
			routeChange(direction, work)
		} else if (currentPath == projects) {
			routeChange(direction, projects)
		} else if (currentPath == contact) {
			routeChange(direction, contact)
		}

	}
});