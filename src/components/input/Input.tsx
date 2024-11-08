import React, {ChangeEvent, FC} from 'react';


type PropsType ={
    inputValue: string;
    onChange: (value: string) => void;
};

export const Input:FC<PropsType> = ({inputValue,onChange}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    };


    return (<input value={inputValue} onChange={onChangeHandler} />);
};

