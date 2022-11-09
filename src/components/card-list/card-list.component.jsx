
import './card-list.styles.css'
import CardContainer from "../../components/card-container/card-container.component";
import { forwardRef } from 'react';

// as props has just one value, destructuring can be placed inside the parameters
// functions has to be inside parenthesis - classes between curly braces
const CardList = ({ monsters }) => (

    // must have only one level - cant have nested divs
    // implict return - we dont have anything else to return
    <div className="card-list" key='card-list-monster'>
        {monsters.map((monster) => {
            return (
                <CardContainer monster = {monster} key={monster.id} />
            )
    })}
    </div>

);

export default CardList