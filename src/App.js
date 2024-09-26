import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Counter Application</h1>
            <div className="counter">
                <button className="btn" onClick={() => setCount(count - 1)}>-</button>
                <input type="number" value={count} readOnly />
                <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default App;
