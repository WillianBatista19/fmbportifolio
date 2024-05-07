// import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Teste from '../../../assets/projects/teste.jpg'
import MustangImg from '../../../assets/MT.webp'

function Projetos() {
    return (
        <div className='h-screen'>
            <div className="h-full grid grid-cols-5 items-end">
                <div className='col-span-2 h-full items-end gap-y-5'>
                    <div className='h-full grid grid-rows-5'>
                        <div className='row-span-3'>

                        <div className='h-full flex flex-col justify-end items-end'>
                            <h1 className='text-primary-200 w-full max-w-[450px] ml-16 text-4xl font-akkordeonSlab font-bold mb-2'>
                                Meus Projetos
                            </h1>
                            <p className='font-akkordeonSlab font-bold w-full max-w-[450px] ml-16 text-justify text-2xl'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea labore nihil ullam. Nihil nisi ex ipsum voluptatibus. Tempore facere quidem soluta nobis dicta quae libero illo alias, consequuntur odio?
                            </p>
                        </div>
                            
                        </div>
                        
                        <div className='row-span-2 w-full max-w-[350px] flex items-end'>
                            <img src={MustangImg} />
                        </div>
                    </div>
                </div>

                <div className="col-span-3 h-full flex justify-center items-center"> 
                    <div className='grid grid-cols-2 gap-3 justify-center items-center'> 
                        <a className='flex justify-center m-2 m'><img className='max-w-[350px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' src={Teste} alt="Teste"/></a>
                        <a className='flex justify-center m-2'><img className='max-w-[350px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' src={Teste} alt="Teste"/></a>
                        <a className='flex justify-center m-2'><img className='max-w-[350px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' src={Teste} alt="Teste"/></a>
                        <a className='flex justify-center m-2'><img className='max-w-[350px] rounded-3xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' src={Teste} alt="Teste"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;