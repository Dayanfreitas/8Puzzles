context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/')
    })
  
    it('1- Acessando a tela inicial', () => {
      cy.title().should('include', '')
    });
  
  })