import axios from "axios";

export const shorten = (link) => {
  axios.get(`/shorten?url=${link}`)
  .then(response => {
    // checkResponse();
    if(!response.ok) return false;
    return response;
  }).catch(err => console.log(err));
}