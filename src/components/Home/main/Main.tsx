import FmbName from '../../../assets/FMBName.png'
import EdMain from '../../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return(
        <div id='/' className='bg-primary-100 lg:h-auto'>
            <div className='max-w-full h-auto flex items-center justify-center'>
                <img className='w-52 pt-12 pb-10 md:pt-16 md:w-64 xl:pt-14' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <div className='grid grid-cols-1 w-full xl:grid-cols-2'>
                <div className='xl:w-full lg:ml-5 xl:ml-40 flex items-center'>
                    <h1 className='text-white w-full ml-3 md:ml-5 md:mt-10 text-4xl md:text-5xl xl:text-7xl font-staubach py-10 2xl:py-0'>
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
                
                <div className='flex w-full mt-6 md:mt-0'>
                    <img className='flex items-end justify-end' src={EdMain} alt="Ed"/>
                </div>
            </div>
        </div>
    )
}

export default Main;