# Desafio-2
Obejtivo desse desafio era construir uma página ecommerce que tivesse a funcionalidade de cadastrar alguns itens do interesse do usuário no localStorage e também os dados pessoais e endereço.

# Página Home
Cria uma estado chamado 'data' e a variavel de estado chamada de 'setData'. Com isso eu tenho um Array que irá colocar os dados dos produtos(que estão localizados no server.json) no localStorage assim que o botão Adicionar ao carrinho for clicado.
Eu importo uma Api, criando uma espécie de sevidor falso, que por sua vez me permiti criar de maneira condicional a estrutura Div que mostrará na tela do usuário os produtos. 
E adiciono no localStorage por meio do index os itens.
Uso também o useHistory para que eu utilize rotas e possa mudar de diretório assim que o comando history.push() for chamado.

# Página Cadastro usuário
Neste página utiliza uma técnica parecida com a Home. Crio o formulário, estrutura básica, a variável de estado recebe um valor de objeto com chaves e valores vazias (''). 

ACRESCENTANDO VALORES
onChange={e => setUsers({...users, fullName: e.target.value})} 
Com essa lógica eu acesso o valor anterior do objeto, uso o spread para expandir o objeto e assim acrescentar um novo valor a ele. Esse valor será o nome completo, neste campo. Os demais campos seguem a mesma lógica.

Página 'cadastro endereço' segue a mesma estrutura de pensamento.

# Página Header e Footer
Apenas receberam algumas informações e cores. Utilizei Styled-Components para facilitar e ser mais eficiente na parte de CSS.
Styled-components é utilizado em toda a página.

Para ativar o site, utiliza o yarn start para iniciar a API.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#Desafio 2