import { ConceptsPage } from './app.po';

describe('concepts App', () => {
  let page: ConceptsPage;

  beforeEach(() => {
    page = new ConceptsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
