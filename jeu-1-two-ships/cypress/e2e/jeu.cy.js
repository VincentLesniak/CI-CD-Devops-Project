describe('tests basiques du jeu', () => {

  beforeEach(() => {
    // charge le fichier local dans le navigateur virtuel
    cy.visit('../../index.html')
  })

  it('verifie les elements principaux', () => {
    // controle la visibilite de la zone de dessin
    cy.get('canvas').should('be.visible')
    
    // valide la presence du mot clé dans le titre principal
    cy.get('h1').should('contain', 'Two')
  })

  it('verifie les compteurs', () => {
    // cherche la classe css correspondante au score
    cy.get('.s').should('exist')
    
    // cherche la classe css correspondante aux points de vie
    cy.get('.h').should('exist')
  })

  it('verifie la defaite', () => {
    // assure que le menu de fin de partie est invisible au demarrage
    cy.get('.e').should('be.hidden')
  })

  //définit la vérification impossible

//   it('echoue en cherchant un fantome', () => {
//     cy.get('.licorne-magique').should('exist')
//   })

})