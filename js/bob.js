/* @flow */
// import bsn from 'bootstrap.native';

// by correy winke
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

class FormTest {
	constructor(element: any, intProgressValue: number) {
		this.currentElement = element;
		this.intProgressValue = intProgressValue;
	}
	blurMover(): number {
		const progress: any = document.getElementsByClassName('progress-bar')[0];
		const blnFlag: boolean = checks(this.currentElement.classList.item(0));
		let strFoundNewElement: string = '';
		let intRemoveAt: number = 0;
		let aryCopy: Array<string> = [];

		for (const val of Master.aryElementSlected) {
			intRemoveAt++;
			if (val === this.currentElement.classList.item(0)) {
				strFoundNewElement = val;
				break;
			}
		}

		if ((strFoundNewElement === '') && (this.currentElement.value !== '')) {
			Master.aryElementSlected.push(this.currentElement.classList.item(0));
			this.intProgressValue += 17;
		} else if (strFoundNewElement !== '') {
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
	if ((strValue === 'checkboxInput') || (strValue === 'radioInput')) {
		const anyAllChecks: any = document.getElementsByClassName(strValue);
		for (let lcv = 0; lcv < anyAllChecks.length; lcv++) {
			if (anyAllChecks[lcv].checked === true) {
				return false;
			}
		}
	}
	return true;
}

function mover(element: any): void {
	element.value = element.value.trim();

	const doSomeThing: FormTest = new FormTest(element, Master.intProgressValue);
	Master.intProgressValue = doSomeThing.blurMover();
}

// funcation taggered when a tab is clicked
function navClicker(element): void {
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

  // see what tab is currently active
	if ((element.classList.length === 2) && (element.classList[0] === 'myClass')) {
    // set the background of page
		document.body.style.backgroundImage = 'url("../../public/images/dkBG3.png")';
    // display the correct the cotent
		sectionArts[1].style.display = 'block';
    // the other tab was clicked
	}

	if (element.classList.length === 1) {
    // set the background of page
		document.body.style.backgroundImage = 'url("../../public/images/dkBG2.png")';
    // display the correct the cotent
		sectionArts[0].style.display = 'block';
	}

	if ((element.classList.length === 2) && (element.classList[0] === 'myClass2')) {
		// set the background of page
		document.body.style.backgroundImage = 'url("../../public/images/dkBG4.png")';
    // display the correct the cotent
		sectionArts[2].style.display = 'block';
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

window.navClicker = navClicker;
window.mover = mover;
