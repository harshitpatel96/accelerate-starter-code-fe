import axios from "axios";

const BASE_URL = "https://api.elderscrollslegends.io/v1";
const PAGE_SIZE = 20

export const fetchCards = async (currPage) => {
  // Replace the line below and perform API call to get cards
  console.log('currPage: ', currPage)
  const cardsEndPoint = BASE_URL + `/cards?page=${currPage}?pageSize=20`
  const cards = await axios.get(cardsEndPoint)

  return cards
};
