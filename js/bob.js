import bsn from 'bootstrap.native';

// number of clicks
// by correy winke
let intClickNumber = 0;

// funcation taggered when a tab is clicked
function navClicker(element) {
  // gets the badge
	const badNum = document.querySelector('.badge');
  // gets the active tab
	const tabActive = document.querySelector('.active');
  // get all of the article that make up the body after nav
	const sectionArts = document.querySelectorAll('section > article');
  // get the figure for the animation
	const myTarget = document.getElementsByClassName('target');

  // add one to counter of clicks
	intClickNumber++;
  // change that number in HTML
	badNum.innerHTML = intClickNumber;
  // remove the active tab
	tabActive.classList.remove('active');
  // add the ative class to the new element
	element.classList.add('active');

  // walks thought articles after nav
	for (let lcv = 0; lcv < sectionArts.length; lcv++) {
    // dosn't show them
		sectionArts[lcv].style.display = 'none';
	}

  // see what tab is currently active
	if (element.classList.length === 2) {
    // set the background of page
		document.body.style.backgroundColor = '#cf564f';
    // display the correct the cotent
		sectionArts[1].style.display = 'block';
    // the other tab was clicked
	} else {
    // set the background of page
		document.body.style.backgroundColor = '#B93A32';
    // display the correct the cotent
		sectionArts[0].style.display = 'block';
	}

  // adds the animation class
	myTarget[0].classList.add('myAnim');
  // after the animation is finished playing
	setTimeout(() => {
    // remove that class
		myTarget[0].classList.remove('myAnim');
    // number of milesec that the animation takes
	}, 700);
}

function addButton() {
}

addButton();
window.navClicker = navClicker;
