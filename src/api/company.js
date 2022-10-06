import axios from "axios";

import { BASE_URL, ENDPOINT } from "../constant";

//api call for response
export function resCompanyData() {
    return axios.post(`${BASE_URL}/${ENDPOINT.resCompany}`)
}
