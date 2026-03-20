import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      className="relative h-dvh w-full flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-[1]" />

      {/* Navbar */}
      <header className="relative z-[2] flex items-center justify-between px-5 py-4">
        <img src={logoImg} alt="Nubank Logo" className="h-7 w-auto" />
        <button className="bg-[#8a05be] text-white text-[12px] font-bold px-5 py-[10px] rounded-full">
          Quero ser Nubank
        </button>
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-white stroke-[2.5]" />
          <div className="flex flex-col gap-[4px]">
            <div className="w-[22px] h-[2px] bg-white rounded-full" />
            <div className="w-[22px] h-[2px] bg-white rounded-full" />
          </div>
        </div>
      </header>

      {/* Spacer to push content down */}
      <div className="flex-1" />

      {/* Title */}
      <div className="relative z-[2] px-6 mb-6">
        <h1 className="text-white text-[34px] font-bold leading-[1.08]">
          Resgate seus pontos e ganhe prêmios exclusivos
        </h1>
        <p className="text-white/70 text-[14px] mt-3 leading-relaxed">
          Facilidade para realizar suas compras com vantagens e benefícios exclusivos.
        </p>
      </div>

      {/* Botão Pulsante Centralizado */}
      <div className="relative z-[2] flex justify-center px-6 pb-14">
        <button
          onClick={() => navigate('/auth')}
          className="animate-pulse-btn bg-[#8a05be] hover:bg-[#9b2bd6] text-white font-bold text-[17px] py-5 px-14 rounded-full shadow-[0_0_30px_rgba(138,5,190,0.5)] active:scale-[0.96] transition-transform"
        >
          Resgate seus pontos
        </button>
      </div>

      <style>{`
        @keyframes pulse-btn {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(138, 5, 190, 0.5);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(138, 5, 190, 0);
          }
        }
        .animate-pulse-btn {
          animation: pulse-btn 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
