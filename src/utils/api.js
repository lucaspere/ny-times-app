import axios from 'axios';

export const fetchTechnologyArticles = async (setIsLoading, setArticles, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      setArticles(articles)
      setIsLoading(false)
   } catch (e) {
      
   }

}
export const fetchScienceArticles = async (setIsLoading, setArticles, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      setArticles(articles)
      setIsLoading(false)
   } catch (e) {
      
   }

}