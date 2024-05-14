import { Link } from 'react-scroll';
import FmbName from '../../../assets/FMBName.png'
import { PhoneIcon } from "@heroicons/react/16/solid";

function Footer() {
    return(
        <>
            <div className="md:flex md:justify-center items-center bg-black">
                <div className="h-auto w-full 2xl:w-3/5 ">
                    <div className='grid grid-cols-5 items-center'>
                        <div className='col-span-1 flex justify-center pl-3 md:pl-0'>
                            <img className='w-20 md:w-28 lg:w-36' src={FmbName} alt="Logo Willian Dev" />
                        </div>

                        <div className='w-11/12 2xl:w-full mx-auto md:mx-0 border-t-2 border-primary-400 col-span-4'></div>
                    </div>

                    <div className='sm:flex justify-end pt-6 pb-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 pl-1 sm:pl-0 md:pl-0 md:grid-cols-4 sm:w-4/5 ml-3 sm:ml-0'>
                            <div className='col-span-1 sm:px-5 md:px-0 pb-5 2xl:pb-0 order-1'>
                                <h2 className='text-primary-200 font-akkordeonSlab md:text-2xl font-bold'>Menu</h2>

                                <ul className='text-white md:text-xl font-akkordeonSlab pt-3 space-y-1'>
                                    <li>
                                        <Link to="/" spy={true} smooth={true} offset={-60} duration={500} className='hover:text-primary-100 cursor-pointer'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="sobre" spy={true} smooth={true} offset={0} duration={500} className='hover:text-primary-100 cursor-pointer'>Sobre</Link>
                                    </li>
                                    <li>
                                        <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className='hover:text-primary-100 cursor-pointer'>Projetos</Link>
                                    </li>
                                    <li>
                                        <Link to="contatos" spy={true} smooth={true} offset={0} duration={500} className='hover:text-primary-100 cursor-pointer'>Contatos</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-span-1 order-2 md:order-2'>
                                <h2 className='text-primary-200 font-akkordeonSlab md:text-2xl font-bold'>Redes Sociais</h2>

                                <ul className='text-white md:text-xl font-akkordeonSlab pt-3 space-y-1'>
                                    <li><a href="https://github.com/WillianBatista19" target='_blank'><span className='hover:text-primary-100'>GitHub</span></a></li>
                                    <li><a href="https://www.linkedin.com/in/willian-alves-batista-b32b14206/" target='_blank'><span className='hover:text-primary-100'>LinkedIn</span></a></li>
                                </ul>
                            </div>

                            <div className='col-span-1 h-1/2 flex flex-wrap items-end md:items-start space-x-2 sm:pt-5 md:pt-0 sm:px-5 md:px-0 space-y-4 md:space-y-0 order-3 sm:order-3'>
                                <PhoneIcon className="w-7 h-7 sm:h-10 lg:h-12 sm:w-10 lg:w-12 p-2 rounded-full bg-white text-black" />
                                
                                <ul className='text-white items-center'>
                                    <li className='font-bold text md:text-lg leading-5 md:leading-5 lg:leading-6'>Telefone de <br/> Atendimento</li>
                                </ul>
                            </div>

                            <div className='flex items-end justify-normal md:items-start col-span-1 pt-5 md:pt-0 order-4'>
                                <ul className='text-white font-akkordeonSlab text-base pr-2 sm:pr-0 sm:text-xl md:text-xl font-bold'>
                                    <li>(88) 994731018</li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div className='w-full flex justify-center pt-2 pb-2 bg-[#111111]'>
                <p className='text-xs md:text-base text-[#666666] font-akkordeonSlab text-center'>&copy; Hiromu Arakawa / SQUARE ENIX. Todos os direitos reservados. <br/> Designed by <span className='opacity-70 uppercase tracking-wider my-0 mx-1'>Willian Batista</span></p>
            </div> 
        </>
    )
}

export default Footer;