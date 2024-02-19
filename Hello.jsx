
const name = 'Rob';

function Hello({ person }){
    
    return <div>
                <h1>{person.message} {person.name} {person.emoji} </h1>;
                <h2>Hello from a component </h2>;
            </div>
}

export default Hello;