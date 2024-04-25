// ts-check
import{test,expect}from "@playwright/test"

// to test the title of page 
test("navigate to URL",async ({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await expect(page).toHaveTitle("Swag Labs")
// await page.waitForTimeout(2000)

})

//to test the url 
test("test the URL",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await expect(page).toHaveURL(/.*demo/)

})

// to add all itmes 
test("add all items to the cart",async({page})=>{

await page.goto('https://www.saucedemo.com/v1/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button', { name: 'LOGIN' }).click();

const buttons=await page.$$(".btn_primary")
for(const button of buttons){
  await button.click()
}
await page.waitForTimeout(5000)
})