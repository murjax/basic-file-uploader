describe('uploading files', () => {
  const environment = ['localhost:3000'];

  it('uploads a file valid file', () => {
    cy.visit(`http://${environment}`);
    cy.get('[type="file"]').attachFile('example.json');
    cy.get('[type="submit"]').click();
    cy.get('[data-test="upload-result"]').contains('File uploaded successfully');
  });

  it('shows error when no file attached', () => {
    cy.visit(`http://${environment}`);
    cy.get('[type="submit"]').click();
    cy.get('[data-test="upload-result"]').contains('No file attached');
  });

  it('shows error when unsupported file type submitted', () => {
    cy.visit(`http://${environment}`);
    cy.get('[type="file"]').attachFile('example.txt');
    cy.get('[type="submit"]').click();
    cy.get('[data-test="upload-result"]').contains('File type not supported');
  });
});
