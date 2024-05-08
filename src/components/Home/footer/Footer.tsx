import FmbName from '../../../assets/FMBName.png'
import { PhoneIcon } from "@heroicons/react/16/solid";

function Footer() {
    return(
        <div className=" flex justify-center items-center bg-black">
            <div className="h-auto w-3/5">
                <div className='grid grid-cols-5 items-center justify-center'>
                    <div className='col-span-1 flex justify-center'>
                        <img className='w-36' src={FmbName} alt="Logo Willian Dev" />
                    </div>

                    <div className='border-t-2 border-primary-400 col-span-4'></div>
                </div>

                <div className='flex justify-end pt-6 pb-6'>
                    <div className='grid grid-cols-4 w-4/5'>
                        <div className='col-span-1'>
                            <h2 className='text-primary-200 font-akkordeonSlab text-xl font-bold'>Menu</h2>

                            <ul className='text-white text-lg font-akkordeonSlab pt-3 space-y-1'>
                                <li><a href="#"><span className='hover:text-primary-100'>Home</span></a></li>
                                <li><a href="#"><span className='hover:text-primary-100'>Sobre</span></a></li>
                                <li><a href="#"><span className='hover:text-primary-100'>Projetos</span></a></li>
                                <li><a href="#"><span className='hover:text-primary-100'>Contatos</span></a></li>
                            </ul>
                        </div>

                        <div className='col-span-1'>
                            <h2 className='text-primary-200 font-akkordeonSlab text-xl font-bold'>Redes Sociais</h2>

                            <ul className='text-white text-lg font-akkordeonSlab pt-3 space-y-1'>
                                <li><a href="https://github.com/WillianBatista19" target='_blank'><span className='hover:text-primary-100'>GitHub</span></a></li>
                                <li><a href="https://www.linkedin.com/in/willian-alves-batista-b32b14206/" target='_blank'><span className='hover:text-primary-100'>LinkedIn</span></a></li>
                            </ul>
                        </div>

                        <div className='col-span-1 flex space-x-2'>
                            <PhoneIcon className="h-12 w-12 p-2 rounded-full bg-white text-black" />
                            
                            <ul className='text-white'>
                                <li className='text-xl leading-6'>Telefone de <br/> Atendimento</li>
                            </ul>
                        </div>

                        <div className='col-span-1 pt-2 '>
                            <ul className='text-white font-akkordeonSlab text-3xl font-bold'>
                                <li>88 9 94731018</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Footer;