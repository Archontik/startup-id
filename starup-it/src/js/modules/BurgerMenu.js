import Popup from '../helpers/Popup.js';

class BurgerMenu extends Popup {
	constructor() {
		super();

		this.burgerButton = document.querySelector('.burger-button');
		this.burgerModal = document.querySelector('.burger-modal')
	}

	/**
	 * Initialize the menu functionality.
	 */
	init() {
		if (this.burgerButton) {
			document.addEventListener('click', ({target}) => {
				if (target.closest('.burger-button')) {
					this.burgerModal.classList.toggle('opened');
					this.burgerButton.classList.toggle('active');
					this.toggleBodyLock(this.isMenuOpen);
				}
			});
		}
	}

	/**
	 * Open the menu.
	 */
	menuOpen() {
		this.toggleBodyLock(true);
		this.burgerModal.classList.add('opened');
		this.burgerButton.classList.add('active');
	}

	/**
	 * Close the menu.
	 */
	menuClose() {
		this.toggleBodyLock(false);
		this.burgerModal.classList.remove('opened');
		this.burgerButton.classList.remove('active');
	}

	get isMenuOpen() {
		return this.burgerModal.classList.contains('opened');
	}
}

export default BurgerMenu;
