import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Card } from "../Card";
import { fetchCards } from "../../api/api";

export function App() {

  const listInnerRef = useRef() // ref used to get references from scrollBar
  const [currPage, setCurrPage] = useState(1)
  const [prevPage, setPrevPage] = useState(0)
  const [cards, setCards] = useState([]) 
  const [lastPage, setLastPage] = useState(false) // toggle this to true if we do not recieve any more data from api i.e. reached the last page
  const [searchByNameText, setSearchByNameText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch the cards using the API endpoint
    const fetchPages = async () => {
      const response = await fetchCards(currPage, searchByNameText, setLoading)
      if (!response.data.cards.length) {
        setLastPage(true)
        return
      }
      setPrevPage(currPage)
      setCards([...cards, ...response.data.cards])
    }
    // only load new data if if prevPage and currPage are not same, and we have not reached last page, or user is trying to search something
    if ((!lastPage && prevPage !== currPage) || (searchByNameText !== '' && prevPage !== currPage)) {
      setLoading(true)
      fetchPages()
    }
  }, [currPage, cards, prevPage, lastPage, searchByNameText])

  const onScroll = () => {
    // on scroll function checks if we reached end of current scroll length, if so we ask api to give us next set of 20 cards to render
    if (listInnerRef.current) {
      const  { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if  (Math.floor(scrollTop + clientHeight) === scrollHeight || Math.ceil(scrollTop + clientHeight) === scrollHeight) {
        setCurrPage(currPage + 1)
      }
    }
  }
  

  return (
    <div className="App">
      <div className="Title">
        <h1>
          Welcome to the World of Elder Scrolls
        </h1>
      </div>
      <div className="SearchBar">
        <input 
          style={{ width: "50%", height: "40px" }} 
          placeholder="Search" 
          onChange={({ target }) => {
            // if a user inputs anything then we will ask api to search by name in a paginated fashion
            setSearchByNameText(target.value)
            setCurrPage(1)
            setPrevPage(0)
            setCards([])
          }}
        />
      </div>
      {cards.length > 0 && (
        <div 
          className="App-cardlist"
          role="list" 
          onScroll={onScroll}
          ref={listInnerRef}
        >
          {cards && cards.map(card => Card(card))}
        </div>
        )
      }
      {// loading icon credits: https://loading.io/
      loading && (
        <div className="spinnerDiv">
          <div className="loadingio-spinner-disk-f3bsjgekgog"><div className="ldio-c6ip4344bwh">
          <div><div></div><div></div></div>
          </div></div>
        </div>
        )
      }
    </div>
  );
}
