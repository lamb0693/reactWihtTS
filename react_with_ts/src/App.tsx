import React from 'react';
import './App.css';
import { Member, Address } from './model/Member';
import { DispMember } from './DispMember';
import { useState } from 'react';

// type Member = {
//   name : string,
//   age : number,
//   address : {
//       city : string,
//       dong : string
//   },
//   hobby : {title:string, years:number}[]
// }


let member1 : Member = {
  name : 'ldw',
  age : 56,
  address : {
      city : 'Busan',
      dong : 'jeonpo'
  },
  hobby : [
      {title:'English', years:30},
      {title:'Chinese', years:15},
      {title:'Japanese', years:20}
  ]
}



const App : React.FC = () => {

  const [member, SetMember] = useState<Member>(member1)

  const changeAddress = (address : Address) => {
    SetMember({...member, address:address})
    return true;
  }
  
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <DispMember info={member} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
