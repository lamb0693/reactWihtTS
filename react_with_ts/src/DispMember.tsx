import React from 'react';
import { useState } from 'react';
import { Member, Address } from './model/Member';

interface OwnProps {
    info : Member,
    changeAddress(address:Address):boolean
}

export const DispMember : React.FC<OwnProps> = (props) => {

    return (
        <div>
            {props.info.name}
        </div>
    )

}