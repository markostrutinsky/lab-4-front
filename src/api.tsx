import axios from "axios"
import { Director, MovieSearch } from "./types"

interface FetchAllDirectorsResponse {
    data: Director[];
}

// export const fetchDirectors = async () => {
//     try {
//         const response = await fetch("http://localhost:8080/api/directors");
//         const data: Director[] = await response.json();
//     } catch (error) {

//     }
// }
// export const searchDirector = async (query: string) => {
//     try {
//         const data = await axios.get<SearchResponse>(
//             `http://localhost:8080/api/movies/by-director?firstName=Christopher&lastName=Nolan`
//         )
//     } catch(error) {
//         if(axios.isAxiosError(error)) {
//             console.log('error message:', error.message)
//             return error.message;
//         } else {
//             console.log('unexpected error:', error)
//             return error;
//         }
//     }
// }


export default {}