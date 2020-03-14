const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const SET_ABSTRACT = "SET_ABSTRACT";
const ADD_TECHNOLOGIES_ARTICLES = "ADD_TECHNOLOGIES_ARTICLES";
const ADD_SCIENCES_ARTICLES = "ADD_SCIENCES_ARTICLES";

export const setAbstract = (title, abstract, link) => ({
   type: SET_ABSTRACT,
   title,
   abstract,
   link
})

export const openModal = () => ({
   type: OPEN_MODAL,
   showModal: true
})

export const closeModal = () => ({
   type: CLOSE_MODAL,
   showModal: false
});

export const addTechonologiesArticles = (technologiesArticles = []) => ({
   type: ADD_TECHNOLOGIES_ARTICLES,
   technologiesArticles
});

export const addSciencesArticles = (sciencesArticles = []) => ({
   type: ADD_SCIENCES_ARTICLES,
   sciencesArticles
})
