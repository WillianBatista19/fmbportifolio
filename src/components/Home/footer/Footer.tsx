import { Link } from 'react-scroll';
import FmbName from '../../../assets/FMBName.png'
import { PhoneIcon } from "@heroicons/react/16/solid";

function Footer() {
    return(
        <div>
            <div className="sm:flex sm:justify-center items-center bg-black">
                <div className="h-auto sm:w-3/5">
                    <div className='grid grid-cols-5 items-center'>
                        <div className='col-span-1 flex justify-center pl-3 sm:pl-0'>
                            <img className='w-20 sm:w-36' src={FmbName} alt="Logo Willian Dev" />
                        </div>

                        <div className='w-11/12 sm:w-full mx-auto sm:mx-0 border-t-2 border-primary-400 col-span-4'></div>
                    </div>

                    <div className='sm:flex justify-end pt-6 pb-6'>
                        <div className='grid grid-cols-2 sm:grid-cols-4 sm:w-4/5'>
                            <div className='col-span-1 px-5 sm:px-0 pb-5 sm:pb-0 order-1'>
                                <h2 className='text-primary-200 font-akkordeonSlab sm:text-xl font-bold'>Menu</h2>

                                <ul className='text-white sm:text-lg font-akkordeonSlab pt-3 space-y-1'>
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

                            <div className='col-span-1  order-2 sm:order-2'>
                                <h2 className='text-primary-200 font-akkordeonSlab sm:text-xl font-bold'>Redes Sociais</h2>

                                <ul className='text-white sm:text-lg font-akkordeonSlab pt-3 space-y-1'>
                                    <li><a href="https://github.com/WillianBatista19" target='_blank'><span className='hover:text-primary-100'>GitHub</span></a></li>
                                    <li><a href="https://www.linkedin.com/in/willian-alves-batista-b32b14206/" target='_blank'><span className='hover:text-primary-100'>LinkedIn</span></a></li>
                                </ul>
                            </div>

                            <div className='col-span-1 flex items-center sm:items-start space-x-2 sm:pt-5 md:pt-0 px-5 sm:px-0 space-y-4 sm:space-y-0 order-3 sm:order-3'>
                                <PhoneIcon className="h-10 md:h-12 w-10 md:w-12 p-2 rounded-full bg-white text-black" />
                                
                                <ul className='text-white items-center'>
                                    <li className='font-bold sm:text-xl leading-5 sm:leading-6'>Telefone de <br/> Atendimento</li>
                                </ul>
                            </div>

                            <div className='flex items-end sm:items-center md:items-start col-span-1 pt-5 sm:pt-0 order-4'>
                                <ul className='text-white font-akkordeonSlab text-2xl md:text-3xl font-bold'>
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
        </div>

    )
}

export default Footer;