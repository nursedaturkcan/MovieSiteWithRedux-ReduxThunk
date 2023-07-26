import ActionTypes from "../../constants/actionTypes";


const initialState={
populerMovies:[],
genres:[],
isLoading:true,
}





const movieReducer=(state=initialState,action)=>{
switch (action.type) {
    case ActionTypes.SET_MOVIES:
       
       return {
        ...state,
        populerMovies:action.payload.results,
        isLoading:false,
       }
     case ActionTypes.SET_LOADING:
      return{
         ...state,
         isLoading:action.payload
      }  

   case ActionTypes.SET_GENRES:
      return{
         ...state,
         genres:action.payload,
        
      }
        

    default:
       return state;
}
}
export default movieReducer;