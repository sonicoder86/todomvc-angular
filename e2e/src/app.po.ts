import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  triggerInput() {
    const input = element(by.css('input'));
    element(input).triggerHandler();

    element(by.css('input'))
  }
  getInput() {
    return element(by.css('h1'));
  }
}
