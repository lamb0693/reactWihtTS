import React from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { StatusMessage } from './components/StatusMessage';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { Name, NameType } from './components/Name';
import { LoginState } from './state/LoginState';
import { User } from './state/User';

function App() {
  const clickHandler = (event:React.MouseEvent, id:number) => {
      console.log("Button clicked + id :" + id);
      console.log(event.pageX + ' ' + event.pageY + ' ' +  event.button)
  }

  let studentNames : NameType[] 
  studentNames = [ {first : '길동', last : '홍'}, {first : '꺽정', last : '임'}, {first : '청', last : '심'} ];

  return (
    <div>
      <Hello name="누구든지"/>
      <StatusMessage state='connecting'></StatusMessage>
      <Heading>PlaceHolder Text</Heading>  {/* 안의 내용이 props.children으로 들어간다*/}
      <Oscar>
          <Heading>Oscar - Heading 안의 내용</Heading>  {/* 안에 props.children으로 React.ReactNode가들어간다*/}
      </Oscar>
      <Greet name="Brook" messagecount={10} login={true}></Greet> 
      <Button clickHandler = {clickHandler}></Button>
      <Input value='test' changeHandler={(event : React.ChangeEvent<HTMLElement>)=>{
          console.log(event.target)
      }}></Input>
      <Container styles={ {border : '1px solid black', margin : '10px 20px 10px 20px', backgroundColor : 'beige'} }></Container>
      <Name names={studentNames}></Name>
      <LoginState></LoginState>
      <User></User>
    </div>
  );
}

export default App;
