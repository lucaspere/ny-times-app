import axios from 'axios';

export const fetchTechnologyArticles = async (setIsLoading, setArticles, setError, category, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      if(articles.length === 0) {
         setError({
            isError: true,
            errorMessage: "Falha ao buscar artigos"
         })
      }

      setArticles(articles)
      setIsLoading(false)
   } catch (e) {
      
   }

}
export const fetchScienceArticles = async (setIsLoading, setArticles, setError, category, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      if(articles.length === 0) {
         setError({
            isError: true,
            errorMessage: "Falha ao buscar artigos"
         })
      }

      setArticles(articles)
      setIsLoading(false)
   } catch (e) {
      
   }

}