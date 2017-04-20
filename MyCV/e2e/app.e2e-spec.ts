import { MyCVPage } from './app.po';

describe('my-cv App', () => {
  let page: MyCVPage;

  beforeEach(() => {
    page = new MyCVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
