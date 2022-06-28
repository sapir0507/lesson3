/* eslint-disable no-unused-vars */
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Containter from 'react-bootstrap/Container';
import Demo2LifeCycleComp from './projects/02/template';
import Name from './projects/template';
import Demo1LifeCycleComp from './projects/01/01_parent';


function App() {
  return (
    <Containter>
      <h2 className='my-4'>ex1</h2>
      <Demo1LifeCycleComp></Demo1LifeCycleComp>
      <hr />
      <h2 className='my-4'>ex2</h2>
      <Demo2LifeCycleComp></Demo2LifeCycleComp>
    </Containter>
  );
}

export default App;
