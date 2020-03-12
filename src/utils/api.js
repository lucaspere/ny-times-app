import axios from 'axios';

export const fetchArticles = async (category) => {

   try {

      const articlesJson = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`);
      
      const articles = JSON.parse(articlesJson);

      return articles;
      
   } catch(e) {
      throw new Error(e)
   }

}