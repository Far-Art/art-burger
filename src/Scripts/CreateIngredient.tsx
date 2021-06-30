import { stringify } from 'querystring';
import * as React from 'react';

const ingredientsList = document.getElementsByClassName("custom-ingredients");

let counter = 0;

interface Props {
    ingredient:string;
}

export const ingredientItem:React.FC<Props> = ({ingredient}) => {
    return <li id={"ingredient" + counter} className={ingredient}> content</li>
};
