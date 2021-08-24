import Card from './Card.js';

function Cards(props) {
    return (
        <div className="cards">
            <Card number="1"/>
            <Card number="2"/>
            <Card number="3"/>
        </div>
    );
}

export default Cards;