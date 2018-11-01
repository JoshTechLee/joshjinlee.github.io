
var testing = false;
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

var currentProject = 'asdf';

$(window).bind("orientationchange", function(){
	var orientation = window.orientation;
	var new_orientation = (orientation) ? 0 : 180 + orientation;
	$('body').css({"-webkit-transform": "rotate(" + new_orientation + "deg)"});
	});


var changeProject = function(projectsShow){
	currentProject = projectsShow
	$('.projects-show').fadeOut(fadeTimer);
	setTimeout(function(){
		$('.projects-show').hide()
		$(projectsShow).show()
	},fadeTimer);
}
	
var projectsScroll = function(){
	var margin_top = parseInt($('#client-server-hotspot').css('marginTop'))
	var csh_top = $('#client-server-hotspot').offset().top + margin_top
	var csh_bot = csh_top + $('#client-server-hotspot').outerHeight()
	var quibble_top = $('#quibble').offset().top + margin_top
	var quibble_bot = quibble_top + $('#quibble').outerHeight()
	var eumag_top = $('#eumag').offset().top + margin_top
	var eumag_bot = eumag_top + $('#eumag').outerHeight()
	var bendshop_top = $('#bendshop').offset().top + margin_top
	var bendshop_bot = bendshop_top + $('#bendshop').outerHeight()
	var scrolled = $(window).height()/2

	if (scrolled > csh_top && scrolled < csh_bot && currentProject != "#projects-csh") 
		changeProject('#projects-csh')
	else if (scrolled > quibble_top && scrolled < quibble_bot && currentProject != "#projects-quibble")
		changeProject('#projects-quibble')
	else if (scrolled > eumag_top && scrolled < eumag_bot && currentProject != "#projects-eumag")
		changeProject('#projects-eumag')
	else if (scrolled > bendshop_top && scrolled < bendshop_bot && currentProject != "#projects-bendshop")
		changeProject('#projects-bendshop')
}

$('.projects-content-container').scroll(projectsScroll);

var routeChange = function (direction, sectionObj) {
	
	if (direction == "forward") {
		currentPath = assignCurrentPath(sectionObj.forw.path)
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.forw.container).show()
			$('.nav-selector').css('right', '' + currentPath.position + 'px')
		}, fadeTimer);
	} else if (direction == "backward"){
		currentPath = assignCurrentPath(sectionObj.back.path)
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.back.container).show()
			$('.nav-selector').css('right', '' + currentPath.position + 'px')
		}, fadeTimer);
	} else if (sectionObj.path != currentPath.path){
		currentPath = assignCurrentPath(sectionObj.path)
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.container).show()
			$('.nav-selector').css('right', '' + sectionObj.position + 'px')
		}, fadeTimer);
	}
	if (currentPath.path == projects.path){
		console.log("currentPath")
		$('.projects-show').hide()
		setTimeout(projectsScroll, fadeTimer*7);
		currentProject = "asdf"
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
	$('.nav-toggle').toggleClass('nav-toggle-active');
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
	var margin_top = parseInt($('#client-server-hotspot').css('marginTop'))
	var csh_top = $('#client-server-hotspot').offset().top + margin_top
	// var csh_bot = csh_top + $('#client-server-hotspot').outerHeight()
	// var quibble_top = $('#quibble').offset().top + margin_top
	// var quibble_bot = quibble_top + $('#quibble').outerHeight()
	// var eumag_top = $('#eumag').offset().top + margin_top
	// var eumag_bot = eumag_top + $('#eumag').outerHeight()
	// var bendshop_top = $('#bendshop').offset().top + margin_top
	// var bendshop_bot = bendshop_top + $('#bendshop').outerHeight()

	if(currentPath == projects){
		if (event.keyCode == 87){

			// $('.projects-content-container').animate({
			// 	scrollTop: $("#client-server-hotspot").offset().top
			// }, 200)
			$('.projects-content-container').stop().animate({
				scrollTop: $("#quibble").offset().top
			}, 200)
			// $('.projects-content-container').animate({
			// 	scrollTop: $("#eumag").offset().top
			// }, 200)
			// $('.projects-content-container').animate({
			// 	scrollTop: $("#bendshop").offset().top
			// }, 200)
		}	
	}

	if (event.keyCode == 65 || event.keyCode == 68) {
		var direction;
		if (event.keyCode == 65) {
			console.log("a")
			direction = "backward"
		} else if (event.keyCode == 68) {
			console.log("d");
			direction = "forward"
		}

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