import axios from 'axios';

export const fetchArticles = async (category, setArticles,setIsLoading, signal) => {

   try {

      const { data: { results: articles } } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal });

      setArticles(articles)
      setIsLoading(false)
   } catch (e) {
      
   }

}