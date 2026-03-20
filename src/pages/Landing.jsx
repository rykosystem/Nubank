import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      className="relative h-dvh w-full flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark Overlay for better text and button contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-[1]" />

      {/* Official Header */}
      <header className="relative z-[10] flex items-center justify-between px-5 py-4 bg-transparent">
        <img src={logoImg} alt="Nubank" className="h-[26px] w-auto brightness-200" />
        
        <button className="bg-[#8a05be] text-white text-[11px] font-bold px-5 py-[10px] rounded-full active:scale-95 transition-transform">
          Quero ser Nubank
        </button>

        <div className="flex items-center gap-4 text-white">
          <Search className="w-6 h-6 stroke-[2.5]" />
          <div className="flex flex-col gap-[3px] cursor-pointer">
            <div className="w-7 h-[2.5px] bg-white rounded-full" />
            <div className="w-7 h-[2.5px] bg-white rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content pushed up for better centering */}
      <main className="relative z-[10] flex-1 flex flex-col justify-end px-6 pb-24 md:pb-32 text-center md:text-left">
        <h1 className="text-white text-[38px] md:text-[52px] font-black leading-[1.05] tracking-tight mb-4 drop-shadow-lg">
          Resgate seus pontos <br className="hidden md:block" />
          e ganhe prêmios exclusivos
        </h1>
        
        <p className="text-white/80 text-[15px] md:text-[18px] font-bold leading-tight mb-10 max-w-[320px] md:max-w-[500px] mx-auto md:mx-0 drop-shadow-md">
          Facilidade para realizar suas compras com vantagens e benefícios exclusivos que só o Nubank oferece.
        </p>

        {/* Big Pulsing Button - Centered/Positioned for high click-through */}
        <div className="flex justify-center md:justify-start w-full">
          <button
            onClick={() => navigate('/auth')}
            className="group relative flex items-center justify-center bg-[#8a05be] hover:bg-[#9b2bd6] text-white font-extrabold text-[18px] md:text-[20px] py-[22px] px-16 md:px-20 rounded-full shadow-[0_15px_40px_rgba(138,5,190,0.4)] active:scale-[0.96] transition-all animate-nubank-pulse"
          >
            <span>Resgate seus pontos</span>
            
            {/* Subtle Inner Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-active:opacity-100 transition-opacity" />
          </button>
        </div>
      </main>

      {/* Embedded Style for the Pulse Animation */}
      <style>{`
        @keyframes nubank-pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(138, 5, 190, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(138, 5, 190, 0);
            transform: scale(1.02);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(138, 5, 190, 0);
            transform: scale(1);
          }
        }
        .animate-nubank-pulse {
          animation: nubank-pulse-glow 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Micro-footer for legitimacy */}
      <footer className="relative z-[10] w-full py-4 text-center">
         <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Nubank S.A. 2024</p>
      </footer>
    </div>
  )
}
