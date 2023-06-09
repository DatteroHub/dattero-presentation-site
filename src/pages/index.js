import * as React from "react"
import { Link } from 'gatsby'
import { SEO } from "../components/seo"
import HomeLayout from "../components/HomeLayout"
import InfoCard from "../components/InfoCard"
import BgDiv from "../components/BgDiv"
import ContentDiv from "../components/ContentDiv"

export default function Home() {
  return (
    <HomeLayout>
      <BgDiv className="pt-10 pb-0">
        <ContentDiv>
          <Link to='/'>
              <img src={'/logo.png'} alt="Dattero logo" className='h-12' />
          </Link>
          {/* <div className='h-1 w-32 bg-primary rounded-r-full' />
          <div className='h-12 w-1 bg-primary rounded-b-full' /> */}
        </ContentDiv>
      </BgDiv>
      <BgDiv className="pt-8 pb-24">
        <ContentDiv className="flex justify-center items-center">
          <div className="group mr-4">
            <h1 className="font-semibold text-5xl md:text-6xl text-gray-700"><span className="group-hover:text-primary-dark duration-1000">Dattero</span> è una<br/>Tech Community</h1>
            <div className="font-medium text-2xl max-w-2xl text-gray-500 mt-6">Uno spazio dove nascono <span className="bg-gray-700 text-neutral-50 px-2 py-0.5 whitespace-nowrap rounded-md group-hover:bg-primary-dark duration-1000">soluzioni digitali</span> a problemi che riscontra la nostra <span className="bg-gray-700 text-neutral-50 px-2 py-0.5 whitespace-nowrap rounded-md group-hover:bg-primary-dark duration-1000">comunità musulmana.</span></div>
          </div>
          <img src={'/hero.gif'} alt="Hero" className='h-56 xl:h-64 hidden lg:flex' />
        </ContentDiv>
      </BgDiv>
      <BgDiv className="bg-neutral-200/50">
        <ContentDiv className="flex flex-col gap-24">
          <InfoCard title="ti aiutiamo con la tua idea">Hai un'idea che può aiutare i musulmani in Italia a risolvere un problema comune?<br/><br/>Mandaci la tua idea e saremo felici di aiutarti a realizzarla fornendo le capacità tecniche richieste.</InfoCard>
          <InfoCard title="impara su progetti reali" reverse>Sei nuovo nel mondo tech e vuoi imparare a sviluppare su progetti reali e allo stesso tempo aiutare la nostra comunità?<br/><br/>Unisciti a noi per imparare affianco a persone esperte che ti seguiranno nel tuo percorso.</InfoCard>
          <InfoCard title="contribuisci con la tua esperienza">Hai esperienza con lo sviluppo web o mobile?<br/><br/>Vuoi mettere a disposizione le tue capacità al servizio della nostra comunità?<br/><br/>Unisciti ai nostri team!</InfoCard>
          <InfoCard title="qualsiasi skill può essere utile" reverse>Ti piace l'idea di Dattero e vuoi contribuire con altre tue skills?<br/><br/>Ogni contributo è ben accolto, saremo felici di averti con noi!</InfoCard>
        </ContentDiv>
      </BgDiv>
      <BgDiv className="pt-8 pb-12 bg-gray-700">
        <ContentDiv className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center content-center">
          <a href="https://t.me/iAbou/" target="_blank" rel="noreferrer" className="text-medium text-neutral-50 flex items-center gap-4 max-w-xs hover:bg-white/10 py-4 px-6 rounded-lg transition duration-300">
            <img src={'/telegram.svg'} alt="Telegram Logo" className='h-12' />
            <div>Contattaci su Telegram</div>
          </a>
          <a href="https://instagram.com/dattero_community/" target="_blank" rel="noreferrer" className="text-medium text-neutral-50 flex items-center gap-4 max-w-xs hover:bg-white/10 py-4 px-6 rounded-lg transition duration-300">
            <img src={'/insta.svg'} alt="Instagram Logo" className='h-12' />
            <div>Segui i prossimi progetti di <span className="font-bold text-primary-dark">Dattero</span> su Instagram</div>
          </a>
        </ContentDiv>
      </BgDiv>
    </HomeLayout>
  )
}

export const Head = () => (
  <SEO />
)