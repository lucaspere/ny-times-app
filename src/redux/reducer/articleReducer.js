const defaultState = {
   showModal: false,
   title: '',
   link: '',
   abstract: '',
   technologiesArticles: [],
   sciencesArticles: []
}

export default (state = defaultState, action) => {
   switch (action.type) {
      case 'SET_ABSTRACT':
         return {
            ...state,
            title: action.title,
            abstract: action.abstract,
            link: action.link
         }
      case 'CLOSE_MODAL':
         return {
            ...state,
            showModal: action.showModal
         }
      case 'OPEN_MODAL':
         return {
            ...state,
            showModal: action.showModal
         }
      case 'ADD_TECHNOLOGIES_ARTICLES':
         return {
            ...state,
            technologiesArticles: action.technologiesArticles
         }
      case 'ADD_SCIENCES_ARTICLES':
         return {
            ...state,
            sciencesArticles: action.sciencesArticles
         }
      default:
         return state
   }
}