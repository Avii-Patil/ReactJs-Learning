import { Link, useLocation } from 'react-router-dom'

function Navbar({ theme, toggleTheme }) {
  const location = useLocation()

  return (
    <nav className={`sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-md ${
      theme === 'dark' ? 'bg-gray-900 border-b border-gray-800' : 'bg-white border-b border-slate-200'
    }`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">📖</span>
        <span className="text-xl font-bold tracking-tight">WordWise</span>
      </div>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
            location.pathname === '/'
              ? 'border-violet-500 text-violet-500'
              : theme === 'dark'
              ? 'border-transparent text-gray-400 hover:text-white'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          Search
        </Link>
        <Link
          to="/history"
          className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
            location.pathname === '/history'
              ? 'border-violet-500 text-violet-500'
              : theme === 'dark'
              ? 'border-transparent text-gray-400 hover:text-white'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          History
        </Link>

        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-slate-100 hover:bg-slate-200'
          }`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar