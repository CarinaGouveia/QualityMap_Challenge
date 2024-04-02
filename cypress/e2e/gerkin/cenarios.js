const testDescription = {
    CriarRegistro:  `
    <div>
      <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
      <span style="color: #b22222;"> Criar registro </span>
    </div>
    <div>
      <span style="color: #800080; font-weight: bold;">Cenario 1: </span>
      <span style="color: #b22222;"> Criar novo usuário com sucesso</span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> Dado que o usuário acesse a página de registro <br/>
      <strong>E</strong> preenche todos os dados obrigatórios de registro corretamente <br/>
      <strong>QUANDO</strong> o usuário clicar em "Registrar" <br/>
      <strong>ENTAO</strong> uma mensagem sinalizando o sucesso da ação deve ser visualizada"
      <strong>E</strong> o novo registro é criado com sucesso <br/>
    </div>
    `,
    VerificacaoDosCamposData:`
    <div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Preenchimento do formulário </span>
  </div>
  <div>
    <span style="color: #800080; font-weight: bold;">Cenario 2: </span>
    <span style="color: #b22222;"> Dados do campo data inserido corretamente </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> Dado que o usuário acesse a página de registro <br/>
    <strong>QUANDO</strong> o usuário selecionar os campos da data de nascimento <br/>
    <strong>ENTAO</strong> o valor selecionado deve aparecer corretamente de no campo correspondente."
  </div>
    ` 
    ,PreenchimentoIncorretoDadosObrigatorios:`
    <div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Preenchimento do formulário </span>
  </div>
  <div>
    <span style="color: #800080; font-weight: bold;">Cenario 3: </span>
    <span style="color: #b22222;"> Campos obrigatórios não preenchidos corretamente </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> Dado que o usuário acesse a página de registro <br/>
    <strong>QUANDO</strong> o usuário não preencher os campos obrigatórios corretamente <br/>
    <strong>E</strong> clicar em registar <br/>
    <strong>ENTAO</strong> uma mensagem de erro deve ser exibida abaixo do campo."
  </div>
    `
  };
  
  export default testDescription;
  