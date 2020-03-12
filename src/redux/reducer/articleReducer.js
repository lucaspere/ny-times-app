const defaultState = {
   fetching: false,
   status: '',
   articles: [],
   error: {
      isError: false,
      errorMessage: ''
   }
}

export default (state = defaultState, action) => {
   switch(action.type) {
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
            articles: action.articles
         }
   }
}