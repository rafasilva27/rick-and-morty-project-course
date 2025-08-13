export const useTheme = () => {
  const isDark = useState('theme.isDark', () => false)

  const setTheme = (theme) => {
    isDark.value = theme === 'dark'
    
    if (process.client) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }
  }

  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') || 'light'
      setTheme(savedTheme)
    }
  }

  // Exporta as funções e variáveis para o uso em outros componentes
  return {
    isDark: readonly(isDark),
    setTheme,
    toggleTheme,
    initTheme
  }
}