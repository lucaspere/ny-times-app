const defaultState = {
   fetching: false,
   showModal: false,
   status: '',
   title: '',
   abstract: '',
   articles: [],
   error: {
      isError: false,
      errorMessage: ''
   }
}

export default (state = defaultState, action) => {
   switch (action.type) {
      case 'SET_ABSTRACT':
         return {
            ...state,
            title: action.title,
            abstract: action.abstract
         }
      case 'SET_MODAL':
         return {
            ...state,
            showModal: !state.showModal
         }
      case 'FETCHING_ARTICLES':
         return {
            ...state,
            fetching: true,
            status: 'fetching'
         }

      case 'REQUEST_FAILED':
         return {
            ...state,
            error: {
               isError: true,
               errorMessage: 'Falha ao buscar artigos'
            }
         }
      case 'ADD_ARTICLES':
         return {
            ...state,
            fetching: false,
            status: 'recebido',
            articles: action.articles.results
         }
      default:
         return state
   }
}