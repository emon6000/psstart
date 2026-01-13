import React,{useState} from 'react';

const UseStateHandleForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UseStateHandleForm;