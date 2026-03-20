import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import bannerImg from '../assets/banner.jpg'
import logoImg from '../assets/logo.png'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div
      className="relative h-dvh w-full flex flex-col p-5 box-border bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-[1]" />

      {/* Navbar */}
      <header className="relative z-[2] flex items-center justify-between">
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

      {/* Main Content - pushed to bottom with mt-auto */}
      <main className="relative z-[2] mt-auto mb-5">
        <h1 className="text-white text-[2.5rem] font-bold leading-[1.08] mb-5">
          Resgate seus pontos e ganhe prêmios exclusivos
        </h1>
        <button
          onClick={() => navigate('/auth')}
          className="bg-[#8a05be] text-white text-[14px] font-bold py-[14px] px-8 rounded-full"
        >
          Resgatar agora
        </button>
      </main>

      {/* Signup Card */}
      <section className="relative z-[2] bg-white rounded-[24px] p-6 mt-5">
        <h3 className="text-[18px] font-bold text-[#1a1a1a] leading-tight mb-4">
          Resgate seus pontos do cartão Nubank
        </h3>
        <input
          type="text"
          placeholder="Digite seu CPF"
          className="w-full p-[15px] bg-[#f4f4f4] border-none rounded-[12px] my-[10px] text-[15px] outline-none"
        />
        <button
          onClick={() => navigate('/auth')}
          className="w-full bg-[#8a05be] text-white font-bold p-[15px] rounded-[30px] flex items-center justify-between text-[16px] border-none"
        >
          <span>Continuar</span>
          <span className="text-xl">›</span>
        </button>
      </section>
    </div>
  )
}
