import { Given, Then, When } from 'cucumber';
import { assert, expect } from 'chai';
import DebugScreen from '../screenobjects/debug.screen';
import ProfileScreen from '../screenobjects/profile.screen';

import { tabBar } from '../screenobjects/components/tabBar';
import Gestures from '../helpers/Gestures';
import LoginScreen from '../screenobjects/login.screen';
import * as appMessages from '../Constants/appMessages.constant';
import NativeAlert from '../helpers/NativeAlert';

Given(/^I'm on the debug screen$/, () => {
    
     DebugScreen.waitForIsShown(true);
    
});

When(/^I click the Environment button$/, () => {
    DebugScreen.environment.click();
});

Then(/^I select the '(.+)' option from the list$/, (option) => {
    DebugScreen.getEnvironment(option).click();
});


Then(/^I click on Profile button$/, () => {
    DebugScreen.profile.click();
});

When(/^I load an anonUser account$/, () => {
    Gestures.checkIfDisplayedWithScrollDown(DebugScreen.authenticate_anonmously, 2);
    DebugScreen.authenticate_anonmously.click();
});


Then(/^I click on Login button$/, () => {
    ProfileScreen.LoginScreen();
});

