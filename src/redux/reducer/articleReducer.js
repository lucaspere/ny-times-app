const defaultState = {
   showModal: false,
   title: '',
   abstract: '',
   articles: [],
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
      default:
         return state
   }
}