
var testing = true;

var home = {
	path: "#home",
	container: ".home-container",
	back: {
		path: "#contact",
		container: ".contact-container",
	},
	forw: {
		path: "#skills",
		container: ".skills-container"
	}
}

var skills = {
	path: "#skills",
	container: ".skills-container",
	back: {
		path: "#home",
		container: ".home-container",
	},
	forw: {
		path: "#work",
		container: ".work-container"
	}
}

var work = {
	path: "#work",
	container: ".work-container",
	back: {
		path: "#skills",
		container: ".skills-container",
	},
	forw: {
		path: "#projects",
		container: ".projects-container"
	}
}

var projects = {
	path: "#projects",
	container: ".projects-container",
	back: {
		path: "#work",
		container: ".work-container",
	},
	forw: {
		path: "#contact",
		container: ".contact-container"
	}
}

var contact = {
	path: "#contact",
	container: ".contact-container",
	back: {
		path: "#projects",
		container: ".projects-container",
	},
	forw: {
		path: "#home",
		container: ".home-container"
	}
}

var fadeTimer = 200

var currentPath = home;

var routeChange = function (direction, sectionObj) {
	if (direction == "forward") {
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.forw.container).show()
			currentPath = assignCurrentPath(sectionObj.forw.path)
		}, fadeTimer);
	} else {
		$('.section').fadeOut(fadeTimer);
		setTimeout(function () {
			$('.section').hide()
			$(sectionObj.back.container).show()
			currentPath = assignCurrentPath(sectionObj.back.path)
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