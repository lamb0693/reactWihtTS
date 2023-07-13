import React from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { StatusMessage } from './components/StatusMessage';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  return (
    <div>
      <Hello name="누구든지"/>
      <StatusMessage state='connecting'></StatusMessage>
      <Heading>PlaceHolder Text</Heading>  {/* 안의 내용이 props.children으로 들어간다*/}
      <Oscar>
          <Heading>Oscar - Heading 안의 내용</Heading>  {/* 안에 props.children으로 React.ReactNode가들어간다*/}
      </Oscar>
      <Greet name="Brook" messagecount={10} login={true}></Greet> 
    </div>
  );
}

export default App;
