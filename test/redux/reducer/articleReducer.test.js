import articleReducer from '../../../src/redux/reducer/articleReducer';

const defaultState = {
   showModal: false,
   title: '',
   link: '',
   abstract: '',
   technologiesArticles: [],
   sciencesArticles: []
}

test('Deve definir o default state', () => {
   const state = articleReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual(defaultState)
});

test('Deve adicionar o title, abstract e link', () => {
   const action = {
      type: 'SET_ABSTRACT',
      title: 'Teste em Jest',
      abstract: 'testando o articleReducer',
      link: 'www.lucas.com'
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      title: action.title,
      abstract: action.abstract,
      link: action.link
   })
});

test("Deve definir o showModal para false", () => {
   const action = {
      type: 'CLOSE_MODAL',
      showModal: false
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      showModal: action.showModal
   })
});

test("Deve definir o showModal para true", () => {
   const action = {
      type: 'OPEN_MODAL',
      showModal: true
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      showModal: action.showModal
   })
});

test("adicionar artigos na propriedade technologiesArticles", () => {
   const action = {
      type: 'ADD_TECHNOLOGIES_ARTICLES',
      technologiesArticles: [{
         section: "technology",
         title: "Bill Gates Stepping Down From Microsoft’s Board",
         abstract: "Mr. Gates, who founded the company with Paul Allen four decades ago, will also step down from the board of Berkshire Hathaway.",
         url: "https://www.nytimes.com/2020/03/13/technology/bill-gates-microsoft-board.html",
         uri: "nyt://article/676ae86b-70b6-556b-b69a-77b69e8295c3",
         byline: "By Daisuke Wakabayashi and Steve Lohr",
         published_date: "2020-03-13T18:11:53-04:00",
         multimedia: []
      }]
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      technologiesArticles: action.technologiesArticles
   })
});

test("adicionar artigos na propriedade sciencesArticles", () => {
   const action = {
      type: 'ADD_SCIENCES_ARTICLES',
      sciencesArticles: [{
         section: "science",
         title: "Coronavirus, Testing Delays Push Europe-Russia Mars Mission to 2022",
         abstract: "“We cannot really cut corners,” said the head of the European Space Agency.",
         url: "https://www.nytimes.com/2020/03/12/science/mars-rover-coronavirus.html",
         uri: "nyt://article/309a6c2f-d713-5218-9d9b-d90cf3a3de5e",
         byline: "By Kenneth Chang",
         published_date: "2020-03-12T08:30:17-04:00",
         multimedia: []
      }]
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      sciencesArticles: action.sciencesArticles
   })
})