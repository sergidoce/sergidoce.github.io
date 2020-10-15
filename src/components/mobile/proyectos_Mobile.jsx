import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card_Mobile'



function Proyectos() {
  return (

    <div>
      <div className = 'bg-blue-900 py-10'>
        <div className = 'container mx-auto h-full flex px-8 items-center py-10'>
            <div className = 'px-5'>
                <h1 className='text-shadow text-white font-rubikMonoOne text-3xl'>MIS PROYECTOS</h1>
                <div className = 'mt-20'>
                    <h2 className='text-white  font-rubikMonoOne text-lg'>PROYECTOS PERSONALES</h2>
                    <div className = 'mt-10 flex flex-wrap justify-center'>
                        
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/LI-Logo.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>

                    </div>
                </div>

                <div className = 'mt-20'>
                    <h2 className='text-white font-rubikMonoOne text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>PROYECTOS UNIVERSITARIOS</h2>
                    <div className = 'mt-10 flex flex-wrap justify-center'>
                        
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>
                      <Card  title = "Proyecto 1" definition = "Este es el proyecto numero 1" image = "/images/GitHub_Logo_White.png"></Card>

                    </div>
                </div>
            </div>

            

        </div>
        <div className='flex justify-center pt-10'>  
          <h3 className='font-rubikMonoOne text-sm text-white'>Contacto</h3>
        </div>
        <div className='flex justify-center pt-5'>
          <img src="/images/down-arrow-white.png" className='h-10 w-10' alt=""/>
        </div>
      </div>
       
    </div>
  );
}

export default Proyectos;