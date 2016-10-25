/* @flow */
import bsn from 'bootstrap.native';

// by correy winke
// 10/17/16
// a gobal varible
const Master: {
		intProgressValue: number,
		intClickNumber: number,
		aryElementSlected: Array<string>
	} = {
		intProgressValue: 0,
		// number of clicks
		intClickNumber: 0,
		aryElementSlected: []
	};

// testing out classes
class FormTest {
	// build a this class
	constructor(element: any, intProgressValue: number) {
		// to check to out
		this.currentElement = element;
		// the progress bar value
		this.intProgressValue = intProgressValue;
	}
	// form mover
	blurMover(): number {
		// get the progress bar
		const progress: any = document.getElementsByClassName('progress-bar')[0];
		// see a checkbox was checked
		const blnFlag: boolean = checks(this.currentElement.classList.item(0));
		// in the last of names added the progress bar
		let strFoundNewElement: string = '';
		// remvoe that item in the list
		let intRemoveAt: number = 0;
		// copy of gobal list to remove an element
		let aryCopy: Array<string> = [];

		// see if its in the lsit
		for (const val of Master.aryElementSlected) {
			intRemoveAt++;
			if (val === this.currentElement.classList.item(0)) {
				strFoundNewElement = val;
				break;
			}
		}

		// chek the input to see the progress bar can incresss
		if ((strFoundNewElement === '') && (this.currentElement.value !== '')) {
			// incresss the progress bar
			Master.aryElementSlected.push(this.currentElement.classList.item(0));
			this.intProgressValue += 17;
		} else if (strFoundNewElement !== '') {
			// remove part the progress bar
			if ((this.currentElement.value === '') || (blnFlag === true)) {
				aryCopy = Master.aryElementSlected;
				aryCopy = aryCopy.filter(value => {
					return value !== strFoundNewElement;
				});
				Master.aryElementSlected = aryCopy;
				this.intProgressValue -= 17;
			}
		}

		progress.style.width = `${this.intProgressValue}%`;
		return this.intProgressValue;
	}
}

function checks(strValue: string): boolean {
	// see there a check in the chekcboxs
	if ((strValue === 'checkboxInput') || (strValue === 'radioInput')) {
		const anyAllChecks: any = document.getElementsByClassName(strValue);
		for (let lcv = 0; lcv < anyAllChecks.length; lcv++) {
			if (anyAllChecks[lcv].checked === true) {
				// found one a check
				return false;
			}
		}
	}
	return true;
}

// base funcaton that handles the input for other functions
function mover(element: any): void {
	element.value = element.value.trim();

	const doSomeThing: FormTest = new FormTest(element, Master.intProgressValue);
	Master.intProgressValue = doSomeThing.blurMover();
}

// helper function for nav clikcer
function navClickerHelper(element: any, sectionArts: any): void {
	let intCurrentSpot: number = 0;

	for (let lcv = 0; lcv < sectionArts.length; lcv++) {
		intCurrentSpot = lcv + 2;

		if ((element.classList.length === 2) && (element.classList.item(0) === `myClass${lcv}`)) {
			// set the background of page
			document.body.style.backgroundImage = `url("../../public/images/dkBG${intCurrentSpot}.png")`;
			// display the correct the cotent
			sectionArts[lcv].style.display = 'block';
		} else if (element.classList.length === 1) {
			// set the background of page
			document.body.style.backgroundImage = 'url("../../public/images/dkBG2.png")';
			// display the correct the cotent
			sectionArts[0].style.display = 'block';
		}
	}
}

function imgHover(element: any) {
	// gets the image eleemnt
	const img: any = document.querySelector('.media-body img');
	// start to the file path
	let strFilePath: string = '../../public/images/';

	// see what image is curretly active
	switch (element.classList.item(0)) {
		case "Bootstrap":
			// changes image
			img.src = strFilePath + 'Boostrap_logo.svg';
			img.alt = 'Bootstrap logo';
			break;
		case "React":
			img.src = strFilePath + 'reactLogo.png';
			img.alt = 'React logo';
			break;
		case "Me":
			img.src = strFilePath + 'me.jpg';
			img.alt = 'Me';
			break;
	}
}

function btnClikHelper (medBodyImg: any, strNewClass) {
	// check what image is pressed
	if (medBodyImg.classList.contains('img-rounded') == true) {
		// remove that class
		medBodyImg.classList.remove('img-rounded');
		// addes the new one
		medBodyImg.classList.add(strNewClass);
	} else if (medBodyImg.classList.contains('img-circle') == true) {
		medBodyImg.classList.remove('img-circle');
		medBodyImg.classList.add(strNewClass);
	} else {
		medBodyImg.classList.remove('img-thumbnail');
		medBodyImg.classList.add(strNewClass);
	}
}

function btnClik(element: any) {
	// get the iamge
	let medBodyImg: any = document.querySelector('.media-body img');

	// remove the active
	document.querySelector('.panel-footer .active').classList.remove('active');
	// adds to the curretl element
	element.classList.add('active');

	// see button was press
	switch (element.innerHTML) {
		case 'Rounded':
			// changes the image
			btnClikHelper(medBodyImg,'img-rounded');
		break;
		case 'Circle':
			btnClikHelper(medBodyImg,'img-circle');
		break;
		case 'Thumbnail':
			btnClikHelper(medBodyImg,'img-thumbnail');
		break;
	}
}

function navLeftOrRight(element: any, blnFlag: boolean): any {
	const aryElements: Array<string> = ["active","myClass1","myClass2","myClass3"];
	for (let lcv= 0;lcv < aryElements.length;) {
		if (element.classList.item(0) === aryElements[lcv]) {
			if (blnFlag === true) {
				lcv++;

				if (lcv >= aryElements.length) {
					lcv = 0;
					return document.querySelector('.dropdown-menu > li');
				} else {
					return document.querySelector(`.${aryElements[lcv]}`);
				}
			} else {
				lcv--;

				if (lcv <= -1) {
					lcv = aryElements.length-1;
				}
				if (lcv === 0) {
					return document.querySelector('.dropdown-menu > li');
				} else {
					return document.querySelector(`.${aryElements[lcv]}`);
				}
			}
		}
		lcv++;
	}

	return element;
}

// funcation taggered when a tab is clicked
function navClicker(element: any): void {
	if (element.children[0].className !== "") {
		if (element.children[0].classList.item(1).indexOf("left") >= 0) {
			element = navLeftOrRight(document.querySelectorAll(".active")[0], false);
		} else {
			element = navLeftOrRight(document.querySelectorAll(".active")[0], true);
		}
	}

  // gets the badge
	const badNum: any = document.querySelector('.badge');
  // gets the active tab
	const tabActive: any = document.querySelector('.active');
  // get all of the article that make up the body after nav
	const sectionArts: any = document.querySelectorAll('section > article');
  // get the figure for the animation
	const myTarget: any = document.getElementsByClassName('target');

  // add one to counter of clicks
	Master.intClickNumber++;
  // change that number in HTML
	badNum.innerHTML = `${Master.intClickNumber}`;
  // remove the active tab
	tabActive.classList.remove('active');
  // add the ative class to the new element
	element.classList.add('active');

  // walks thought articles after nav
	for (let lcv = 0; lcv < sectionArts.length; lcv++) {
    // dosn't show them
		sectionArts[lcv].style.display = 'none';
	}

	navClickerHelper(element, sectionArts);

  // adds the animation class
	myTarget[0].classList.add('myAnim');
  // after the animation is finished playing
	setTimeout(() => {
    // remove that class
		myTarget[0].classList.remove('myAnim');
    // number of milesec that the animation takes
	}, 700);
}

// set the funcations gobal
window.navClicker = navClicker;
window.mover = mover;
window.imgHover = imgHover;
window.btnClik = btnClik;
