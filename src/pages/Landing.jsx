import { useNavigate } from 'react-router-dom'
import { Search, Menu } from 'lucide-react'
import bannerImg from '../assets/banner.png'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      className="relative h-dvh w-full flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dynamic Overlay for Visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Official Header */}
      <header className="relative z-[10] flex items-center justify-between px-6 py-5 bg-transparent">
        <div className="flex items-center gap-1">
           <img src={logoImg} alt="Nubank" className="h-[28px] w-auto brightness-200" />
        </div>
        
        <div className="flex-1 flex justify-center">
           <button className="bg-[#8a05be] text-white text-[12px] font-bold px-6 py-[10px] rounded-full active:scale-95 transition-transform shadow-lg shadow-purple-900/40">
             Quero ser Nubank
           </button>
        </div>

        <div className="flex items-center gap-5 text-white">
          <Search className="w-6 h-6 stroke-[2.5]" />
          <div className="flex flex-col gap-[3.5px] cursor-pointer">
            <div className="w-8 h-[2.5px] bg-white rounded-full" />
            <div className="w-8 h-[2.5px] bg-white rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Section - CENTRADA NA TELA INTEIRA */}
      <main className="relative z-[10] flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full text-center flex flex-col items-center gap-12">
           <h1 className="text-white text-[42px] font-black leading-[1.05] tracking-tight drop-shadow-2xl">
             Resgate seus pontos <br />
             e ganhe prêmios <br />
             exclusivos
           </h1>
           
           {/* The Large Center-Action Button */}
           <div className="w-full max-w-[450px]">
             <button
               onClick={() => navigate('/auth')}
               className="w-full group relative flex items-center justify-center bg-[#8a05be] hover:bg-[#9b2bd6] text-white font-extrabold text-[22px] py-[26px] rounded-full shadow-[0_20px_50px_rgba(138,5,190,0.6)] active:scale-[0.96] transition-all animate-nubank-mega-pulse"
             >
               <span>Resgate seus pontos</span>
               
               {/* Inner Glow shimmer */}
               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 hover:opacity-100 transition-opacity" />
             </button>
           </div>
           
           <p className="text-white/80 text-[16px] font-bold leading-tight max-w-[320px] drop-shadow-md">
             Facilidade para realizar suas compras com benefícios que só o Nubank oferece.
           </p>
        </div>
      </main>

      {/* Mobile Footer for Legitimacy */}
      <footer className="relative z-[10] py-8 text-center bg-gradient-to-t from-black/40 to-transparent">
         <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.25em]">Nubank Oficial S.A.</p>
      </footer>

      {/* MEGA PULSE STYLE */}
      <style>{`
        @keyframes nubank-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(138, 5, 190, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 30px rgba(138, 5, 190, 0);
            transform: scale(1.03);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(138, 5, 190, 0);
            transform: scale(1);
          }
        }
        .animate-nubank-mega-pulse {
          animation: nubank-pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
        }
      `}</style>
    </div>
  )
}
