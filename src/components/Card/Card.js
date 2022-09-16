/* eslint-disable jsx-a11y/alt-text */
import "./Card.css";

export function Card(cardData) {

  return (
    <div key={`Card-${cardData.id}`} className={`Card`}>
      <div className="Image">
        <img src={cardData.imageUrl} height="610px"/>
      </div>
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
  )
}

/**
 * 
 * { attributes: ['Willpower']
    collectible: true
    cost: 2
    health: 2
    id: "326d90bb4cfce93a5502b38f74e1f6e23c271d01"
    imageUrl: "https://images.elderscrollslegends.io/cs/priest_of_the_moons.png"
    keywords: ['Prophecy']
    name: "Priest of the Moons"
    power: 2
    rarity: "Common"
    set: {id: 'cs', name: 'Core Set', _self: 'https://api.elderscrollslegends.io/v1/sets/cs'}
    soulSummon: 50
    soulTrap: 5
    subtypes: ['Khajiit']
    text: "Prophecy. Summon: Gain 2 health."
    type: "Creature"
    unique: false
  }
 */