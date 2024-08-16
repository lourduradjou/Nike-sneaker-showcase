import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Navbar = () => {
	return (
		<header className='padding-x py-6 absolute z-20 w-full bg-slate-100 '>
			<nav className='flex max-container items-center justify-between xl:pl-16'>
				<a href='/'>
					<img src={headerLogo} alt='logo' width={130} height={30} />
				</a>

				<div>
					<ul className=' flex-1 gap-16 text-slate-gray items-center justify-center hidden lg:flex'>
						{navLinks.map((link) => (
							<li
								key={link.label}
								className='font-montserrat leading-7 text-lg hovertext'
							>
								<a href={link.href}>{link.label}</a>
							</li>
						))}
						<li className='bg-slate-300 text-black px-4 py-2'>
							Sign Up / Login
						</li>
					</ul>
					<div className='lg:hidden '>
						<img
							src={hamburger}
							alt='hamburger'
							width={25}
							height={25}
						/>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
