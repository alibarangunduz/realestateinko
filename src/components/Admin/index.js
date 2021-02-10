import React, { useState } from 'react'
import SimpleSelect from './simpleselect';
import BasicTextFields from './inputs';
import MultilineTextFields from './multiLine';
import InputAdornments from './amount';
import CurrencyInput from 'react-currency-input';
import SelectForProperty from './selectForProperty';
import {AdminContainer}  from './AdminElements';
const Admin = () => {

    const [emlakTipi, setEmlakTipi] = useState('');
    const [satilik, setSatilik] = useState('');
    const [daire, setDaire] = useState('');
    const [title, setTitle] = useState('');
    const [explanation, setExplanation] = useState('');
    const [amount, setAmount] = useState('');
    const [m2, setM2] = useState('');
    const [m2Net, setM2Net] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
  
    return (
        <AdminContainer>
            <h1>Kategori Secimi</h1>
            <SimpleSelect 
                emlakTipi={emlakTipi} 
                setEmlakTipi={setEmlakTipi}
                satilik={satilik}
                setSatilik={setSatilik}
                setDaire={setDaire}
                daire={daire}
            />
            <h1>Ilan Detaylari</h1>
            <BasicTextFields 
                title={title}
                setTitle={setTitle} 
            />
            <MultilineTextFields 
                explanation={explanation}
                setExplanation={setExplanation}
            />
            <InputAdornments 
            amount={amount}
            setAmount={setAmount}
            header='Fiyat'
            subtitle='TL'
            id='amount'
            />
            <InputAdornments 
            amount={m2}
            setAmount={setM2}
            header='m2 Brüt'
            id='m2'
            />
            <InputAdornments 
            amount={m2Net}
            setAmount={setM2Net}
            header='m2 Net'
            id='m2Net'
            />
            <SelectForProperty 
            id='roomNumber'
            labelId='roomNumberLabelId'
            label='roomNumberLabel'
            roomNumber={roomNumber}
            setRoomNumber={setRoomNumber}
            labelName='Oda Numarası'
            
            />
            
        </AdminContainer>
    )
}

export default Admin
