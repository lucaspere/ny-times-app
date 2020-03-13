import axios from 'axios';

const ADD_ARTICLES = 'ADD_ARTICLES';
const FETCHING_ARTICLES = 'FETCHING_ARTICLES';
const REQUEST_FAILED = "REQUEST_FAILED";
const SET_MODAL = "SET_MODAL";
const SET_ABSTRACT = "SET_ABSTRACT";

export const setAbstract = (title, abstract) => ({
   type: SET_ABSTRACT,
   title,
   abstract
})

export const setModal = () => ({
   type: SET_MODAL
})

const fetchingArtcles = () => ({
   type: FETCHING_ARTICLES,
});

const addArticles = ({ data }) => ({
   type: ADD_ARTICLES,
   articles: data
});

const requestFailed = (error) => ({
   type: REQUEST_FAILED,
   error
});

export const getArticles = (category, signal) => (
   dispatch => {

      dispatch(fetchingArtcles());

      axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=y2bDTjVTbs6yDi7IOyYl1DLjeKbQwT5c`, { signal })
         .then(response => dispatch(addArticles(response)),
            error => requestFailed({ isError: true, errorMessage: "Falha ao buscar arquivos" })
         )
   }
);