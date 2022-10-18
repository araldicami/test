import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    return (
        <div>
           Deu certo o deploy :D
        </div>
    );
}

export default App;
