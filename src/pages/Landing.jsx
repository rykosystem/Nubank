import { useNavigate } from 'react-router-dom'
import { Search, ChevronRight } from 'lucide-react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-[#f4f4f4] flex flex-col font-sans">
      
      {/* Header Branco Sólido - Igual Nubank */}
      <header className="bg-white px-5 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <img src={logoImg} alt="nu" className="h-7 w-auto" />
        
        <button className="bg-[#820AD1] text-white text-[12px] font-bold px-5 py-[10px] rounded-full">
          Quero ser Nubank
        </button>

        <div className="flex items-center gap-4">
          <Search className="w-[22px] h-[22px] text-[#820AD1] stroke-[2.5]" />
          <div className="flex flex-col gap-[4px] cursor-pointer">
            <div className="w-[22px] h-[2px] bg-[#820AD1] rounded-full"></div>
            <div className="w-[22px] h-[2px] bg-[#820AD1] rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Banner com texto e botão POR CIMA */}
      <div className="relative">
        <img 
          src={bannerImg} 
          alt="Nubank" 
          className="w-full aspect-[3/4] object-cover"
        />
        
        {/* Gradient para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Texto + Botão sobre o banner */}
        <div className="absolute bottom-24 left-0 px-6">
          <h1 className="text-white text-[36px] font-bold leading-[1.08] tracking-[-0.01em]">
            Resgate seus<br />
            pontos e ganhe<br />
            prêmios exclusivos
          </h1>
        </div>

        <div className="absolute bottom-8 left-0 px-6">
          <button
            onClick={() => navigate('/auth')}
            className="bg-[#820AD1] text-white font-bold text-[14px] py-[14px] px-8 rounded-full active:scale-[0.97] transition-transform"
          >
            Resgatar agora
          </button>
        </div>
      </div>

      {/* Card Branco sobrepondo o banner */}
      <div className="bg-white rounded-t-[24px] -mt-4 relative z-10 px-6 pt-8 pb-10">
        <h2 className="text-[20px] font-bold text-[#1a1a1a] leading-tight mb-6">
          Resgate seus pontos do<br />
          cartão Nubank agora
        </h2>

        <p className="text-[14px] text-[#777] leading-relaxed mb-8">
          Facilidade para realizar suas compras com vantagens e benefícios exclusivos.
        </p>

        <button
          onClick={() => navigate('/auth')}
          className="w-full bg-[#820AD1] text-white font-bold text-[16px] py-[18px] rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          Continuar
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer Links - Igual Nubank */}
      <div className="bg-white border-t border-gray-100 px-6 py-5 flex justify-center gap-8">
        <span className="text-[11px] font-bold text-[#777] uppercase tracking-widest">Privacidade</span>
        <span className="text-[11px] font-bold text-[#777] uppercase tracking-widest">Segurança</span>
        <span className="text-[11px] font-bold text-[#777] uppercase tracking-widest">Ajuda</span>
      </div>
    </div>
  )
}
