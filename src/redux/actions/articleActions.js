import axios from 'axios';

const ADD_ARTICLES = 'ADD_ARTICLES';
const FETCHING_ARTICLES = 'FETCHING_ARTICLES';
const REQUEST_FAILED = "REQUEST_FAILED";

const fetchingArtcles = () => ({
   type: FETCHING_ARTICLES,
   fetching: true,
   status: 'fetching'
});

const addArticles = ({ data }) => ({
   type: ADD_ARTICLES,
   articles: data
});

const requestFailed = (error) => ({
   type: REQUEST_FAILED,
   error
});

const getArticles = (signal) => (
   dispatch => {

      dispatch(fetchingArtcles());

      axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal })
         .then(response => response.json())
         .then(response => addArticles(response))
         .catch(error => requestFailed({ isError: true, errorMessage: "Falha ao buscar arquivos" }))
   }
);