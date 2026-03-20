import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Sparkles,
  Gift,
  Star,
  ArrowRight,
  Shield,
  TrendingUp,
  Zap,
  ChevronRight,
  Award,
  CreditCard
} from 'lucide-react'

export default function Landing() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const features = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Resgate Fácil',
      description: 'Troque seus pontos por recompensas incríveis com apenas alguns toques.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% Seguro',
      description: 'Seus dados protegidos com criptografia de ponta a ponta.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Acumule Mais',
      description: 'Quanto mais você usa, mais pontos ganha. Benefícios que crescem com você.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instantâneo',
      description: 'Resgates processados em tempo real, sem espera.'
    }
  ]

  const rewards = [
    { icon: <CreditCard />, name: 'Cashback', points: '5.000 pts' },
    { icon: <Gift />, name: 'Vale Compras', points: '12.000 pts' },
    { icon: <Award />, name: 'Experiências', points: '25.000 pts' },
    { icon: <Star />, name: 'Premium', points: '50.000 pts' },
  ]

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-nukey via-nukey-dark to-nukey-darker">
      {/* Header */}
      <header className="px-5 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">NuKey</span>
        </div>
        {user ? (
          <button
            onClick={() => navigate('/dashboard')}
            className="text-sm text-white/90 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full font-medium hover:bg-white/25 transition-all"
          >
            Meu Painel
          </button>
        ) : (
          <Link
            to="/auth"
            className="text-sm text-white/90 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full font-medium hover:bg-white/25 transition-all"
          >
            Entrar
          </Link>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-5 pt-8 pb-12 text-center animate-fade-in-up">
        <div className="animate-float mb-6 inline-block">
          <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-nukey-darker/30">
            <Gift className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-white leading-tight mb-3">
          Programa de <br />Fidelidade <span className="text-nukey-lighter">NuKey</span>
        </h1>
        <p className="text-white/75 text-base leading-relaxed max-w-xs mx-auto mb-8">
          Acumule pontos em todas as suas compras e resgate recompensas exclusivas que fazem a diferença.
        </p>
        <button
          onClick={() => navigate(user ? '/dashboard' : '/auth')}
          className="group bg-white text-nukey font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-2 animate-pulse-glow"
        >
          {user ? 'Acessar Meus Pontos' : 'Começar Agora'}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Stats Bar */}
      <section className="mx-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-8 animate-fade-in-up delay-200" style={{ animationDelay: '200ms' }}>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-2xl font-extrabold text-white">50K+</p>
            <p className="text-xs text-white/60 mt-0.5">Membros</p>
          </div>
          <div className="border-x border-white/15">
            <p className="text-2xl font-extrabold text-white">2M+</p>
            <p className="text-xs text-white/60 mt-0.5">Resgates</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-white">4.9★</p>
            <p className="text-xs text-white/60 mt-0.5">Avaliação</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white rounded-t-[2rem] flex-1 px-5 pt-8 pb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Por que escolher a NuKey?</h2>
        <div className="grid grid-cols-2 gap-3 mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-nukey-surface rounded-2xl p-4 hover:shadow-md hover:shadow-nukey/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 bg-nukey/10 rounded-xl flex items-center justify-center text-nukey mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Rewards Preview */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recompensas Populares</h2>
        <div className="space-y-3 mb-8">
          {rewards.map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-nukey-surface transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-nukey/10 rounded-xl flex items-center justify-center text-nukey">
                  {r.icon}
                </div>
                <span className="font-medium text-sm text-gray-800">{r.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-nukey bg-nukey/10 px-3 py-1 rounded-full">{r.points}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <button
          onClick={() => navigate(user ? '/dashboard' : '/auth')}
          className="w-full bg-nukey text-white font-bold text-base py-4 rounded-2xl shadow-lg shadow-nukey/30 hover:bg-nukey-dark active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Star className="w-5 h-5" />
          {user ? 'Ir para Meus Pontos' : 'Criar Conta Grátis'}
        </button>
      </section>
    </div>
  )
}
