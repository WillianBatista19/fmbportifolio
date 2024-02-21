import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import Logo2 from '../../../assets/Logo2.png';

function NavBar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileButtonClick = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav className="bg-black">

      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>

        {/* Primeira Logo (2/5 do espaço) */}
        <div className='flex items-center w-2/5'>
          <a href="#" className='flex-shrink-0'>
            <img className='w-10 md:w-12' src={Logo} alt="Logo"/>
          </a>
        </div>

        {/* Segunda Logo (1/5 do espaço) */}
        <div className="w-1/5 flex items-center justify-center">
          <img className="w-16 md:w-20 relative -bottom-10" src={Logo2} alt="Logo" />
        </div>

        {/* Menu do Canto Direito (2/5 do espaço) */}
        <div className='hidden lg:flex justify-end items-center w-2/5'>
          <div className='ml-10 flex items-baseline space-x-4 font-staubach'>
            <a href="#" className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm lg:text-lg font-medium'>Home</a>
            <a href="#" className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm lg:text-lg font-medium'>Sobre</a>
            <a href="#" className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm lg:text-lg font-medium'>Projetos</a>
            <a href="#" className='hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm lg:text-lg font-medium'>Contato</a>
          </div>
        </div>

        {/* Botão do Menu para Telas Pequenas (Ocupa 2/5 do espaço) */}
        <div className='flex justify-end lg:hidden w-2/5'>
          <button
            id='botao'
            type='button'
            onClick={handleMobileButtonClick}
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-300 ease-in-out'
            aria-label="Menu"
            aria-expanded={isMobileMenuVisible ? "true" : "false"}
          >
            <svg className='h-6 w-6 md:w-8 md:h-8' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>

      </div>

      {/* Menu para Telas Pequenas (Oculto por padrão) */}
      <div className={`lg:hidden ${isMobileMenuVisible ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pd-3 sm:px-3 font-staubach'>
          <a href="#" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base md:text-2xl font-medium transition duration-300 ease-in-out'>Home</a>
          <a href="#" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base md:text-2xl font-medium transition duration-300 ease-in-out'>Sobre</a>
          <a href="#" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base md:text-2xl font-medium transition duration-300 ease-in-out'>Projetos</a>
          <a href="#" className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base md:text-2xl font-medium transition duration-300 ease-in-out'>Contato</a>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;