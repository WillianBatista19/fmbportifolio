import { Link } from 'react-scroll';
import FmbName from '../../../assets/FMBName.png'
import { PhoneIcon } from "@heroicons/react/16/solid";

function Footer() {
    return(
        <>
            <div className="items-center bg-black md:flex md:justify-center">
                <div className="w-full h-auto 2xl:w-3/5 ">
                    <div className='grid items-center grid-cols-5'>
                        <div className='flex justify-center col-span-1 pl-3 md:pl-0'>
                            <img className='w-20 md:w-28 lg:w-36' src={FmbName} alt="Logo Willian Dev" />
                        </div>

                        <div className='w-11/12 col-span-4 mx-auto border-t-2 2xl:w-full md:mx-0 border-primary-400'></div>
                    </div>

                    <div className='justify-end pt-6 pb-6 sm:flex'>
                        <div className='grid grid-cols-1 pl-1 ml-3 sm:grid-cols-2 sm:pl-0 md:pl-0 md:grid-cols-4 sm:w-4/5 sm:ml-0'>
                            <div className='order-1 col-span-1 pb-5 sm:px-5 md:px-0 2xl:pb-0'>
                                <h2 className='font-bold text-primary-200 font-encode md:text-xl'>Menu</h2>

                                <ul className='pt-3 space-y-1 text-white font-encode'>
                                    <li>
                                        <Link to="/" spy={true} smooth={true} offset={-60} duration={500} className='cursor-pointer hover:text-primary-100'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="sobre" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer hover:text-primary-100'>Sobre</Link>
                                    </li>
                                    <li>
                                        <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer hover:text-primary-100'>Projetos</Link>
                                    </li>
                                    <li>
                                        <Link to="contatos" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer hover:text-primary-100'>Contatos</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='order-2 col-span-1 md:order-2'>
                                <h2 className='font-bold text-primary-200 font-encode md:text-xl'>Redes Sociais</h2>

                                <ul className='pt-3 space-y-1 text-white font-encode'>
                                    <li><a href="https://github.com/WillianBatista19" target='_blank'><span className='hover:text-primary-100'>GitHub</span></a></li>
                                    <li><a href="https://www.linkedin.com/in/willian-alves-batista-b32b14206/" target='_blank'><span className='hover:text-primary-100'>LinkedIn</span></a></li>
                                </ul>
                            </div>

                            <div className='flex flex-wrap items-end order-3 col-span-1 space-x-2 space-y-4 h-1/2 md:items-start sm:pt-5 md:pt-0 sm:px-5 md:px-0 md:space-y-0 sm:order-3'>
                                <PhoneIcon className="p-2 text-black bg-white rounded-full w-7 h-7 sm:h-10 lg:h-12 sm:w-10 lg:w-12" />
                                
                                <ul className='items-center text-white font-encode'>
                                    <li className='text-sm font-bold leading-5 lg:leading-6'>Telefone de <br/> Atendimento</li>
                                </ul>
                            </div>

                            <div className='flex items-end order-4 col-span-1 pt-5 justify-normal md:items-start md:pt-0'>
                                <ul className='pr-2 text-base font-bold text-white font-akkordeonSlab sm:pr-0 sm:text-xl md:text-xl'>
                                    <li>(88) 994731018</li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div className='w-full flex justify-center pt-2 pb-2 bg-[#111111]'>
                <p className='text-xs md:text-sm text-[#666666] font-encode text-center'>&copy; Hiromu Arakawa / SQUARE ENIX. Todos os direitos reservados. <br/> Designed by <span className='mx-1 my-0 tracking-wider uppercase opacity-70'>Willian Batista</span></p>
            </div> 
        </>
    )
}

export default Footer;