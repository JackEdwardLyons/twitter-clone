import { TwitterClonePage } from './app.po';

describe('twitter-clone App', () => {
  let page: TwitterClonePage;

  beforeEach(() => {
    page = new TwitterClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
