![NY-Times Logo](https://theme.zdassets.com/theme_assets/968999/3f343ffc604a6c839e31d3f052b78abfa34ab588.png)
# ny-times-app
![preview do app](https://i.pinimg.com/564x/27/b3/cd/27b3cdb073600b777022bb03ac03bcba.jpg)

## Funcionalidades
- O app consome a api Top Stories do The New York Times. À medida que os dados vão sendo atualizados, o app os renderizam dinâmicamente nas screens.
- O app 'filtra' os dados em seções de technology e science e os mandam para serem renderizados nas screens correspondêntes.
- Se o usuário clicar em alguma notícia, vai aparecer um modal cujos conteúdos são o título da notícia, um link para a página oficial do The New York Times e um resumo da notícia.

## Como iniciar o projeto

### Se você deseja somente testar o app, siga estes passos:
1. Baixe o Expo-client no [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), se o seu smartphone for Android ou no [Apple Store](https://apps.apple.com/br/app/expo-client/id982107779), se o seu caso for IOS.

2. Com o aplicativo, Expo-client, use a funcionalidade de ler código QR-Code neste código:

   ![QR-Code](https://i.pinimg.com/564x/5d/82/d4/5d82d44da9c2b84a7fd4ab9c54a52db2.jpg)

3. Divirta-se 😃.

### Para conhecer à fundo o aplicativo, siga as seguintes etapas:

1. Baixe o NodeJs e Git, caso já tenha instalado desconsidere. [link NodeJs](https://nodejs.org/pt-br/download/), [link Git](https://git-scm.com/downloads)

2. No seu terminal, instale o [Expo-Cli](https://expo.io/tools#cli) com o seguinte comando:

``> npm install expo-cli --global``

3. Baixe este repositório com esse link: [Clique para Baixar](https://github.com/lucaspere/NY-Times-app-Compasso/archive/master.zip) ou clone o repositório com o comando:

``> git clone https://github.com/lucaspere/NY-Times-app-Compasso/archive/master.zip``

4. Define, no terminal,  o endereço da pasta a qual o código está e inicie o projeto:

```
> cd NY-Times-app-Compasso
> npm start
```
ou se quiser iniciar os testes

``> npm test``

5. Com o aplicativo do Expo no seu smartphone, escanea o QR-Code que aparecerá no terminal.

6. Divirta-se 🤓.


### Estrutura do código
- Visão geral:
```
...
src/
├─ components/
|  └─ ...
├─ redux/
|  └─ ...
├─ routers/
|  ├─ actions
|  ├─ reducer
|  └─ ...
├─ screens/
|  └─ ...
└─ utils/
   └─ ...
test/
├─ components/
|  ├─_snapshots_
|  |└─ ...
|  └─ ...
|   
├─ fixtures/
|  └─ ...
├─ routers/
|  ├─ actions
|  ├─ reducer
|  └─ ...
└─ utils/
   └─ ...  
App.js
App.json
...
```

#### Src
esse app foi criado usando a framework [React Native](https://reactnative.dev/) na plataforma do [Expo](https://expo.io/).
Para criar esse aplicativo, foram usados as seguintes bibliotecas:
- [Axios](https://github.com/axios/axios) - Ele nos permite fazer requisições HTTP assíncronas em navegadores e NodeJs.
- [React Navigation](https://reactnavigation.org/) - Excelente biblioteca que nos oferece módulos as quais nos permite configurar telas, transferir dados entre componentes e muito mais.
- [Redux](https://redux.js.org/) - Biblioteca que nos permite controlar o fluxo de state do app de maneira global e não no modo de parentesco entre componentes.
- [Expo-SDK](https://docs.expo.io/versions/latest/sdk/overview/) - Um enorme kit que nos oferece vários meios de ter acesso a recursos nativos do smartphone.
- [dayjs](https://day.js.org/) - Biblioteca com funções imutáveis que nos permite manipular datas.

#### Test
Para testar esse aplicativo, foi usado o [Jestjs](https://jestjs.io/) que é uma framework de teste mantida pelo **Facebook** e [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) que é um renderizador de componente de React sem precisar do DOM.

**Motivos para eu aderir o Jestjs**:
- Primeiro, ele foi criado e é mantido ativamente pelo Facebook para seus próprios aplicativos React Native.
- Em segundo lugar, ele vem pré-empacotado com a versão do React Native com a qual este aplicativo foi criado.
- Em terceiro lugar, o Jest é uma estrutura de testes "abrangente" e contém todo o conjunto de ferramentas de teste necessárias. Por exemplo, o Jest vem com uma biblioteca para verificar afirmações, um executor de teste para realmente executar testes e ferramentas para verificar a cobertura do código. Com outras soluções, é preciso escolher e montar componentes individuais de um conjunto de testes.

**Motivos para eu aderir o react-test-renderer**:

Eu uso geralmente o [Enzyme](https://enzymejs.github.io/enzyme/) nos meus projetos para testar componentes React. No entando, durante a fase de teste desse aplicativo, percebi a dificuldade que esse módulo tem para simular componentes em React Native, pois o Enzyme é dependente do DOM para fazer seus testes. Dessa forma, para usar o Enzyma em projetos de React Native é necessário uma variedade de configurações, algo que é inviável em um aplicativo tão simples quanto esse

Já o react-test-renderer, é uma ferramenta a qual pacote facilita a captura de uma captura instantânea da "árvore DOM" renderizada por um componente React DOM ou React Native sem usar um navegador ou jsdom. Portanto, ele não depende do DOM ou até mesmo do ambiente mobile nativo para ser usável.
