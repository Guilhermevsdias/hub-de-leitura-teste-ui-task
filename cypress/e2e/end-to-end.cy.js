/// <reference types="cypress"/>

import cadastroPage from '../support/pages/cadastro-page'
import loginPage from '../support/pages/login-page'

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });


it.only('Deve fazer o cadastro e validar o login com o usuário cadastrado)', () => {
    cadastroPage.preencherCadastro('Guilherme', 'guilherme@teste.com', '34998101476', 'senha123', 'senha123')
    cy.visit('login.html')
    loginPage.preencherLogin('guilherme@teste.com', 'senha123')

});

});