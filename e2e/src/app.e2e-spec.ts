import { browser, by, element, protractor } from 'protractor';

describe('New todo', () => {
  it('should create new todo', () => {
    browser.get(browser.baseUrl);

    expect(element(by.css('h1')).getText()).toEqual('todos');

    const newTodo = element(by.css('.new-todo'));
    newTodo.sendKeys('Demo');
    newTodo.sendKeys(protractor.Key.ENTER);

    expect(element(by.css('.main .todo-list .view')).getText()).toEqual('Demo');
  });
});
