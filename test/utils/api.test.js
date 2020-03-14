import { fetchTechnologyArticles, fetchScienceArticles } from '../../src/utils/api';

test('Deve entregar um array com tecnologiesArticles de tamanho maior que 0', (done) => {

   fetchTechnologyArticles(undefined, (erro, data) => {

      if(erro) {
         return done(erro)
      }

      expect(data.length).toBeGreaterThan(0);
      done();
   });
});

test('Deve entregar um array com sciencesArticles de tamanho maior que 0', (done) => {

   fetchScienceArticles(undefined, (erro, data) => {
      
      if(erro) {
         return done(erro)
      }

      expect(data.length).toBeGreaterThan(0);
      done();
   });
});