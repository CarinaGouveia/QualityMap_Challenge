
# Documentação de Instalação - Projeto Cypress
Visão Geral
Esta documentação fornece instruções passo a passo sobre como instalar e configurar o ambiente de teste usando o Cypress para este projeto. 



## **Requisitos Prévios** 

Antes de começar, verifique se sua máquina atende aos seguintes requisitos:

- Node.js instalado
- Conexão com a internet para baixar dependências


## **Instalação do Projeto**

Siga estas etapas para configurar o ambiente de teste do projeto:

1. Clone o repositório
Clone o repositório do GitHub para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```
2. Navegue até o diretório do projeto
No terminal, navegue até o diretório do projeto:

```bash
cd /seu-projeto
```
3. Instale as dependências
Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```
## **Executando Testes**

Após a instalação, você pode executar os testes Cypress usando o seguinte comando:

#### *Modo Iterativo (Com interface gráfica)* 

Este comando abrirá a interface do Cypress, onde você poderá selecionar e executar os testes disponíveis.
```bash
npm run cy:open
```

#### *Modo Headless (Sem interface gráfica)*


Este comando executará os testes Cypress no modo headless, onde não haverá interface gráfica, mas os resultados dos testes serão exibidos no terminal.
```bash
npm run cy:run
```

## Autora

- [@CarinaGouveia](https://www.linkedin.com/in/carinagouveia-qa/)

