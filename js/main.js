//~~

const sideMenu = document.getElementById("side-menu");
const sideMenuBtn = document.getElementById("side-menu-btn");

const activeClassMenu = "side-menu-active";
const activeClassBtn = "side-menu-btn-active";

const classListSideMenu = sideMenu.classList;
const classListSideMenuBtn = sideMenuBtn.classList;

sideMenuBtn.addEventListener("click", (e) => {
	if (!classListSideMenuBtn.contains(activeClassBtn)) {
		sideMenuBtn.classList.add(activeClassBtn);
		classListSideMenu.add(activeClassMenu);
		document.body.classList.add("not-scrolling")
	} else {
		sideMenuBtn.classList.remove(activeClassBtn);
		classListSideMenu.remove(activeClassMenu);
		document.body.classList.remove("not-scrolling")
	}
});