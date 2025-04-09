import { useState } from 'react'




function Main() {


    const [listObject, setListObject] = useState([
        "Chiave Inglese",
        "Cacciavite a Stella",
        "Cacciavite Piatto",
        "Pinze",
        "Martello",
        "Set di Chiavi Fisse",
        "Chiave a Cricchetto",
        "Bussole"
    ]);

    const [object, setObject] = useState('')

    const addObject = e => {
        e.preventDefault()
        const reloadList = [...listObject, object]
        setListObject(reloadList)
    }




    return (
        <> <h1>lista degli ogetti </h1>
            <ul>
                {listObject.map((item, i) => (
                    <li key={i}>{item}</li>


                ))}

            </ul>
            <form onSubmit={addObject}>
                <input type="text" onChange={e => setObject(e.target.value)} />

                <button> invia</button>

            </form>




        </>
    )
}

export default Main