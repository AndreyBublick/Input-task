import React, {FC} from 'react';

type PropsType = {
    title: string;
    onClick?: () => void;

};

export const Button:FC<PropsType> = ({onClick,title}) => {



    return (<button onClick={onClick}>{title}</button>);
};

