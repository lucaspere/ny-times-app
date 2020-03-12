const defaultState = {
   section: '',
   subsection: '',
   title: '',
   byline: '',
   multimedia: []
}

export default (state = defaultState, action) => {
   switch(action.type) {
      case 'oi':
         return 'olá'
   }
}