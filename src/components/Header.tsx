import Links from "./buttons/Links";
import ThemeButton from "./buttons/ThemeButton";


export default function Header() {
    return (
        <div className='sticky top-0 shadow-sm z-20'>
            <nav className="flex items-center layout justify-center bg-white transition-colors dark:bg-dark dark:text-white">
            <div className="w-full flex justify-between">
            <ul className='flex flex-row justify-center items-center space-x-6 font-bold'>
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Links href={href}>{label}</Links>
                        </li>
                    ))}
                </ul>
                <ThemeButton />
            </div>
            </nav>
        </div>
    )
}
const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/project', label: 'Projects' },
    { href: '/about', label: 'About' },
];

