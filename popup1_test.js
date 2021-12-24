Feature('popup1');

Scenario('test something1', async ({ I }) => {
  await I.amOnPage('file:///C:/work/codecept-issue/codecept-app/test_page.html');
  await I.see('Click Me');
});
