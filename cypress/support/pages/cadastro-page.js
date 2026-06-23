class cadastroPage {

    //seletores
    campoNome() { return cy.get('#name') }
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    campoConfirmarsenha() { return cy.get('#confirm-password') }
    checkTermos() { return cy.get('#terms-agreement') }
    botaoCriarconta() { return cy.get('#register-btn') }

    //metodos

    visitarPaginaCadastro() {
        cy.visit('register.html')
    }

    preencherCadastro(nome, email, telefone, senha, confirmarsenha) {
     if(nome) this.campoNome().clear().type(nome)
        this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.campoConfirmarsenha().clear().type(confirmarsenha)
        this.checkTermos().check()
        this.botaoCriarconta().click()
    }




}

export default new cadastroPage()