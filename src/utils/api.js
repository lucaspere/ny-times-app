import axios from 'axios';

export const fetchTechnologyArticles = async (signal, callback) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      const filteredArticles = articles.filter(article => article.section === 'technology')

      callback(undefined, filteredArticles)
   } catch (e) {
      callback(e, undefined)
   }

}
export const fetchScienceArticles = async (signal, callback) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      const filteredArticles = articles.filter(article => article.section === 'science')

      callback(undefined, filteredArticles)
   } catch (e) {
      callback(e, undefined)
   }

}