describe('Url Main Page User Flow', () => {

  beforeEach(() => {
    cy.fixture('mock-data')
    .then(urls => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {body: urls})
    })
    cy.visit('http://localhost:3000')
  })

  it('Should display the header on page load', () => {
    cy.get('h1').should('have.text', 'URL Shortener')
  })

  it('Should display already existing shortened URLs on page load', () => {
    cy.get('.url').eq(0).should('contain', 'Bird Photography')
    cy.get('.url').eq(1).should('contain', 'Horse Camp')
  })

  it('Should display the form on page load', () => {
    cy.get('form input[name=title]')
    cy.get('form input[name=long_url]')
    cy.get('form').contains('button', 'Shorten Please!')
  })

  it('Should allow a user to fill out the form', () => {
    cy.get('form input[name=title]').type('Bird Photography').should('have.value', 'Bird Photography')
    cy.get('form input[name=long_url]').type('https://expertphotography.com/bird-photography-basics-how-to-take-great-photos-of-birds/').should('have.value', 'https://expertphotography.com/bird-photography-basics-how-to-take-great-photos-of-birds/')
  })

  it('Should be able to give a new shortened URL to user', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        'id': 12,
        'long_url': 'https://besthorsecamps.com/best-wisconsin-horse-riding-camps.html',
        'short_url': 'http://localhost:3001/useshorturl/8',
        'title': 'New Bird Photography Page'
      }
    })
    cy.get('form input[name=title]').type('New Bird Photography Page').should('have.value', 'New Bird Photography Page')
    cy.get("form input[name=long_url]").type('https://besthorsecamps.com/best-wisconsin-horse-riding-camps.html').should('have.value', 'https://besthorsecamps.com/best-wisconsin-horse-riding-camps.html')
    cy.get('button[name=submit]').click()
    cy.get('.url').contains('New Bird Photography Page')
  })
})
