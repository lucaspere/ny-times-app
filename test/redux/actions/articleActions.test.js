import { setAbstract, openModal, closeModal, addTechonologiesArticles, addSciencesArticles } from '../../../src/redux/actions/articleActions';
import { act } from 'react-test-renderer';



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
   const fakeArticle = [
      {
         section: "technology",
         title: "Bill Gates Stepping Down From Microsoft’s Board",
         abstract: "Mr. Gates, who founded the company with Paul Allen four decades ago, will also step down from the board of Berkshire Hathaway.",
         url: "https://www.nytimes.com/2020/03/13/technology/bill-gates-microsoft-board.html",
         uri: "nyt://article/676ae86b-70b6-556b-b69a-77b69e8295c3",
         byline: "By Daisuke Wakabayashi and Steve Lohr",
         published_date: "2020-03-13T18:11:53-04:00",
         multimedia: []
      }
   ]
   const action = addTechonologiesArticles(fakeArticle)
   expect(action).toEqual({
      type: "ADD_TECHNOLOGIES_ARTICLES",
      technologiesArticles: [...fakeArticle]
   })
});

test("A configuração deve retornar um action object com os de A configuração deve retornar um action object com os de technologiesArticles fornecidos fornecidos", () => {
   const fakeArticle = [
      {
         section: "science",
         title: "Coronavirus, Testing Delays Push Europe-Russia Mars Mission to 2022",
         abstract: "“We cannot really cut corners,” said the head of the European Space Agency.",
         url: "https://www.nytimes.com/2020/03/12/science/mars-rover-coronavirus.html",
         uri: "nyt://article/309a6c2f-d713-5218-9d9b-d90cf3a3de5e",
         byline: "By Kenneth Chang",
         published_date: "2020-03-12T08:30:17-04:00",
         multimedia: []
      }
   ]
   const action = addSciencesArticles(fakeArticle)
   expect(action).toEqual({
      type: "ADD_SCIENCES_ARTICLES",
      sciencesArticles: [...fakeArticle]
   })
})