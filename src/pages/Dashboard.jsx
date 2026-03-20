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
  Coffee
} from 'lucide-react'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [points] = useState(12450)
  const [showLogout, setShowLogout] = useState(false)

  useEffect(() => {
    if (!user) navigate('/auth')
  }, [user, navigate])

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Usuário'

  const quickActions = [
    { icon: <Gift className="w-5 h-5" />, label: 'Resgatar', color: 'bg-nukey/10 text-nukey' },
    { icon: <History className="w-5 h-5" />, label: 'Histórico', color: 'bg-blue-50 text-blue-600' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Loja', color: 'bg-orange-50 text-orange-600' },
    { icon: <Bell className="w-5 h-5" />, label: 'Alertas', color: 'bg-green-50 text-green-600' },
  ]

  const recentActivity = [
    { title: 'Compra Online', points: '+250', date: 'Hoje', icon: <ShoppingBag className="w-4 h-4" /> },
    { title: 'Bônus Semanal', points: '+500', date: 'Ontem', icon: <Star className="w-4 h-4" /> },
    { title: 'Resgate Cashback', points: '-2.000', date: '18 Mar', icon: <CreditCard className="w-4 h-4" /> },
    { title: 'Indicação Amigo', points: '+1.000', date: '15 Mar', icon: <User className="w-4 h-4" /> },
  ]

  const rewards = [
    { icon: <Coffee />, name: 'Café Premium', points: '2.500', category: 'Gastronomia' },
    { icon: <Ticket />, name: 'Cinema 2 Lugares', points: '5.000', category: 'Entretenimento' },
    { icon: <Gem />, name: 'Desconto 20%', points: '8.000', category: 'Compras' },
    { icon: <Crown />, name: 'Upgrade VIP', points: '15.000', category: 'Exclusivo' },
  ]

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const getLevelInfo = (pts) => {
    if (pts >= 50000) return { name: 'Diamond', color: 'from-cyan-400 to-blue-500', next: null, progress: 100 }
    if (pts >= 25000) return { name: 'Platinum', color: 'from-gray-300 to-gray-500', next: 50000, progress: ((pts - 25000) / 25000) * 100 }
    if (pts >= 10000) return { name: 'Gold', color: 'from-yellow-400 to-amber-500', next: 25000, progress: ((pts - 10000) / 15000) * 100 }
    if (pts >= 5000) return { name: 'Silver', color: 'from-gray-200 to-gray-400', next: 10000, progress: ((pts - 5000) / 5000) * 100 }
    return { name: 'Bronze', color: 'from-orange-300 to-orange-500', next: 5000, progress: (pts / 5000) * 100 }
  }

  const level = getLevelInfo(points)

  if (!user) return null

  return (
    <div className="min-h-dvh flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-nukey via-nukey to-nukey-dark px-5 pt-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">NuKey</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLogout(!showLogout)}
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <User className="w-4.5 h-4.5" />
            </button>
            {showLogout && (
              <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl shadow-black/10 p-2 w-40 animate-scale-in z-50">
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sair da Conta
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Greeting */}
        <div className="animate-fade-in-up">
          <p className="text-white/70 text-sm mb-0.5">Olá,</p>
          <h1 className="text-2xl font-extrabold text-white mb-4">{userName} 👋</h1>
        </div>

        {/* Points Card */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/70 text-sm font-medium">Seus Pontos</p>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${level.color} text-white`}>
              {level.name}
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-extrabold text-white">{points.toLocaleString('pt-BR')}</span>
            <span className="text-white/60 text-sm font-medium">pts</span>
          </div>
          {level.next && (
            <div>
              <div className="flex justify-between text-xs text-white/60 mb-1.5">
                <span>Próximo nível</span>
                <span>{level.next.toLocaleString('pt-BR')} pts</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${level.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Quick Actions */}
      <section className="px-5 -mt-4 mb-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-4 flex justify-between animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {quickActions.map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5 group">
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                {action.icon}
              </div>
              <span className="text-xs font-medium text-gray-600">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="px-5 flex-1 pb-8">
        {/* Recent Activity */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Atividade Recente</h2>
            <button className="text-xs text-nukey font-semibold flex items-center gap-0.5 hover:underline">
              Ver tudo <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-2">
            {recentActivity.map((activity, i) => (
              <div key={i} className="bg-white rounded-xl p-3.5 flex items-center justify-between hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-nukey-surface rounded-lg flex items-center justify-center text-nukey">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{activity.title}</p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${activity.points.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                  {activity.points}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Resgatar Recompensas</h2>
            <button className="text-xs text-nukey font-semibold flex items-center gap-0.5 hover:underline">
              Catálogo <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {rewards.map((reward, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 hover:shadow-md hover:shadow-nukey/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-nukey-surface rounded-xl flex items-center justify-center text-nukey mb-3 group-hover:scale-110 transition-transform">
                  {reward.icon}
                </div>
                <p className="text-xs text-gray-400 mb-0.5">{reward.category}</p>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{reward.name}</h3>
                <span className="text-xs font-bold text-nukey bg-nukey/10 px-2.5 py-1 rounded-full">
                  {reward.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="bg-white border-t border-gray-100 px-5 py-3 flex justify-around sticky bottom-0">
        {[
          { icon: <TrendingUp className="w-5 h-5" />, label: 'Início', active: true },
          { icon: <Gift className="w-5 h-5" />, label: 'Resgates', active: false },
          { icon: <Award className="w-5 h-5" />, label: 'Ranking', active: false },
          { icon: <User className="w-5 h-5" />, label: 'Perfil', active: false },
        ].map((item, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-0.5 ${
              item.active ? 'text-nukey' : 'text-gray-400'
            } transition-colors`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
            {item.active && <div className="w-1 h-1 bg-nukey rounded-full mt-0.5" />}
          </button>
        ))}
      </nav>
    </div>
  )
}
