import Image from "next/image"

const footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className=" container mx-auto flex flex-col justify-center items-center px-4 md:px-4 md:flex-row md:justify-between">
                <div className="logo">
                    <Image src={'/images/footerlogo.png'} width={200} height={5} alt="Logo"></Image>
                </div>
                <div className="mt-12 md:mt-0">
                    <ul className='flex flex-col gap-6 justify-center items-center text-center text-xl md:gap-3 md:flex-row'>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Terms and Conditions</li>
                        <li className='cursor-pointer'>Contact Us</li>
                        <li className='cursor-pointer'>Careers</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer
