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
      case 'oi':
         return 'olá'
   }
}