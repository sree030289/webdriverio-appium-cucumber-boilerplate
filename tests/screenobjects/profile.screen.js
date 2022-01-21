import NativeAlert from '../helpers/NativeAlert';
import Picker from '../helpers/Picker';
import { getTextOfElement } from '../helpers/utils';
import AppScreen from './app.screen';

const SELECTORS = {
    LOGIN: '~registerLogInBtn',
    SIGNUP: '~registerSignUpBtn',
    TESTEARS_BUTTON: '~testEarsBtn',
    PERSONALIZATION_SEEKBAR:'personalizationSeekBar'
};

class ProfileScreen extends AppScreen {
    constructor() {
        super(SELECTORS.personalizationSeekBar);
    }

    get loginBtn() {
        return $(SELECTORS.LOGIN);
    }

    get signupBtn() {
        return $(SELECTORS.SIGNUP);
    }

   
}

export default new ProfileScreen();
