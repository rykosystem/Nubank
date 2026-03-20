import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-white flex flex-col font-sans">
      {/* Header - Exatamente como Nubank */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between">
        <img src={logoImg} alt="nu" className="h-7 w-auto" />
        
        <button className="bg-[#820AD1] text-white text-[11px] font-bold px-5 py-2 rounded-full">
          Quero ser Nubank
        </button>

        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-white stroke-[2.5]" />
          <div className="flex flex-col gap-[3px]">
            <div className="w-6 h-[2.5px] bg-white rounded-full"></div>
            <div className="w-6 h-[2.5px] bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero - Banner Full Screen com texto e botão POR CIMA */}
      <div className="relative w-full min-h-dvh">
        {/* Imagem de Fundo */}
        <img 
          src={bannerImg} 
          alt="Nubank" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient overlay para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Conteúdo sobre o banner */}
        <div className="relative z-10 flex flex-col justify-end min-h-dvh px-6 pb-12 pt-20">
          {/* Texto Principal */}
          <h1 className="text-white text-[38px] font-extrabold leading-[1.05] tracking-tight mb-3">
            Resgate seus pontos e ganhe prêmios exclusivos
          </h1>

          <p className="text-white/80 text-[15px] font-medium leading-snug mb-8 max-w-[320px]">
            Facilidade para realizar suas compras com vantagens e benefícios exclusivos.
          </p>

          {/* Botão CTA - Estilo Nubank "Faz valer" */}
          <button
            onClick={() => navigate('/auth')}
            className="bg-[#820AD1] hover:bg-[#9436E1] text-white font-bold text-[15px] py-4 px-10 rounded-full w-fit shadow-xl active:scale-[0.97] transition-all"
          >
            Resgatar meus pontos
          </button>
        </div>
      </div>
    </div>
  )
}
