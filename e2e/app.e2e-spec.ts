import { Angular2RssReaderPage } from './app.po';

describe('angular2-rss-reader App', () => {
  let page: Angular2RssReaderPage;

  beforeEach(() => {
    page = new Angular2RssReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
