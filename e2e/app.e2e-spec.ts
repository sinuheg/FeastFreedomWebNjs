import { Feastfreedom0Page } from './app.po';

describe('feastfreedom0 App', () => {
  let page: Feastfreedom0Page;

  beforeEach(() => {
    page = new Feastfreedom0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
