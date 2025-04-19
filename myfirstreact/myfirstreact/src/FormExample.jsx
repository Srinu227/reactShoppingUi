import React, { useState } from 'react'





const FormExample = () => {



    const [userName, setUserName] = useState('');
    const [newuserDetails, setNewUserDetails] = useState('');

    const getUserName = (event) => {
        setUserName(event.target.value);
    }

    const userDetails = (event) => {
        event.preventDefault();
        setNewUserDetails(userName);
    }
    return (
        <section className='formSection'>
            <div className='inputDiv'>
                <form onSubmit={userDetails}>
                    <h1> Hello,{newuserDetails}</h1>

                    <input type="text" placeholder='Type Your Name' onChange={getUserName} />
                    <br />
                    <button className='submitButton' onClick={userDetails}> Submit</button>
                </form>

            </div>
        </section>

    )
}

export default FormExample