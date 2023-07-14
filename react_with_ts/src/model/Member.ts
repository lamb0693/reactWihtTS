import React from 'react';

export type Address = {
    city : string,
    dong : string 
}

export type Member = {
    name : string,
    age : number,
    address : Address,
    hobby : {title:string, years:number}[]
}