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
    const [clicked, SetClicked] = useState(null)

    const addObject = e => {
        e.preventDefault()
        const reloadList = [...listObject, object]
        setListObject(reloadList)

    }


    function deleteItem(i) {
        console.log('HAI ELIMINATO L elemento ')
        const reloadList = listObject.filter((_, index) => index !== i);

        setListObject(reloadList)
    }






    return (
        <> <h1>lista degli oggetti </h1>
            <div className='container'>
                <ul>
                    {listObject.map((item, i) => (
                        <div className='flex'><li key={i}>{item} </li> <button onClick={() => deleteItem(i)}><i class="fa-solid fa-trash"></i></button></div>
                    ))}

                </ul>
            </div>
            <form onSubmit={addObject}>
                <input type="text" onChange={e => setObject(e.target.value)} />

                <button> invia</button>

            </form>




        </>
    )
}

export default Main