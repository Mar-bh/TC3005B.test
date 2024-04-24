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
        driver.close();
    });
}); 

describe('add alements to cart', function() {
    it('should allow for adding elements in cart and checkout', async function () {
        let driver = await  new Builder().forBrowser(Browser.CHROME).build()
        await driver.get('https://saucedemo.com') 

        await driver.findElement(By.id('user-name')).sendKeys('standard_user',Key.RETURN)
        await driver.findElement(By.id('password')).sendKeys('secret_sauce', Key.RETURN)
        await driver.findElement(By.id('login-button')).click()

        await driver.findElement(By.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]')).click() 
        await driver.findElement(By.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]')).click() 

        await driver.findElement(By.id('shopping_cart_container')).click()
        await driver.findElement(By.id('checkout')).click()

        
      
        await driver.findElement(By.id('first-name')).sendKeys('John')
        await driver.findElement(By.id('postal-code')).sendKeys('666')
        await driver.findElement(By.id('last-name')).sendKeys('Doe')

        await driver.findElement(By.id('continue')).click()

        await driver.wait(async () => {
            const readyState = await driver.executeScript('return document.readyState');
            return readyState === 'complete';
        }, 10000)

        const price1 =  await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[2]/div[2]/div/text()[2]'));
        console.log(price1);
        const price2 =  await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[1]/div[4]/div[2]/div[2]/div/text()[2]'));
        console.log(price2);
        const total =  await driver.findElement(By.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[6]/text()[2]'));
        console.log(total);
        // if( parseFloat(price1) + parseFloat(price2) == parseFloat(total)){
        //     await driver.findElement(By.id('finish')).click()
        // }

        console.log(price1);
        console.log(parseFloat(price1) + parseFloat(price2) == parseFloat(total));


    });
});