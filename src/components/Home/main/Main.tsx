import FmbName from '../../../assets/FMBName.png'
import EdMain from '../../../assets/Edmain.png'
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return(
        <div className='bg-primary-100 lg:h-auto'>
            <div className='container max-w-full h-2/5 flex items-center justify-center'>
                <img className='w-52 pt-12 pb-10 md:pt-16 md:w-64 lg:pt-14' src={FmbName} alt="Logo Willian Dev" />
            </div>

            <section className='grid grid-cols-1 w-full lg:grid-cols-2'>
                <div className='lg:w-full lg:ml-10 xl:ml-40 flex items-center'>
                    <h1 className='text-white w-full ml-3 md:ml-5 md:mt-10 text-4xl md:text-5xl xl:text-7xl font-staubach'>
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
                
                <div className='flex w-full mt-6 md:mt-0 lg:w-full  '>
                    <img className='flex items-end justify-end' src={EdMain} alt="Ed"/>
                </div>
                
            </section>
        </div>
    )
}

export default Main;