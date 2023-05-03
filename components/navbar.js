import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'



const navbar = () => {
    return (
        <>
            <MobileNav />
            <nav className=' hidden bg-black py-6 none text-xl xl:text-2xl lg:flex'>
                <div className=" flex container mx-auto justify-between items-center text-white">
                    <div className="desktop-logo cursor-pointer">
                        <Image src={'/images/DesktopLogo.png'} alt='Logo' width={200} height={20}></Image>
                    </div>
                    <ul className='flex justify-between gap-8 xl:gap-12'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>How it work</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Solution</li>
                        <li className='cursor-pointer'>Features</li>
                    </ul>
                    <div className="flex items-center gap-10">
                        <button className='outline-none'>Login</button>
                        <button className='rounded-full outline-none bg-white text-black px-7 py-3'>Register</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar

function MobileNav() {

    const [toggle, setToggle] = useState(false)
    function handleToggle() {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <nav className='bg-black py-4 px-4 sm:px-0 lg:hidden'>
            <div className="container mx-auto flex justify-between items-center">
                <div className="mobile-logo cursor-pointer">
                    <Image src={'/images/MobileLogo.png'} alt='Logo' width={40} height={0} className='sm:w-12'></Image>
                </div>
                <div className="ham text-3xl text-white">
                    {!toggle && <HiOutlineMenuAlt4 onClick={handleToggle} />}
                    {toggle && <VscChromeClose onClick={handleToggle} />}
                </div>
            </div>
            {toggle && <div className="flex flex-col gap-8 justify-center items-center pt-20 pb-7">
                <ul className='flex flex-col justify-between items-center gap-8 text-white text-xl sm:text-2xl'>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>How it work</li>
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Solution</li>
                    <li className='cursor-pointer'>Features</li>
                </ul>
                <div className="flex flex-col justify-center items-center gap-6 text-xl sm:text-2xl">
                    <button className='outline-none text-white'>Login</button>
                    <button className='rounded-full outline-none bg-white text-black px-8 py-2'>Register</button>
                </div>
            </div>}
        </nav>
    )
}
