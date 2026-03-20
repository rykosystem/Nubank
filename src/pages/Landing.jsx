import { useNavigate } from 'react-router-dom'
import { Menu, X, ChevronRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

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

      {/* Hero Section - Estilo Sicoob */}
      <section className="bg-[#007F7F] text-white overflow-hidden">
        <div className="px-6 pt-10 pb-6 relative z-10">
          <h1 className="text-[32px] font-bold leading-[1.1] mb-6 tracking-tight">
            Resgate seus <br />
            pontos Nubank <br />
            e ganhe prêmios
          </h1>
          
          <p className="text-sm font-medium opacity-80 leading-relaxed max-w-[280px] mb-8">
            Facilidade para realizar suas compras, com vantagens e benefícios exclusivos que só o Nubank pode oferecer.
          </p>

          <button
            onClick={() => navigate('/auth')}
            className="w-full bg-[#1a1a1a] text-white font-bold text-lg py-5 px-6 rounded-lg shadow-2xl flex flex-col items-center justify-center leading-tight mb-8"
          >
            <span>Clique aqui para</span>
            <span>resgatar seus pontos</span>
          </button>
        </div>

        {/* Image Display */}
        <div className="relative w-full aspect-[4/3] -mt-4">
          <div className="absolute inset-0 border-[1px] border-black/10 m-6 rounded-xl overflow-hidden shadow-lg">
             <img 
               src="https://www.altarendablog.com.br/wp-content/uploads/2023/04/nubank-ultravioleta.png" 
               alt="Mulher com cartão Nubank"
               className="w-full h-full object-cover"
               onError={(e) => { e.target.src = 'https://picsum.photos/800/600'; }} // Fallback
             />
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="px-6 py-12 bg-white flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-[#820AD1]/10 rounded-full flex items-center justify-center text-[#820AD1] mb-4">
              <CheckCircle2 className="w-8 h-8" />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Simplicidade</h3>
           <p className="text-sm text-gray-500 max-w-[240px]">Gerencie todos os seus pontos diretamente pelo portal.</p>
        </div>

        <div className="flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-[#820AD1]/10 rounded-full flex items-center justify-center text-[#820AD1] mb-4">
              <ChevronRight className="w-8 h-8" />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Vantagens Exclusivas</h3>
           <p className="text-sm text-gray-500 max-w-[240px]">Tenha acesso a um catálogo selecionado de produtos e serviços.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D3B3D] py-10 px-8 text-center mt-auto">
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
          © 2024 Nubank S.A. CNPJ: 18.236.120/0001-58
        </p>
      </footer>
    </div>
  )
}
