import axios from "axios";

const BASE_URL = "https://api.elderscrollslegends.io/v1";
const PAGE_SIZE = 20

// here I have used axios for fetching data from api, and I am getting it in batches of 20, once data has been fetched it toggles loading flag to false to remove loading icon from DOM.
export const fetchCards = async (currPage, name='', setLoading) => {
  // Replace the line below and perform API call to get cards
  const cardsEndPoint = BASE_URL + `/cards?page=${currPage}&pageSize=${PAGE_SIZE}`
  const cardsSearchByName = cardsEndPoint + `&name=${name}`
  const cards = name ? await axios.get(cardsSearchByName) : await axios.get(cardsEndPoint)
  setLoading(false)

  return cards
};
