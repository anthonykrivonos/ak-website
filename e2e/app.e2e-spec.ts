import { AkWebPage } from './app.po';

describe('ak-web App', () => {
  let page: AkWebPage;

  beforeEach(() => {
    page = new AkWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
