var assert = require('assert');
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const { isTypedArray } = require('util/types');


describe('failed login', function () {
    it('should failed login', async function () {
        let driver = await  new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://saucedemo.com') 

        await driver.findElement(By.id('user-name')).sendKeys('standard_user',Key.RETURN)
        await driver.findElement(By.id('password')).sendKeys('user',Key.RETURN)
        await driver.findElement(By.id('login-button')).click()

        driver.close();
    });
}); 


describe('successful login', function () {
    it('should login', async function () {
        let driver = await  new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://saucedemo.com') 

        await driver.findElement(By.id('user-name')).sendKeys('standard_user',Key.RETURN)
        await driver.findElement(By.id('password')).sendKeys('secret_sauce', Key.RETURN)
        await driver.findElement(By.id('login-button')).click()
    });
}); 

describe('add alements to cart', function() {
    it('should allow for adding elements in cart', async function () {
        let driver = await  new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://saucedemo.com/inventory.html') 

        await driver.findElement(By.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]')).click() 
        await driver.findElement(By.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]')).click() 
    });
});