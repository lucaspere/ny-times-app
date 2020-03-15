import articleReducer from '../../../src/redux/reducer/articleReducer';
import {technologyArticle, scienceArticle} from '../../fixture/articles';

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
      technologiesArticles: technologyArticle
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
      sciencesArticles: scienceArticle
   }

   const state = articleReducer(undefined, action);
   expect(state).toEqual({
      ...defaultState,
      sciencesArticles: action.sciencesArticles
   })
})