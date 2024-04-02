///<reference types="Cypress" />
import { payload,payloadPostProdutos } from "../support/payload";
describe('API ServeRest', () => {

    before(() => {
        const payloadEdit = payload();
        cy.PostUsuario(payloadEdit)
        .then((respEdicao)=> {
           Cypress.env('_idEdit', respEdicao.response.body._id);
           Cypress.env('email', payloadEdit.email);
        })

        cy.PostUsuario(payload())
        .then((respDelete)=>{
           Cypress.env('_idDel', respDelete.response.body._id);
        })

        const payloadUser = payload();
        cy.PostUsuario(payloadUser).then((resp)=> {
            Cypress.env('_id', resp.response.body._id);
            cy.GerarToken(payloadUser.email, payloadUser.password);
        });
    });

    after(() => {
        cy.DeleteUsuario(Cypress.env('_idEdit'));
        cy.DeleteUsuario(Cypress.env('_id'));
    });

    it('Deve buscar todos os usuários', () => {
       cy.GetUsuarios( Cypress.env('email'));
       //cy.screenshot({ capture: "fullPage" });
    });

    it('Deve buscar usuário por id', () => {
        cy.GetUsuarioId(Cypress.env('_idEdit'));
        //cy.screenshot({ capture: "fullPage" });
    });

     it('Deve editar usuário', () => {
        cy.PutUsuario(Cypress.env('_idEdit'), payload());
        //cy.screenshot({ capture: "fullPage" });
     });

     it('Deve excluir um usuário', () => {
        cy.DeleteUsuario(Cypress.env('_idDel'));
        //cy.screenshot({ capture: "fullPage" });
     });

     it('Deve criar produto', () => {
        cy.PostProduto(payloadPostProdutos());
        //cy.screenshot({ capture: "fullPage" });
     });
});