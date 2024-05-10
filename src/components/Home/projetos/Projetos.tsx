import Wod from '../../../assets/projects/WodProject.jpg'
import Notes from '../../../assets/projects/Notesproject.jpg'
import Perfil from '../../../assets/projects/perfilProject.jpg'
import android from '../../../assets/projects/android.jpg'
import MustangImg from '../../../assets/MT.webp'

function Projetos() {
    return (
        <div id='projetos' className='md:h-screen'>
            <div className="md:h-full md:grid md:grid-cols-5 md:items-end">
                <div className='md:col-span-2 md:h-full md:items-end pb-10 md:pb-0 md:gap-y-5'>
                    <div className='md:h-full md:grid sm:grid-rows-5'>
                        <div className='sm:row-span-3'>
                            <div className='h-full flex flex-col sm:justify-end items-center sm:items-end pt-10 sm:pt-0'>
                                <h1 className='text-primary-200 sm:w-full sm:max-w-[450px] sm:ml-16 text-3xl sm:text-4xl font-akkordeonSlab font-bold pb-5 sm:mb-2'>
                                    Meus Projetos
                                </h1>
                                <p className='font-akkordeonSlab font-bold sm:w-full sm:max-w-[450px] px-6 sm:px-0 sm:ml-16 text-justify text-xl sm:text-2xl'>
                                Nesta seção, você encontrará uma seleção dos meus projetos de desenvolvimento front-end. Cada projeto foi cuidadosamente criado para destacar minhas habilidades, demonstrando minha capacidade de criar interfaces intuitivas e responsivas. Explore esses exemplos para ter uma ideia do meu estilo de trabalho e abordagem de design.
                                </p>
                            </div>
                        </div>
                        
                        <div className='sm:row-span-2 sm:w-full max-w-[350px] hidden sm:flex items-end'>
                            <img src={MustangImg} />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-3 h-full sm:flex justify-center items-center pb-10 sm:pb-0"> 
                    <div className='grid sm:grid-cols-2 gap-1 justify-center items-center'> 
                        <a href="https://projeto-wod.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Wod} alt="Teste"/></a>
                        <a href="https://projeto-notas-nlw.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Notes} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Perfil-website/" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Perfil} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Projeto-Android/" target='_blank' className='flex justify-center m-2'><img className='max-w-[250px] sm:max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={android} alt="Teste"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;