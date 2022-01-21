import NativeAlert from '../helpers/NativeAlert';
import Picker from '../helpers/Picker';
import { getTextOfElement } from '../helpers/utils';
import AppScreen from './app.screen';

const SELECTORS = {
    ENVIRONMENT: '~Environment',
    STAGING: '~android:id/text1',
    PRODUCTION: '~Production',
    PROFILE: '~Profile',
    AUTHENTICATE_ANON: 'authenticateAnonymouslyBtn'
};

class DebugScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ENVIRONMENT);
    }

    get environment() {
        return $(SELECTORS.ENVIRONMENT);
    }

    get staging() {
        return $(SELECTORS.STAGING);
    }

    get production() {
        return $(SELECTORS.PRODUCTION);
    }

    get profile() {
        return $(SELECTORS.PROFILE);
    }

    get authenticate_anonmously() {
        return $(SELECTORS.AUTHENTICATE_ANON);
    }

    getEnvironment(option)
    {
        if(option=='Staging')
        {
            return $(SELECTORS.STAGING);
        }
        else{
            return $(SELECTORS.PRODUCTION);   
        }

    }
   
}

export default new DebugScreen();
