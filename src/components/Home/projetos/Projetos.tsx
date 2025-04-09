import Wod from '../../../assets/projects/WodProject.jpg'
import Mavi from '../../../assets/projects/MaviRed.png'
import Perfil from '../../../assets/projects/perfilProject.jpg'
import Sade from '../../../assets/projects/capavideo.webp'
import MustangImg from '../../../assets/MT.webp'

function Projetos() {
    return (
        <div id='projetos' className='2xl:h-screen'>
            <div className="md:h-full xl:grid xl:grid-cols-5 xl:items-end">
                <div className='pb-10 xl:col-span-2 xl:items-end xl:pb-0 xl:gap-y-5'>
                    <div className='xl:grid xl:grid-rows-5'>
                        <div className='sm:row-span-3'>
                            <div className='flex flex-col items-center h-full pt-10 xl:justify-end xl:items-end xl:pt-0 xl:pl-14 2xl:pl-0'>
                                <h1 className='pb-5 text-2xl font-bold text-primary-200 xl:w-full xl:max-w-lg xl:ml-16 sm:text-3xl lg:text-4xl font-encode sm:mb-2'>
                                    Meus Projetos
                                </h1>
                                <p className='max-w-sm px-6 text-base font-bold text-justify font-encode sm:w-full md:max-w-lg lg:max-w-2xl xl:max-w-lg sm:px-0 xl:ml-16 sm:text-xl md:text-2xl lg:text-xl'>
                                Nesta seção, você encontrará uma seleção dos meus projetos de desenvolvimento front-end. Cada projeto foi cuidadosamente criado para destacar minhas habilidades, demonstrando minha capacidade de criar interfaces intuitivas e responsivas. Explore esses exemplos para ter uma ideia do meu estilo de trabalho e abordagem de design.
                                </p>
                            </div>
                        </div>
                        
                        <div className='sm:row-span-2 sm:w-full max-w-[350px] hidden xl:flex items-end'>
                            <img src={MustangImg} />
                        </div>
                    </div>
                </div>

                <div className="items-center justify-center h-full pb-10 sm:col-span-3 sm:flex xl:pb-0"> 
                    <div className='grid items-center justify-center gap-1 xl:grid-cols-2 md:gap-4'> 
                        <a href="https://projeto-wod.vercel.app" target='_blank' className='flex justify-center m-2'><img className='w-[400px] h-[260px] object-cover rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Wod} alt="Projeto Wod Site"/></a>
                        <a href="https://studio-mavi.vercel.app" target='_blank' className='flex justify-center m-2'><img className='w-[400px] h-[260px] object-cover rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Mavi} alt="Studio Mavi Site"/></a>
                        <a href="https://willianbatista19.github.io/Perfil-website/" target='_blank' className='flex justify-center m-2'><img className='w-[400px] h-[260px] object-cover rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Perfil} alt="Perfil website"/></a>
                        <a href="https://sade-three.vercel.app" target='_blank' className='flex justify-center m-2'><img className='w-[400px] h-[260px] object-cover rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Sade} alt="Sade Site"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;