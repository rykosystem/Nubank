import { useNavigate } from 'react-router-dom'
import { Menu, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-white flex flex-col font-sans">
      {/* Top Utility Bar - Purple Style */}
      <div className="bg-[#520885] text-[10px] text-white flex justify-center divide-x divide-white/10 uppercase tracking-widest font-black">
        <button className="px-4 py-2 bg-[#820AD1]">Para você</button>
        <button className="px-4 py-2 opacity-60">Para sua Empresa</button>
        <button className="px-4 py-2 opacity-60">Para o Agronegócio</button>
      </div>

      {/* Main Header - With your Logo */}
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
           <img src={logoImg} alt="Nubank Logo" className="h-8 w-auto object-contain" />
        </div>
        <button className="text-[#820AD1]">
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Hero Banner - Full Screen Focus */}
      <section className="bg-[#820AD1] text-white relative flex flex-col items-center">
        {/* Main Background Image - Covers the screen section */}
        <div className="w-full relative aspect-square md:aspect-video overflow-hidden shadow-2xl">
           <img 
             src={bannerImg} 
             alt="Banner Nubank" 
             className="w-full h-full object-cover brightness-95"
           />
           {/* Overlay for Text Contrast */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
           
           {/* Text Content Overlayed on Image */}
           <div className="absolute top-0 left-0 right-0 p-6 pt-10 text-center">
              <h1 className="text-[34px] font-black leading-[1.1] mb-4 drop-shadow-lg tracking-tight">
                Resgate seus <br />
                pontos Nubank <br />
                e ganhe prêmios
              </h1>
              <p className="text-sm font-bold opacity-90 leading-tight max-w-[280px] mx-auto drop-shadow-md">
                Facilidade para suas compras, com vantagens exclusivas.
              </p>
           </div>
        </div>

        {/* Action Area below image but linked to the purple block */}
        <div className="w-full px-6 py-10 flex flex-col items-center -mt-4 relative z-10 bg-[#820AD1] rounded-t-[32px]">
          {/* Pulsing Interactive Button */}
          <button
            onClick={() => navigate('/auth')}
            className="w-full bg-white text-[#820AD1] font-black text-xl py-6 px-4 rounded-2xl shadow-2xl active:scale-[0.96] transition-all flex flex-col items-center justify-center leading-tight border-2 border-white/20 animate-nubank-pulse"
          >
            <span className="uppercase tracking-tight">Clique aqui para</span>
            <span className="uppercase tracking-tighter text-2xl">resgatar seus pontos</span>
          </button>
          
          <p className="mt-8 text-[11px] font-black opacity-60 uppercase tracking-[0.2em] text-center">
             Processo rápido • Seguro • Digital
          </p>
        </div>
      </section>

      {/* Simplified Info Area - Just Navigation */}
      <section className="px-6 py-10 bg-white flex flex-col gap-5">
          <div className="flex items-center justify-between text-[11px] text-[#820AD1] font-black uppercase tracking-widest p-4 bg-gray-50 rounded-2xl border border-gray-100 active:bg-gray-100 transition-colors">
            <span>Central de Atendimento</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#820AD1] font-black uppercase tracking-widest p-4 bg-gray-50 rounded-2xl border border-gray-100 active:bg-gray-100 transition-colors">
            <span>Privacidade e Segurança</span>
            <ChevronRight className="w-4 h-4" />
          </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-[#1a1a1a] py-14 px-8 text-center text-white/40">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#820AD1]">Nubank Oficial</p>
        <p className="text-[10px] font-bold max-w-[260px] mx-auto opacity-60 leading-relaxed">
          © 2024 Nubank S.A. CNPJ: 18.236.120/0001-58 <br />
          Rua Capote Valente, 39 - Pinheiros, São Paulo/SP
        </p>
      </footer>
    </div>
  )
}
