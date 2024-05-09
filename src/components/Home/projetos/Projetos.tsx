import Wod from '../../../assets/projects/WodProject.jpg'
import Notes from '../../../assets/projects/Notesproject.jpg'
import Perfil from '../../../assets/projects/perfilProject.jpg'
import android from '../../../assets/projects/android.jpg'
import MustangImg from '../../../assets/MT.webp'

function Projetos() {
    return (
        <div id='projetos' className='h-screen'>
            <div className="h-full grid grid-cols-5 items-end">
                <div className='col-span-2 h-full items-end gap-y-5'>
                    <div className='h-full grid grid-rows-5'>
                        <div className='row-span-3'>

                        <div className='h-full flex flex-col justify-end items-end'>
                            <h1 className='text-primary-200 w-full max-w-[450px] ml-16 text-4xl font-akkordeonSlab font-bold mb-2'>
                                Meus Projetos
                            </h1>
                            <p className='font-akkordeonSlab font-bold w-full max-w-[450px] ml-16 text-justify text-2xl'>
                            Nesta seção, você encontrará uma seleção dos meus projetos de desenvolvimento front-end. Cada projeto foi cuidadosamente criado para destacar minhas habilidades, demonstrando minha capacidade de criar interfaces intuitivas e responsivas. Explore esses exemplos para ter uma ideia do meu estilo de trabalho e abordagem de design.
                            </p>
                        </div>
                            
                        </div>
                        
                        <div className='row-span-2 w-full max-w-[350px] flex items-end'>
                            <img src={MustangImg} />
                        </div>
                    </div>
                </div>

                <div className="col-span-3 h-full flex justify-center items-center"> 
                    <div className='grid grid-cols-2 gap-1 justify-center items-center'> 
                        <a href="https://projeto-wod.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Wod} alt="Teste"/></a>
                        <a href="https://projeto-notas-nlw.vercel.app" target='_blank' className='flex justify-center m-2'><img className='max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Notes} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Perfil-website/" target='_blank' className='flex justify-center m-2'><img className='max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={Perfil} alt="Teste"/></a>
                        <a href="https://willianbatista19.github.io/Projeto-Android/" target='_blank' className='flex justify-center m-2'><img className='max-w-[310px] max-h-[200px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300' src={android} alt="Teste"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;