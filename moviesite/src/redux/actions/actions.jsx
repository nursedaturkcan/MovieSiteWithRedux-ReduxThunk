import ActionTypes from "../../constants/actionTypes";
import thunk from "redux-thunk";
import axios from "axios";
import options from "../../constants/constants";
axios.defaults.baseURL="https://api.themoviedb.org/3"

// bütün atılan isteklerin başına baseUrl eklenir.

// !sekndron aksiyon
// aksiyon objesi oluşturan bir fonksiyon.
export const setLoading=(payload)=>({
    type:ActionTypes.SET_LOADING,
    payload:payload
})

// populer filmler verisini çekip reducer'a aktaran func.

// !asenkron (thunk) aksiyonu
export const getMovies= ()=> {
    return async function(dispatch){
        // veri çekme işlemleri
const res = await axios.get("/movie/popular?language=tr",options)
        // verinin reducer'a aktarılması
        dispatch({
            type:ActionTypes.SET_MOVIES,
            payload:res.data
        })
    }
}


// !asenkron (thunk) aksiyonu
// kategoriler verisini çekip reducer'a aktarma

export const getGenres=()=>(dispatch)=>{
//kategroi verilerini çekme url e tr parametresi ekleme
axios.get("/genre/movie/list?language=tr",options)
.then((res)=>dispatch({
    type:ActionTypes.SET_GENRES,
    payload:res.data.genres
}))
.catch((err)=>console.log("filmler kategorisi çekmede hata action.jsx sayfasında",err))
}
   
