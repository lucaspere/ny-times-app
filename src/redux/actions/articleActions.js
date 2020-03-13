const ADD_ARTICLES = 'ADD_ARTICLES';
const FETCHING_ARTICLES = 'FETCHING_ARTICLES';
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
