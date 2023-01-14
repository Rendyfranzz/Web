import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes';
const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <button className='transition-all duration-300 p-2' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'light' ? <FaMoon size={40} /> : <FaSun size={40} />}
            </button>
        </>
    )
}

export default ThemeButton