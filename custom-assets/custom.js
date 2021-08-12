// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	mybutton = document.getElementById("backToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleInner() {
	menu = document.getElementById("innerMenu");
	if (menu.style.display === "none") {
		menu.style.display = "block";
    } else {
		menu.style.display = "none";
	}
}