import { url } from "../configuracao/variaveis";


//#region Front-End

Cypress.Commands.add('PreencherFormulario',(nome,sobrenome,email,password,confirmePassword)=>{
    cy.get('h1').should('be.visible').and('contain.text', 'Register');
      cy.get(':nth-child(1) > .form-fields').scrollIntoView();
      cy.get('#gender-female').should('be.visible').check();
      cy.get('#FirstName').should('be.visible').type(nome);
      cy.get('#LastName').should('be.visible').type(sobrenome);
      cy.get('[name="DateOfBirthDay"]').should('be.visible').select('8').as('diaSelecao')
      cy.get('[name="DateOfBirthMonth"]').should('be.visible').select('June');
      cy.get('[name="DateOfBirthYear"]').should('be.visible').select('1995').as('anoSelecao');
      cy.get('#Email').should('be.visible').type(email);
      cy.get(':nth-child(2) > .form-fields').scrollIntoView();
      cy.get('#Company').should('be.visible').type('Empresa Teste');
      cy.get(':nth-child(3) > .form-fields').scrollIntoView();
      cy.get('#Newsletter').should('be.visible').check();
      cy.get(':nth-child(4) > .form-fields').scrollIntoView();
      cy.get('#Password').should('be.visible').type(password,{log: false});
      cy.get('#ConfirmPassword').should('be.visible').type(confirmePassword,{log: false});
     
   
})

Cypress.Commands.add('ValidaData',()=>{

    cy.get('@diaSelecao')
    .then(($daySelect)=>{
        cy.wrap($daySelect).invoke('val').should('eq','8');
    })
    
    cy.get('[name="DateOfBirthMonth"]').should('be.visible').invoke('val')
    .then((selecaoMes) => {
        cy.wrap(parseInt(selecaoMes)).should('deep.equal',6); 
    });
       
    cy.get('@anoSelecao').invoke('val')
    .then((value) => { 
        expect(value).to.equal('1995');
    });

});

Cypress.Commands.add('BotaoFinalizarRegistro',()=>{
    cy.get('#register-button').should('be.visible').click();
   
})

Cypress.Commands.add("ValidaRegistro", (cenario,mensagem) => { 

  cenario ?
  cy.get('.result').should('be.visible').and('contain.text',mensagem):
  cy.get('.field-validation-error').should('be.visible').and('contain.text',mensagem);
    
 })

//#endregion


//#region Back-End

Cypress.Commands.add('GerarToken',(email,password)=>{
    cy.request({
        url: `${url.api}/login`,
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: {
          email: email,
          password: password,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        Cypress.env("token", response.body.authorization);
      });
})

Cypress.Commands.add('GetUsuarios',(email)=>{
    cy.api({
      method: "GET",
      url: `${url.api}/usuarios`,
      failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.usuarios).to.have.length.greaterThan(0);
        expect(response.body.usuarios.some(item => item.email === email)).to.be.true;
    });
})

Cypress.Commands.add('GetUsuarioId',(id)=>{
    cy.api({
      method: "GET",
      url: `${url.api}/usuarios/${id}`,
      failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body._id).to.eq(id);
    });
})

Cypress.Commands.add('PutUsuario',(id,payload)=>{
    cy.api({
      method: "PUT",
      url: `${url.api}/usuarios/${id}`,
      body:{
        nome: `${payload.nome} Editado`,
        email: payload.email,
        password: payload.password,
        administrador:payload.administrador
      },
      failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.message).to.eql("Registro alterado com sucesso");
    });
})

Cypress.Commands.add('PostUsuario',(payload)=>{
    var result;
    cy.api({
      method: "POST",
      url: `${url.api}/usuarios`,
      body:payload,
      failOnStatusCode: false,
    }).then((response) => {
        result ={
            response:response
        }
        expect(response.status).to.eql(201);
        expect(response.body.message).to.eql("Cadastro realizado com sucesso");
        expect(response.body._id.length).to.eql(16);

    }).then(()=>{
        
        return result
    });
})

Cypress.Commands.add('DeleteUsuario',(id)=>{
    cy.api({
      method: "DELETE",
      url: `${url.api}/usuarios/${id}`,
      failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.message).to.eql("Registro excluído com sucesso");
    });
})

Cypress.Commands.add('PostProduto',(payload)=>{
    cy.api({
      method: "POST",
      url: `${url.api}/produtos`,
      headers: {
        "accept": "application/json",
        "Authorization": Cypress.env("token"),
        "content-type": "application/json",
      },
      body:payload,
      failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eql(201);
        expect(response.body.message).to.eql("Cadastro realizado com sucesso");
        expect(response.body._id.length).to.eql(16);
    });
})

//#endregion