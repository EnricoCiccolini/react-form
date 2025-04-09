import { useState } from 'react'





function AppMain() {


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
        if (object === '') return
        const reloadList = [...listObject, object]
        setListObject(reloadList)
        setObject('')


    }


    function deleteItem(i) {
        console.log('HAI ELIMINATO L elemento ')
        const reloadList = listObject.filter((_, index) => index !== i);
        setListObject(reloadList)
    }

    function changeItem(i) {
        console.log('cambiato L elemento ')
        const reloadList = []
        const cangeobject = prompt('inserisci il valore da cambiare ')
        if (cangeobject === '') return



        listObject.map((ele, ind) => (
            ind === i ? reloadList.push(cangeobject) : reloadList.push(ele)
        ))




        setListObject(reloadList)
    }






    return (
        <> <h1>lista degli oggetti </h1>
            <div className='container'>
                <ul>
                    {listObject.map((item, i) => (
                        <div key={i} className='flex'>
                            <li>{item} </li>
                            <div>
                                <button onClick={() => deleteItem(i)}><i className="fa-solid fa-trash"></i></button>
                                <button onClick={() => changeItem(i)}><i className="fa-solid fa-pen"></i> </button>
                            </div>

                        </div>
                    ))}

                </ul>
            </div>

            <form onSubmit={addObject}>
                <input type="text" value={object} onChange={e => setObject(e.target.value)} />

                <button> invia</button>

            </form>




        </>
    )
}

export default AppMain