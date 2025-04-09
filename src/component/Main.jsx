import { useState } from 'react'




function Main() {


    const listObject = [
        "Chiave Inglese",
        "Cacciavite a Stella",
        "Cacciavite Piatto",
        "Pinze",
        "Martello",
        "Set di Chiavi Fisse",
        "Chiave a Cricchetto",
        "Bussole"
    ];
    const [count, setCount] = useState(0)

    return (
        <> <h1>lista degli ogetti </h1>
            <ul>
                {listObject.map(item => (
                    <li>{item}</li>


                ))}

            </ul>





        </>
    )
}

export default Main