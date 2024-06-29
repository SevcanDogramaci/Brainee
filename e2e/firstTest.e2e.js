describe('Home Screen', () => {
  beforeEach(async () => {
    await device.launchApp();
    await await new Promise(r => setTimeout(r, 3000));
  });

  it('should show last question', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('title'))).toHaveText('Last Time');
    await expect(element(by.id('questionInfo'))).toBeVisible();
  });
});

// describe('Question Screen', () => {
//   beforeEach(async () => {
//     await device.launchApp();
//   });

//   it('should show question', async () => {
//     await expect(element(by.id('title'))).toBeVisible();
//     await expect(element(by.id('title'))).toHaveText('Question?');
//     await expect(element(by.id('question'))).toBeVisible();
//     try {
//       await expect(element(by.id('answerButton'))).tap();
//       throw Error('Answer button should be disabled !');
//     } catch (error) {}

//     await expect(element(by.id('answerInput'))).tap();
//     await expect(element(by.id('answerInput'))).typeText('0000');
//     await expect(element(by.id('answerButton'))).tap();

//     await expect(element(by.id('result'))).toBeVisible();
//     await expect(element(by.id('result'))).toHaveText('Wrong');
//   });
// }
// );
