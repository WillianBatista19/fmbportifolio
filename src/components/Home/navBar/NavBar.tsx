import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../../assets/Logo.png';
import Logo2 from '../../../assets/Logo2.png';

function NavBar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileButtonClick = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav className="bg-black">

      <ul className='flex items-center justify-between h-16 max-w-full px-4 mx-auto xl:w-11/12 sm:px-6 lg:px-8'>

        {/* Primeira Logo (2/5 do espaço) */}
        <div className='flex items-center w-2/5'>
          <Link to="/" spy={true} smooth={true} offset={-21} duration={500} className='flex-shrink-0 cursor-pointer'>
            <img className='w-10 md:w-12' src={Logo} alt="Logo"/>
          </Link>
        </div>

        {/* Segunda Logo (1/5 do espaço) */}
        <div className="flex items-center justify-center w-1/5">
          <img className="relative w-16 md:w-20 -bottom-10" src={Logo2} alt="Logo" />
        </div>

        {/* Menu do Canto Direito (2/5 do espaço) */}
        <div className='items-center justify-end hidden w-2/5 lg:flex'>
          <ul className='flex items-baseline ml-10 space-x-4 font-encode'>
            <li className='px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-xl'>
              <Link to="/" spy={true} smooth={true} offset={-21} duration={500} className='cursor-pointer'>Home</Link>
            </li>
            <li className='px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-xl'>
              <Link to="sobre" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>Sobre</Link>
            </li>
            <li className='px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-xl'>
              <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>Projetos</Link>
            </li>
            <li className='px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-xl'>
              <Link to="contatos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>Contatos</Link>
            </li>
          </ul>
        </div>

        {/* Botão do Menu para Telas Pequenas (Ocupa 2/5 do espaço) */}
        <div className='flex justify-end w-2/5 lg:hidden'>
          <button
            id='botao'
            type='button'
            onClick={handleMobileButtonClick}
            className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-300 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
            aria-label="Menu"
            aria-expanded={isMobileMenuVisible ? "true" : "false"}
          >
            <svg className='w-6 h-6 md:w-8 md:h-8' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>

      </ul>

      {/* Menu para Telas Pequenas (Oculto por padrão) */}
      <div className={`lg:hidden ${isMobileMenuVisible ? 'block' : 'hidden'}` }>
        <ul className='px-2 pt-2 pd-3 sm:px-3 font-encode'>
          <Link to="/" spy={true} smooth={true} offset={-21} duration={500} className='cursor-pointer'>
            <li className='flex justify-end px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out rounded-md hover:bg-gray-700 md:text-2xl'>
              Home
            </li>
          </Link>
          <Link to="sobre" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>
            <li className='flex justify-end px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out rounded-md hover:bg-gray-700 md:text-2xl'>
              Sobre
            </li>
          </Link>
          <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>
            <li className='flex justify-end px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out rounded-md hover:bg-gray-700 md:text-2xl'>
              Projetos
            </li>
          </Link>
          <Link to="contatos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>
            <li className='flex justify-end px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out rounded-md hover:bg-gray-700 md:text-2xl'>
              Contatos
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;