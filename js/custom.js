$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
 
  $("#cssmenu").menumaker({
	title: "Menu",              // The text of the button which toggles the menu
	breakpoint: 768,			// The breakpoint for switching to the mobile view
	format: "multitoggle"       // It takes three values: dropdown for a simple toggle menu, select for select list menu, multitoggle for a menu where each submenu can be toggled separately
});



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-brading');
const navItems = document.querySelectorAll('.nav-item');
// set intial state of menu
let showMenu = false;
menuBtn.addEventListener('click',toggleMenu);
function toggleMenu(){
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach(item=>item.classList.add('show'));
		//set Menu state
		showMenu = true;
	}else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


 





















}(jQuery));