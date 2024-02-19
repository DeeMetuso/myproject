import { useState } from 'react';
export default function Form(){
    const [name, setName] = useState({ firstName: "", contact: "", email: "", message:""});


    return (
        <div>
            <form>
                <input
                    onChange={(e) => setName({ ...name, firstName: e.target.value})}
                    type = "text"
                    value = {name.firstName}
                />
                <input
                    onChange={(e) => setName({...name, contact: e.target.value})}
                    type='number'
                    value={name.contact}
                />
                <input
                    onChange={(e) => setName({...name, email: e.target.value})}
                    type='email'
                    value={name.email}
                />
                <input
                    onChange={(e) => setName({...name, message: e.target.value})}
                    type = "text"
                    value={name.message}
                    />
            </form>
        </div>
    );
    }
