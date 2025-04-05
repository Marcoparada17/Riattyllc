import React from 'react';
import { Button } from 'react-bootstrap';

const Gracias = () => {
  return (
    <>

      <div className="text-center text-font degraded-background2"style={{ 
        minHeight: '75vh', // Esto asegura que el div abarque toda la altura de la ventana
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        }}>
        <h1 className='mt-5 px-auto '>Gracias! hemos recibido la informacion. </h1>
        <h3 className='mb-5 px-auto'>Pronto lo contactaran los transportistas para que usted escoja la mejor opcion. </h3>
        <Button className="custom-color-btn font-f mb-3 w-50" style={{  height: 'auto'}}>Volver a la pagina principal</Button>
      </div>
    </>
  );
}

export default Gracias;