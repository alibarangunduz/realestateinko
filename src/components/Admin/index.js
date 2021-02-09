import React, { useState } from 'react'
import SimpleSelect from './simpleselect';
import BasicTextFields from './inputs';
import MultilineTextFields from './multiLine';
const Admin = () => {

    const [emlakTipi, setEmlakTipi] = useState('');
    const [satilik, setSatilik] = useState('');
    const [daire, setDaire] = useState('');
    const [title, setTitle] = useState('');
    const [explanation, setExplanation] = useState('');

    console.log(emlakTipi)
    console.log(satilik)
    console.log(daire)
    console.log(title)
    return (
        <div>
            <h1>Kategori Secimi</h1>
            <SimpleSelect 
                emlakTipi={emlakTipi} 
                setEmlakTipi={setEmlakTipi}
                satilik={satilik}
                setSatilik={setSatilik}
                setDaire={setDaire}
                daire={daire}/>
            <h1>Ilan Detaylari</h1>
            <BasicTextFields 
                title={title}
                setTitle={setTitle} 
            />
            <MultilineTextFields 
                explanation={explanation}
                setExplanation={setExplanation}
            />

        </div>
    )
}

export default Admin
