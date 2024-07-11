const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  // Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the webpage
  await page.goto('https://automationexercise.com/signup'); // Replace with your URL
  
  // Locate the dropdown element
  const dropdown = await page.locator('#months'); // Replace with the actual selector
  
  // Extract the options
  const options = await dropdown.locator('option').evaluateAll(options => 
    options.map(option => ({ value: option.value, text: option.textContent }))
  );
  
  // Save to JSON file
  fs.writeFileSync('dropdownValue.json', JSON.stringify(options, null, 2));
  
  // Close browser
  await browser.close();
})();
