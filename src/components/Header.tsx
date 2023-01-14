import Links from "./buttons/Links";
import ThemeButton from "./buttons/ThemeButton";
import TechIcons, { TechListType } from "./icons/TechIcon";


export default function Header() {
    return (
        <div className='flex items-center overflow-hidden sticky top-0 layout justify-center'>
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
                
        </div>
    )
}
const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/project', label: 'Projects' },
    { href: '/about', label: 'About' },
];

