import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Ed2 from '../../../assets/Ed2.png';
import Bootstrap from '../../../assets/skills/bootstrap.png'
import CSS from '../../../assets/skills/css.png';
import HTML from '../../../assets/skills/html.png'
import Java from '../../../assets/skills/java.png'
import JS from '../../../assets/skills/js.png'
import ReactFrame from '../../../assets/skills/react.png'

import Autoplay from "embla-carousel-autoplay"

function about() {

    return (
        <div className="h-auto xl:h-auto bg-black">
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-y-28'>
                <div className='flex justify-center mt-12 md:mb-10 lg:justify-end lg:items-center lg:pr-20 lg:mt-28'>
                    <img className='w-48 md:w-60 lg:w-80' src={Ed2} alt="Ed" />
                </div>

                <div className='m-8 md:mx-20 md:my-0 lg:mx-5 xl:max-w-[547px] text-justify'>  
                    <p className='text-white mb-5 font-staubach text-xl md:text-2xl'>
                         <span className='text-primary-200 block text-4xl mb-4 pl-3'>Olá,</span> Sou um desenvolvedor front-end com conhecimentos em JavaScript, HTML 5, CSS3 e React. Atualmente, estou cursando o 7º semestre de Sistemas de Informação, o que me proporcionou uma base sólida em programação.
                    </p>

                    <p className='text-white mb-5 font-staubach text-xl md:text-2xl'>
                        Minha jornada no desenvolvimento começou com a curiosidade de como as coisas funcionam na web, e desde então venho me aprimorando constantemente para criar experiências digitais impactantes. Tenho um olhar atento aos detalhes e estou comprometido em oferecer soluções que atendam às necessidades do cliente e aos padrões de usabilidade.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 w-full justify-center gap-y-16 xl:gap-y-20'>

                <h1 className='flex justify-center text-4xl font-staubach lg:mt-20 text-primary-200'>Minhas Skills</h1>

                <Carousel opts={{loop: true,}} plugins={[ Autoplay({ delay: 2000,}),]} className='flex justify-center mb-16 xl:mb-20'>
                    <CarouselContent className='md:-ml-10 xl:-ml-24'>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={Bootstrap} alt="Bootstrap" /></CarouselItem>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={CSS} alt="CSS" /></CarouselItem>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={HTML} alt="HTML-5" /></CarouselItem>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={Java} alt="Java" /></CarouselItem>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={JS} alt="JS" /></CarouselItem>
                        <CarouselItem className='flex justify-center md:basis-2/6 xl:basis-1/6 md:pl-10 xl:pl-24 '><img className='w-32' src={ReactFrame} alt="React" /></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default about;