import { SpotySearchPage } from './app.po';

describe('spoty-search App', () => {
  let page: SpotySearchPage;

  beforeEach(() => {
    page = new SpotySearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
