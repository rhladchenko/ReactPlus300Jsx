import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
    return 'Click on me!'
}

const App = () => {
    
    return (
        <div>
            <label htmlFor='name' className='label'>
                Enter name:
            </label>
            <input type='text' id='name' />
            <button style={{ background: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
