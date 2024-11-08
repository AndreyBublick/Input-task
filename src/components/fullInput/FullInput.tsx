import React, {ChangeEvent, FC, useState} from 'react';
import {Button} from "../button/Button";
import {Input} from "../input/Input";

type PropsType = {
    onClick:(message:string)=>void,
};

export const FullInput:FC<PropsType> = ({onClick}) => {

    const [inputValue, setInputValue] = useState('');



    const onClickButtonHandler = ()=>{
        if(inputValue){
            onClick(inputValue);
            setInputValue('');

        }
    };



    return (
        <div>
           {/* <input value={inputValue} onChange={onChangeHandler} />*/}
            <Input inputValue={inputValue} onChange={setInputValue} />
            <Button title={'+'} onClick={ onClickButtonHandler }/>
        </div>
    );
};

