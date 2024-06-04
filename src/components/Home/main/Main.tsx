import FmbName from '../../../assets/FMBName.png'
import EdMain from '../../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return(
        <div id='/' className='bg-primary-100 lg:h-auto'>
            <div className='flex items-center justify-center h-auto max-w-full'>
                <img className='pt-12 pb-10 w-52 md:pt-16 md:w-64 xl:pt-14' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <div className='grid w-full grid-cols-1 xl:grid-cols-2'>
                <div className='flex items-center xl:w-full lg:ml-8 xl:ml-20'>
                    <h1 className='w-full py-10 ml-3 text-4xl text-white md:ml-5 md:mt-10 md:text-5xl xl:text-6xl font-encode 2xl:py-0'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to to-gray-400'>Olá, eu sou{" "}</span>
                        <br />
                    <TypeAnimation
                    sequence={[
                        'Willian!',
                        1000,
                        'Web Developer',
                        1000,
                        'Mobile Developer',
                        1000,
                        'UI/UX Designer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                    </h1>
                </div>
                
                <div className='flex items-end justify-end w-full mt-6 md:mt-0'>
                    <img className='flex md:max-w-[700px] xl:max-w-full 'src={EdMain} alt="Ed"/>
                </div>
            </div>
        </div>
    )
}

export default Main;