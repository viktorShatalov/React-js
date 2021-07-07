import React, { useEffect } from 'react';
import './App.css';


const App2 = () => {
    useEffect(() => {
        const url = 'https://agile-garden-50413.herokuapp.com/api/';
        const data = {
            "password": "InsanePassword",
            "username": "cool_user"
        };
        try {
            fetch(`${url}token/login/`, {
                method: 'POST',
                // credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data,

            }).then((res) => {
                if (res.ok === true) {
                    console.log("ok", res)
                } else {
                    console.log("err", res)
                }

            })

        } catch (error) {
            console.error('Ошибка:', error);
        }

    }, [])


    return <div className='app-wrapper' >

    </div >

}


export default App2