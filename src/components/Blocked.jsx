import React from 'react';
import { Button } from 'react-bootstrap';

const Blocked = () => {
  return (
    <div className="d-block d-md-none text-center my-3 px-5">
      <h1 className='text-font text-justify'>LOS TRANSPORTISTAS COMPITEN,<span className='rt-200'>ELIGE EL MEJOR</span> PRECIO Y SERVICIO.</h1>
        <div className="flex-column align-items-center">
            <Button className=" bg-700 border-0 font-f my-4" style={{ minWidth: '264.16px', height: '39px'}}>COTIZAR AHORA</Button>
            <Button variant="outline-secondary custom-color-btn" className="font-f my-2" style={{ minWidth: '264.16px', height: '39px'}}>CONTACTAR AL <span className='font-f fw-bold t-200'>(1) 870-846-0106</span></Button>
         </div>       
    </div>
  );
};

export default Blocked;
