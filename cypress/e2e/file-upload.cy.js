describe('uploading files', () => {
  const environment = ['localhost:3000'];

  it('uploads a file', () => {
    cy.visit(`http://${environment}`);
    cy.get('[type="file"]').attachFile('example.json');
    cy.get('[type="submit"]').click();
  });
});
