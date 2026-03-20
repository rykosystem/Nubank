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
  Loader2
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
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-nukey to-nukey-darker">
      {/* Top bar */}
      <header className="px-5 pt-6 pb-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="w-9 h-9 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/25 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-white font-bold text-lg">NuKey</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pt-4 pb-8 text-center animate-fade-in-up">
        <h1 className="text-2xl font-extrabold text-white mb-2">
          {mode === 'login' ? 'Bem-vindo de volta!' : 'Crie sua conta'}
        </h1>
        <p className="text-white/70 text-sm">
          {mode === 'login'
            ? 'Acesse seus pontos e recompensas.'
            : 'Comece a acumular pontos agora mesmo.'}
        </p>
      </section>

      {/* Form Card */}
      <section className="flex-1 bg-white rounded-t-[2rem] px-5 pt-8 pb-10 animate-fade-in-up delay-200" style={{ animationDelay: '150ms' }}>
        {/* Mode Tabs */}
        <div className="bg-gray-100 rounded-xl p-1 flex mb-6">
          <button
            onClick={() => { setMode('login'); setError(''); setSuccess('') }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              mode === 'login'
                ? 'bg-nukey text-white shadow-md shadow-nukey/30'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => { setMode('signup'); setError(''); setSuccess('') }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              mode === 'signup'
                ? 'bg-nukey text-white shadow-md shadow-nukey/30'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Criar Conta
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name (signup only) */}
          {mode === 'signup' && (
            <div className="animate-fade-in-up">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nukey/30 focus:border-nukey transition-all"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nukey/30 focus:border-nukey transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nukey/30 focus:border-nukey transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl animate-scale-in">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl animate-scale-in">
              {success}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nukey text-white font-bold text-base py-4 rounded-2xl shadow-lg shadow-nukey/30 hover:bg-nukey-dark active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {mode === 'login' ? 'Entrar' : 'Criar Conta'}
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Ao continuar, você aceita nossos{' '}
          <span className="text-nukey font-medium">Termos de Uso</span> e{' '}
          <span className="text-nukey font-medium">Política de Privacidade</span>.
        </p>
      </section>
    </div>
  )
}
