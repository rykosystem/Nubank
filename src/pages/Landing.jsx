import { useNavigate } from 'react-router-dom'
import { Menu, X, ChevronRight, CheckCircle2, Star } from 'lucide-react'
import { useState } from 'react'
import bannerImg from '../assets/banner.jpg'

export default function Landing() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-white flex flex-col font-sans">
      {/* Top Utility Bar */}
      <div className="bg-[#0D3B3D] text-[10px] text-white flex justify-center divide-x divide-white/20">
        <button className="px-4 py-2 font-bold bg-[#145659]">Para você</button>
        <button className="px-4 py-2 opacity-70">Para sua Empresa</button>
        <button className="px-4 py-2 opacity-70">Para o Agronegócio</button>
      </div>

      {/* Main Header */}
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 41 24" className="w-12 h-auto fill-[#820AD1]">
            <path d="M30.4 0C24.7 0 20.1 4.6 20.1 10.3c0 2.2.7 4.3 1.9 6.1L4.8 2.7C4.1 2 3 2 2.3 2.7L.7 4.3C0 5 0 6.1.7 6.8l20.4 20.4c.7.7 1.9.7 2.6 0l1.6-1.6c.7-.7.7-1.9 0-2.6L8.1 5.8c-.5-.5-.5-1.4 0-1.9l.6-.6c.5-.5 1.4-.5 1.9 0l16.2 16.2c1.1 1.1 2.5 1.7 4.1 1.7 3.1 0 5.6-2.5 5.6-5.6V5.6C36.5 2.5 34 0 30.9 0h-.5zM30.9 17.8c-1.3 0-2.4-1.1-2.4-2.4V5.6c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4V15.4c0 1.3-1.1 2.4-2.4 2.4z"/>
          </svg>
          <span className="text-[#820AD1] font-bold text-xl tracking-tighter">Nubank</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#145659]">
          <Menu className="w-7 h-7" />
        </button>
      </header>

      {/* Hero Section - Estilo Sicoob Integrado */}
      <section className="bg-[#007F7F] text-white">
        <div className="px-6 pt-10 pb-6">
          <h1 className="text-[32px] font-bold leading-[1.1] mb-6 tracking-tight">
            Resgate seus <br />
            pontos Nubank <br />
            e ganhe prêmios
          </h1>
          
          <p className="text-sm font-medium opacity-85 leading-[1.5] max-w-[300px] mb-8">
            Facilidade para realizar suas compras, com vantagens e benefícios exclusivos que só o Nubank pode oferecer.
          </p>

          <button
            onClick={() => navigate('/auth')}
            className="w-full bg-[#1a1a1a] hover:bg-black text-white font-bold text-lg py-5 px-6 rounded-lg shadow-xl active:scale-95 transition-all flex flex-col items-center justify-center leading-tight mb-8"
          >
            <span>Clique aqui para</span>
            <span>resgatar seus pontos</span>
          </button>
        </div>

        {/* Hero Image - Usando o banner.jpg que você colocou */}
        <div className="relative w-full aspect-[16/10]">
          <div className="absolute inset-0 mx-6 mb-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-100">
             <img 
               src={bannerImg} 
               alt="Banner promocional Nubank"
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 py-12 bg-gray-50 flex flex-col gap-12">
        <div className="flex gap-4 items-start">
           <div className="w-12 h-12 bg-[#820AD1]/10 rounded-xl flex items-center justify-center text-[#820AD1] shrink-0">
              <CheckCircle2 className="w-7 h-7" />
           </div>
           <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Simplicidade</h3>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider font-bold">Gerencie todos os seus pontos diretamente pelo portal.</p>
           </div>
        </div>

        <div className="flex gap-4 items-start">
           <div className="w-12 h-12 bg-[#820AD1]/10 rounded-xl flex items-center justify-center text-[#820AD1] shrink-0">
              <Star className="w-7 h-7 fill-[#820AD1]/20" />
           </div>
           <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Vantagens Exclusivas</h3>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider font-bold">Tenha acesso a um catálogo selecionado de produtos e serviços.</p>
           </div>
        </div>
      </section>

      {/* Footer Utility Links */}
      <section className="bg-white px-6 py-12 flex flex-col gap-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-[#145659] font-bold">
            <span>Central de Atendimento</span>
            <ChevronRight className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between text-sm text-[#145659] font-bold">
            <span>Privacidade e Segurança</span>
            <ChevronRight className="w-5 h-5" />
          </div>
      </section>

      {/* Corporate Footer */}
      <footer className="bg-[#0D3B3D] py-12 px-8 text-center text-white/50 border-t border-white/5">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Nubank Oficial</p>
        <p className="text-[10px] font-medium max-w-[200px] mx-auto opacity-70">
          © 2024 Nubank S.A. CNPJ: 18.236.120/0001-58 <br />
          Rua Capote Valente, 39 - Pinheiros, São Paulo/SP
        </p>
      </footer>
    </div>
  )
}
