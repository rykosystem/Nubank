import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Sparkles,
  Gift,
  Star,
  TrendingUp,
  Award,
  CreditCard,
  ChevronRight,
  LogOut,
  User,
  Bell,
  History,
  ShoppingBag,
  Gem,
  Crown,
  Ticket,
  Coffee,
  Wallet,
  Settings,
  CircleCheck,
  Zap
} from 'lucide-react'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [points] = useState(124500)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    if (!user) navigate('/auth')
  }, [user, navigate])

  const userName = user?.user_metadata?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Usuário'

  const quickActions = [
    { icon: <Wallet className="w-6 h-6" />, label: 'Resgatar', active: true },
    { icon: <History className="w-6 h-6" />, label: 'Extrato' },
    { icon: <ShoppingBag className="w-6 h-6" />, label: 'Vantagens' },
    { icon: <Settings className="w-6 h-6" />, label: 'Perfil' },
  ]

  const rewards = [
    { icon: <Coffee />, name: 'Café Premium', points: '2.5k', color: 'bg-orange-50/50' },
    { icon: <Ticket />, name: 'Cinema 2D', points: '5k', color: 'bg-blue-50/50' },
    { icon: <Gem />, name: 'Desconto 30%', points: '12k', color: 'bg-green-50/50' },
    { icon: <Crown />, name: 'VIP NuKey', points: '50k', color: 'bg-purple-50/50' },
  ]

  const getLevelInfo = (pts) => {
    if (pts >= 100000) return { name: 'Diamond VIP', color: 'from-blue-600 to-cyan-400', progress: 100 }
    if (pts >= 50000) return { name: 'Platinum', color: 'from-gray-700 to-gray-500', progress: ((pts - 50000) / 50000) * 100 }
    return { name: 'Gold Member', color: 'from-amber-500 to-yellow-300', progress: (pts / 50000) * 100 }
  }

  const level = getLevelInfo(points)

  if (!user) return null

  return (
    <div className="min-h-dvh flex flex-col bg-[#FDFDFD] pb-32">
      {/* Dynamic Top Bar */}
      <header className="px-6 pt-8 pb-4 flex items-center justify-between z-20">
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-0.5">Olá, {level.name}</p>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">{userName} 👋</h1>
        </div>
        <div className="flex items-center gap-3">
           <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-nukey transition-colors">
             <Bell className="w-5 h-5" />
           </div>
           <button 
             onClick={() => signOut()}
             className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors"
           >
             <LogOut className="w-5 h-5" />
           </button>
        </div>
      </header>

      {/* Main Points Card - High Contrast */}
      <section className="px-6 mb-10 animate-soft-up">
        <div className={`p-8 rounded-[40px] bg-gradient-to-br ${level.color} shadow-2xl shadow-nukey/40 overflow-hidden relative group`}>
           <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:scale-110 transition-transform duration-500">
             <Sparkles className="w-16 h-16 text-white" />
           </div>
           
           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-current" /> Plano Ativo
              </div>
              
              <div className="flex flex-col gap-1 mb-8">
                <span className="text-white/70 text-sm font-semibold">Total de Pontos Acumulados</span>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-5xl font-black text-white">{points.toLocaleString('pt-BR')}</h2>
                  <span className="text-white/50 font-bold mb-1">pts</span>
                </div>
              </div>

              <button className="w-full bg-white text-gray-900 font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xl shadow-black/10">
                Resgatar Agora
                <Zap className="w-5 h-5" />
              </button>
           </div>
        </div>
      </section>

      {/* Grid Layout Actions */}
      <section className="px-6 mb-10 animate-soft-up delay-200" style={{ animationDelay: '200ms' }}>
         <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
               <button key={i} className="flex flex-col items-center gap-3 group">
                  <div className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-300 ${
                    action.active ? 'bg-nukey text-white shadow-xl shadow-nukey/40' : 'bg-gray-50 text-gray-400 group-hover:bg-nukey/5 group-hover:text-nukey group-hover:scale-105'
                  }`}>
                    {action.icon}
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-widest ${action.active ? 'text-nukey' : 'text-gray-400'}`}>
                    {action.label}
                  </span>
               </button>
            ))}
         </div>
      </section>

      {/* Catálogo Section */}
      <section className="bg-white rounded-t-[48px] px-8 pt-12 pb-10 border-t border-gray-100 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.08)]">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">Melhores Trocas</h3>
            <button className="text-nukey font-black text-xs uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 hover:bg-nukey/5 rounded-full transition-colors">
              Ver Catálogo <ChevronRight className="w-4 h-4" />
            </button>
         </div>

         <div className="grid grid-cols-2 gap-5 mb-10">
            {rewards.map((reward, i) => (
              <div key={i} className={`${reward.color} rounded-[32px] p-6 border border-white/40 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group`}>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-nukey mb-4 shadow-sm group-hover:rotate-12 transition-transform">
                  {reward.icon}
                </div>
                <h4 className="text-sm font-black text-gray-900 mb-1">{reward.name}</h4>
                <div className="flex items-center gap-1 text-nukey font-black">
                   <span className="text-xs">{reward.points}</span>
                   <span className="text-[10px] opacity-40 uppercase tracking-widest">pts</span>
                </div>
              </div>
            ))}
         </div>

         <div className="bg-nukey-surface rounded-[32px] p-6 flex items-center justify-between border border-nukey/10 hover:border-nukey/30 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm">
                  <CircleCheck className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Dica NuKey</p>
                  <h5 className="text-sm font-black text-gray-900">Seu perfil está 100% verificado</h5>
               </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300" />
         </div>
      </section>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-6 left-6 right-6 z-50 animate-soft-up backdrop-blur-2xl bg-white/80 border border-white shadow-2xl rounded-[32px] px-8 py-5 flex items-center justify-between max-w-[360px] mx-auto">
         {[
           { icon: <LayoutGrid />, key: 'home', active: true },
           { icon: <CreditCard />, key: 'card' },
           { icon: <Gift />, key: 'rewards' },
           { icon: <User />, key: 'user' }
         ].map((item) => (
           <button 
             key={item.key}
             onClick={() => setActiveTab(item.key)}
             className={`transition-all duration-300 relative ${
               item.active ? 'text-nukey' : 'text-gray-300 hover:text-nukey/40'
             }`}
           >
              <div className={`transition-all duration-300 ${item.active ? 'scale-110' : 'scale-100'}`}>
                {item.icon}
              </div>
              {item.active && (
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-nukey rounded-full shadow-[0_0_8px_#820AD1]" />
              )}
           </button>
         ))}
      </nav>
    </div>
  )
}
