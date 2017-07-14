import { ZooplaNg2AppPage } from './app.po';

describe('zoopla-ng2-app App', () => {
  let page: ZooplaNg2AppPage;

  beforeEach(() => {
    page = new ZooplaNg2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
