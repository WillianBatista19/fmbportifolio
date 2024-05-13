import Wod from '../../../assets/projects/WodProject.jpg'
import Notes from '../../../assets/projects/Notesproject.jpg'
import Perfil from '../../../assets/projects/perfilProject.jpg'
import android from '../../../assets/projects/android.jpg'
import MustangImg from '../../../assets/MT.webp'

function Projetos() {
    return (
        <div id='projetos' className='2xl:h-screen'>
            <div className="md:h-full xl:grid xl:grid-cols-5 xl:items-end">
                <div className='xl:col-span-2 xl:items-end pb-10 xl:pb-0 xl:gap-y-5'>
                    <div className='xl:grid xl:grid-rows-5'>
                        <div className='sm:row-span-3'>
                            <div className='h-full flex flex-col xl:justify-end items-center xl:items-end pt-10 xl:pt-0 xl:pl-14 2xl:pl-0'>
                                <h1 className='text-primary-200 xl:w-full xl:max-w-lg xl:ml-16 text-2xl sm:text-3xl lg:text-4xl font-akkordeonSlab font-bold pb-5 sm:mb-2'>
                                    Meus Projetos
                                </h1>
                                <p className='font-akkordeonSlab font-bold sm:w-full max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-lg px-6 sm:px-0 xl:ml-16 text-justify text-base sm:text-xl md:text-2xl lg:text-2xl'>
                                Nesta seção, você encontrará uma seleção dos meus projetos de desenvolvimento front-end. Cada projeto foi cuidadosamente criado para destacar minhas habilidades, demonstrando minha capacidade de criar interfaces intuitivas e responsivas. Explore esses exemplos para ter uma ideia do meu estilo de trabalho e abordagem de design.
                                </p>
                            </div>
                        </div>
                        
                        <div className='sm:row-span-2 sm:w-full max-w-[350px] hidden xl:flex items-end'>
                            <img src={MustangImg} />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-3 h-full sm:flex justify-center items-center pb-10 xl:pb-0"> 
                    <div className='grid xl:grid-cols-2 gap-1 md:gap-4 justify-center items-center'> 
                        <a href="https://projeto-wod.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] md:max-w-[500px] max-h-[200px] md:max-h-[400px] lg:max-w-[600px] lg:max-h-[500px] xl:max-w-[300px] 2xl:max-w-[400px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Wod} alt="Teste"/></a>
                        <a href="https://projeto-notas-nlw.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] md:max-w-[500px] max-h-[200px] md:max-h-[400px] lg:max-w-[600px] lg:max-h-[500px] xl:max-w-[300px] 2xl:max-w-[400px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Notes} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Perfil-website/" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] md:max-w-[500px] max-h-[200px] md:max-h-[400px] lg:max-w-[600px] lg:max-h-[500px] xl:max-w-[300px] 2xl:max-w-[400px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Perfil} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Projeto-Android/" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] md:max-w-[500px] max-h-[200px] md:max-h-[400px] lg:max-w-[600px] lg:max-h-[500px] xl:max-w-[300px] xl:min-h-[196px] 2xl:max-w-[400px] 2xl:min-h-[260px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={android} alt="Teste"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;