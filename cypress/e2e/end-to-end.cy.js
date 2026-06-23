/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page'
import loginPage from '../support/pages/login-page'

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });


    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number('##########')
        let senha = faker.internet.password()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(telefone)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.visit('login.html')
        cy.get('#email').type(email)
        cy.get('#password').type(senha)
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

it.only('Deve fazer o cadastro e validar o login com o usuário cadastrado)', () => {
    cadastroPage.preencherCadastro('Guilherme', 'guilherme@teste.com', '34998101476', 'senha123', 'senha123')
    cy.visit('login.html')
    loginPage.preencherLogin('guilherme@teste.com', 'senha123')

});

});