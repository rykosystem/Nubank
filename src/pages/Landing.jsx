import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Sparkles,
  Gift,
  Star,
  ArrowRight,
  Shield,
  Zap,
  ChevronRight,
  Award,
  CircleDot,
  LayoutGrid
} from 'lucide-react'

export default function Landing() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    { icon: <Gift />, title: 'Resgate Rápido', desc: 'Pontos trocados em segundos.' },
    { icon: <Shield />, title: 'Padrão Bancário', desc: 'Sua segurança em 1º lugar.' },
    { icon: <Zap />, title: 'Vantagens Reais', desc: 'Benefícios que você usa hoje.' },
    { icon: <LayoutGrid />, title: 'Super Catálogo', desc: 'Milhares de itens para você.' }
  ]

  return (
    <div className="min-h-dvh flex flex-col bg-nukey-surface selection:bg-nukey/20">
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 py-4 max-w-md mx-auto flex items-center justify-between ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-nukey rounded-lg flex items-center justify-center shadow-lg shadow-nukey/20 transition-transform hover:scale-105 active:scale-95 duration-200">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>NuKey</span>
        </div>
        
        {user ? (
          <button
            onClick={() => navigate('/dashboard')}
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border-2 active:scale-95 ${
              scrolled ? 'bg-nukey border-nukey text-white hover:bg-nukey-dark hover:border-nukey-dark' : 'bg-white/90 border-transparent text-nukey hover:bg-white shadow-lg'
            }`}
          >
            Dashboard
          </button>
        ) : (
          <Link
            to="/auth"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border-2 active:scale-95 ${
              scrolled ? 'bg-nukey border-nukey text-white' : 'bg-white/90 border-white text-nukey shadow-md hover:bg-white'
            }`}
          >
            Entrar
          </Link>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="px-6 text-center animate-soft-up">
          <div className="mb-6 inline-flex items-center gap-2 bg-nukey-light/10 border border-nukey-light/20 text-nukey-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-float shadow-sm">
            <CircleDot className="w-3 h-3 animate-pulse" /> Novo Programa 2024
          </div>
          
          <h1 className="text-[38px] font-black text-gray-900 leading-[1.1] mb-4 tracking-[-0.03em]">
            Revolucione seu <br />
            <span className="text-nukey">NuKey Card.</span>
          </h1>
          
          <p className="text-gray-500 text-lg leading-snug max-w-[280px] mx-auto mb-8 font-medium">
            Transforme cada transação em recompensas extraordinárias exclusivos para você.
          </p>

          <button
            onClick={() => navigate(user ? '/dashboard' : '/auth')}
            className="w-full bg-nukey hover:bg-nukey-dark text-white font-bold text-lg py-5 px-8 rounded-3xl shadow-xl shadow-nukey/30 hover:shadow-2xl active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-3"
          >
            Começar Agora
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </section>

        {/* Visual Hero Preview */}
        <section className="px-6 pt-12 mb-8 animate-soft-up delay-200" style={{ animationDelay: '150ms' }}>
          <div className="relative p-2 bg-gradient-to-br from-white to-gray-50 rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden aspect-square h-64 flex flex-col justify-end">
             {/* Background shapes */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-nukey/5 blur-3xl -mr-10 -mt-10 rounded-full" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-nukey/10 blur-3xl -ml-10 -mb-10 rounded-full" />
             
             {/* Fake Card Content */}
             <div className="p-5 relative z-10 w-full">
                <div className="bg-nukey rounded-2xl p-5 shadow-2xl animate-float">
                  <div className="flex justify-between items-start mb-6">
                    <Sparkles className="w-6 h-6 text-white/40" />
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Seu Saldo NuKey</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white">124.500</span>
                    <span className="text-white/50 text-xs font-bold">pontos</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Features Box */}
        <section className="bg-white px-6 pt-10 pb-12 rounded-t-[40px] shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black text-gray-900">Vantagens NuKey</h2>
            <Award className="w-6 h-6 text-nukey" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             {features.map((f, i) => (
                <div key={i} className="group p-5 bg-nukey-surface rounded-3xl transition-all duration-300 hover:bg-nukey hover:shadow-xl hover:shadow-nukey/20 animate-soft-up" style={{ animationDelay: `${200 + i * 100}ms` }}>
                  <div className="w-11 h-11 bg-white rounded-2xl shadow-md flex items-center justify-center text-nukey mb-4 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-white transition-colors mb-1">{f.title}</h3>
                  <p className="text-[11px] text-gray-500 font-medium group-hover:text-white/80 transition-colors">{f.desc}</p>
                </div>
             ))}
          </div>

          <div className="mt-10 p-5 bg-gradient-to-r from-nukey-dark to-nukey rounded-3xl shadow-xl flex items-center justify-between text-white active:scale-[0.98] transition-all cursor-pointer">
            <div>
              <p className="text-xs font-bold uppercase opacity-60 tracking-widest mb-1">Cashback de Boas-Vindas</p>
              <h4 className="text-lg font-black">Ganhe até 2.000 pts</h4>
            </div>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Nav Space */}
      <footer className="bg-white pb-8 px-8 text-center">
         <div className="flex justify-center gap-6 text-gray-300 mb-6">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
         </div>
         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">A NuKey é uma marca independente corporativa</p>
      </footer>
    </div>
  )
}
