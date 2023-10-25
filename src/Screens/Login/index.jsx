import React, { useState } from 'react';
export default function Login(){
    const [email, setEmail] = useState("");

    function changeEmail(e) {
        setEmail(e.target.value)
    }
    return(
        <div>
            <div style={{display:"flex"}}>
                <div style={{width:160}}>
                    <input type='text'value={email} onChange={changeEmail}></input>
                </div>
                <div>
                    baita
                </div>
            </div>
        </div>
    )
}