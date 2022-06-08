import axios from "axios";


//base url  to make the request to the movie db
const instance=axios.create({
        baseURL:"https://api.themoviedb.org/3"
})


//to use it
//instance.get("endpoint")


export default instance;