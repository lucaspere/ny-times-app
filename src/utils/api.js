import axios from 'axios';

export const fetchTechnologyArticles = async (setIsLoading, addArticles, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      const filteredArticles = articles.filter(article => article.section === 'technology')
      addArticles(filteredArticles)
      setIsLoading(false)
   } catch (e) {
      
   }

}
export const fetchScienceArticles = async (setIsLoading, addArticles, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      const filteredArticles = articles.filter(article => article.section === 'science')
      addArticles(filteredArticles)
      setIsLoading(false)
   } catch (e) {
      
   }

}