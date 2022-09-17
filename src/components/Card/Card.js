/* eslint-disable jsx-a11y/alt-text */
import "./Card.css";

export function Card(cardData) {
  // pretty simple card component with a grid style representation for everything except Image. Images had a variable width and height in this API so I decided to leave it out of grid so that I can easily manipulate it using css if needed.
  return (
    <div key={`Card-${cardData.id}`} className={`Card`}>
      <div className="Image">
        <img src={cardData.imageUrl} height="80%"/>
      </div>
      <div className="ItemGrid">
        <div className="Name">
          {cardData?.name}
        </div>
        <div className="Text">
          {cardData?.text}
        </div>
        <div className="Set">
          Set: {cardData?.set?.name}
        </div>
        <div className="Type">
          Type: {cardData?.type}
        </div>
      </div>
    </div>
  )
}