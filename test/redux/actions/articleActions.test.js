import { setAbstract, openModal, closeModal, addTechonologiesArticles, addSciencesArticles } from '../../../src/redux/actions/articleActions';
import {technologyArticle, scienceArticle} from '../../fixture/articles';



test("A configuração deve retornar um action object com os valores de title, abstract e link fornecidos", () => {
   const action = setAbstract("Testando o ny-times app", "bora", 'www.o.com');
   expect(action).toEqual({
      type: "SET_ABSTRACT",
      title: "Testando o ny-times app",
      abstract: "bora",
      link: "www.o.com"
   });
});

test("A configuração deve retornar uma action objeto com o valor do showModal em true ", () => {
   const action = openModal();
   expect(action).toEqual({
      type: "OPEN_MODAL",
      showModal: true
   });
});

test("A configuração deve retornar uma action objeto com o valor do showModal em false", () => {
   const action = closeModal();
   expect(action).toEqual({
      type: "CLOSE_MODAL",
      showModal: false
   });
});

test("A configuração deve retornar um action object com os de technologiesArticles fornecidos", () => {

   const action = addTechonologiesArticles(technologyArticle)
   expect(action).toEqual({
      type: "ADD_TECHNOLOGIES_ARTICLES",
      technologiesArticles: [...technologyArticle]
   })
});

test("A configuração deve retornar um action object com os de A configuração deve retornar um action object com os de technologiesArticles fornecidos fornecidos", () => {

   const action = addSciencesArticles(scienceArticle)
   expect(action).toEqual({
      type: "ADD_SCIENCES_ARTICLES",
      sciencesArticles: [...scienceArticle]
   })
})