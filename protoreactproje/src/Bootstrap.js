import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Bootstrap = () => {
  return (
    <>
      <h3>Bootsrap Componets</h3>
      <Button>Button</Button>
      <Button variant='success'>Button</Button>

      <Tabs defaultActiveKey='home' id='uncontrolled-tab-example' className='mb-3'>
        <Tab eventKey='home' title='Home'></Tab>
        <div>home</div>
        <Tab eventKey='profile' title='Profile'></Tab>
        <div>profile</div>
        <Tab eventKey='contact' title='Contact' disabled></Tab>
        <div>Contact</div>
      </Tabs>
    </>
  );
};

export default Bootstrap;
