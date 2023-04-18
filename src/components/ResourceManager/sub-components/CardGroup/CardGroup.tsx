import { useMemo, useState } from "react";
import Card from "../Card/Card";
import "./CardGroup.css"

const CardGroup = () => {
  const [cardsCount, setCardsCount] = useState(8);
  const cards = useMemo(() => {
    const ui = [];
    for (let index = 0; index < cardsCount; index++) {
      ui.push(<Card key={index}></Card>);
    }
    return ui;
  }, [cardsCount]);
  
  return (
    <div className="CardGroupWrapper">
      <div>Title 1</div>
      <div className="CardGroup">{cards}</div>
    </div>
  );
};

export default CardGroup;
