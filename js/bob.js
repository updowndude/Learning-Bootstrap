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

function main() {
	const btn = document.querySelector("#btnHome");
	const elmPopover = document.querySelectorAll('[data-toggle="popover"]');
	const elmTooltip = document.querySelectorAll('[data-toggle="tooltip"]');

	for(let lcv=0;lcv<elmPopover.length;lcv++) {
		new bsn.Popover(elmPopover[lcv], {
  		template: `<div class="popover" role="tooltip"><div class="arrow"></div>
				<h3 class="popover-title">Not rquire</h3>
				<div class="popover-content">But still like feedback</div></div>`
		});
	}

	for(let lcv=0;lcv<elmTooltip.length;lcv++) {
		new bsn.Tooltip(elmTooltip[lcv], {
  		delay: 150
		});
	}

	btn.addEventListener('click', () => {
		new bsn.Button(btn, 'loading');
	});
}

main();
// set the funcations gobal
window.mover = mover;
window.imgHover = imgHover;
window.btnClik = btnClik;
