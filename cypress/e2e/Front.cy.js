///<reference types="Cypress" />
import cenarios from './gerkin/cenarios';
import msg from '../fixtures/mensagem.json';
import { faker } from '@faker-js/faker';

context('Dado que o usuário acesse a página de registro', () => {
  const nome = faker.internet.userName();
  const sobrenome = faker.internet.userName();
  const password = faker.internet.password();
  const confirmePassword = password;
  const email = faker.internet.email();

  beforeEach(() => {
    cy.visit('/register?returnUrl=%2F');
  });
  describe('Quando o usuário preencher o formulário com informações válidas e clicar em "Registrar"', () => {
    it('Então o usuário deverá visualizar uma mensagem de sucesso', () => {
     cy.allure().descriptionHtml(cenarios.CriarRegistro);
     cy.PreencherFormulario(nome,sobrenome,email,password,confirmePassword);
     cy.BotaoFinalizarRegistro();
     cy.ValidaRegistro(true,msg.sucesso);
    })
  })

  describe('Quando o usuário selecionar a data de nascimento', () => {
      it('Então os campos correspondentes devem conter os dados selecionados', () => {
        cy.allure().descriptionHtml(cenarios.VerificacaoDosCamposData)
        cy.PreencherFormulario(nome,sobrenome,email,password,confirmePassword);
        cy.ValidaData();
      });
  });

  describe('Quando o usuário não preencher corretamente um campo obrigatório', () => {
    it('Então uma mensagem sinalizando o erro deve ser exibida - Nome', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(' ',sobrenome,email,password,confirmePassword);
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroNome);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - Sobrenome', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,' ',email,password,confirmePassword);
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroSobrenome);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - E-mail', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,' ',password,confirmePassword);
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroEmail);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - E-mail incorreto', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,'teste2hotmail.com ',password,confirmePassword);
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroEmailIncorreto);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - Password', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,email,'{selectall}{backspace}',confirmePassword);
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroPassword);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - Password confirmação', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,email,password,'{selectall}{backspace}');
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.erroPasswordConfirme);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - Password incompativeis', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,email,password,'123');
      cy.BotaoFinalizarRegistro();
      cy.ValidaRegistro(false,msg.errorPasswordIncompativeis);
    });

    it('Então uma mensagem sinalizando o erro deve ser exibida - Password insuficiente', () => {
      cy.allure().descriptionHtml(cenarios.PreenchimentoIncorretoDadosObrigatorios);
      cy.PreencherFormulario(nome,sobrenome,email,'123','123');
      cy.ValidaRegistro(false,msg.errorPasswordCaracteresInsuficiente);
    });
  });
});

