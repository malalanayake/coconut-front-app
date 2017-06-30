import { CoconutFrontNewPage } from './app.po';

describe('coconut-front-new App', function() {
  let page: CoconutFrontNewPage;

  beforeEach(() => {
    page = new CoconutFrontNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
