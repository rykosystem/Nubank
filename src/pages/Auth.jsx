import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Sparkles,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Loader2,
  CircleCheck,
  Zap,
  ChevronRight
} from 'lucide-react'

export default function Auth() {
  const [mode, setMode] = useState('login') // login | signup
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()
  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password)
        if (error) throw error
        navigate('/dashboard')
      } else {
        const { error } = await signUp(email, password, name)
        if (error) throw error
        setSuccess('Conta criada! Verifique seu e-mail para confirmar o cadastro.')
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* Top Section - Brand Gradient */}
      <section className="bg-gradient-to-br from-nukey to-nukey-darker px-8 pt-10 pb-16 rounded-b-[48px] shadow-2xl shadow-nukey/20 relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-nukey-light/30 blur-[60px] -ml-20 -mb-20 rounded-full" />
        
        <header className="flex items-center justify-between mb-12 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="w-11 h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-nukey-lighter" />
            <span className="text-white font-black text-xl tracking-tight">NuKey</span>
          </div>
        </header>

        <div className="animate-soft-up relative z-10">
          <h1 className="text-4xl font-black text-white leading-tight mb-3">
            {mode === 'login' ? 'Bem-vindo de volta.' : 'Crie seu perfil.'}
          </h1>
          <p className="text-white/70 text-lg font-medium">
            Seus pontos estão te esperando.
          </p>
        </div>
      </section>

      {/* Auth Content */}
      <section className="flex-1 px-8 -mt-10 mb-10">
         {/* Glassmorphism Card Wrapper */}
         <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[40px] shadow-2xl p-8 animate-soft-up delay-200">
            {/* Custom Segmented Picker */}
            <div className="flex bg-gray-100/80 rounded-2xl p-1.5 mb-8">
               <button
                  onClick={() => { setMode('login'); setError(''); setSuccess('') }}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    mode === 'login' ? 'bg-white text-nukey shadow-lg shadow-black/5' : 'text-gray-400 hover:text-gray-600'
                  }`}
               >
                  Acessar
               </button>
               <button
                  onClick={() => { setMode('signup'); setError(''); setSuccess('') }}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    mode === 'signup' ? 'bg-white text-nukey shadow-lg shadow-black/5' : 'text-gray-400 hover:text-gray-600'
                  }`}
               >
                  Cadastrar
               </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {mode === 'signup' && (
                <div className="animate-soft-up">
                  <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-nukey transition-colors" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome Completo"
                      required
                      className="w-full pl-16 pr-6 py-5 bg-gray-50/50 border border-gray-100 rounded-3xl text-sm font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-nukey/5 focus:border-nukey/40 transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-nukey transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full pl-16 pr-6 py-5 bg-gray-50/50 border border-gray-100 rounded-3xl text-sm font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-nukey/5 focus:border-nukey/40 transition-all"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-nukey transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha exclusiva"
                  required
                  minLength={6}
                  className="w-full pl-16 pr-14 py-5 bg-gray-50/50 border border-gray-100 rounded-3xl text-sm font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-nukey/5 focus:border-nukey/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-2xl flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                   {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-100 text-green-700 text-[11px] font-black uppercase tracking-widest px-5 py-4 rounded-2xl flex items-center gap-3">
                   <CircleCheck className="w-4 h-4" />
                   {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-nukey hover:bg-nukey-dark text-white font-black text-lg py-5 rounded-3xl shadow-xl shadow-nukey/30 hover:shadow-2xl active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <span>Confirmar</span>}
              </button>
            </form>
         </div>
         
         <div className="mt-10 text-center animate-soft-up" style={{ animationDelay: '400ms' }}>
            <div className="inline-flex items-center gap-2 text-nukey font-black text-[10px] uppercase tracking-widest bg-nukey/5 px-4 py-2 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5 fill-current" /> Acesso 100% Criptografado
            </div>
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
               Segurança por <span className="text-gray-400">NuKey Trust Network</span>
            </p>
         </div>
      </section>
    </div>
  )
}
