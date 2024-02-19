import Fruit from "./Fruit.jsx"

function Fruits(){
    // const fruits = ['Apple', 'Orange', 'Banana', 'Peach'];
    const fruits = [
        {
            name: 'Apple',
            price: 10,
            emoji: "🍎"
        },
        {
            name: 'Orange',
            price: 7,
            emoji: "🍊"
        },
        {
            name: 'Banana',
            price: 9,
            emoji: "🍌"
        },
        {
            name: 'Peach',
            price: 10,
            emoji: "🍑"
        }
    ];
    return <div>
        <ul>
            {fruits.map((fruit) => (
                <Fruit
                key={fruit.name}
                emoji={fruit.emoji} name={fruit.name} price={fruit.price}   />
            ))}
        </ul>
    </div>
}

export default Fruits;