Feature('popup2');

Scenario('test something2', async ({ I }) => {
  await I.amOnPage('file:///C:/work/codecept-issue/codecept-app/test_page.html');
  await I.click('Click Me');
  await I.acceptPopup();
  await I.see('Click Me');
});
