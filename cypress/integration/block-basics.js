import { setupBeforeEach, tearDownAfterEach } from '../support';
import { changePageTitle, addBlock, save } from '../helpers';

describe('Blocks Tests', () => {
  beforeEach(setupBeforeEach);
  afterEach(tearDownAfterEach);

  it('Add Block: Empty', () => {
    // Change page title
    changePageTitle('My Add-on Page');
    // Add block
   

    // Save
    save('/cypress/my-page');
    // then the page view should contain our changes
    cy.contains('My Add-on Page');
   
  });
});
