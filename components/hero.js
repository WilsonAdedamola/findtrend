import Image from "next/image";

export default function hero() {
    return (
        <section className="bg-black text-white">
            <div className="container flex justify-center items-center flex-col mx-auto py-16 px-4 md:px-0">
                <div className="text-center container">
                    <h1 className=" text-3xl font-bold md:text-6xl">Minimize your tabs.</h1>
                    <h1 className='text-3xl font-bold mt-3 md:text-6xl'>Find the trend!</h1>
                    <p className="text-gray-500 mt-5">Don’t let your computer memories consumes all of those browser tabs.</p>
                    <p className="text-gray-500 mb-5">Findtrend let you gathers all of your favorite website into one place.</p>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <button className='rounded-full outline-none bg-[#A8FF35] font-bold text-black px-7 py-3'>Get Started</button>
                    <Image src={'/images/hero-cta-img.png'} alt="get started" width={100} height={5} className="hidden md:block"></Image>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row pt-16">
                    <Image src={'/images/herotag1.png'} alt="social" width={300} height={5}></Image>
                    <Image src={'/images/herotag2.png'} alt="social" width={300} height={5} className="md:mt-28 md:-ml-28"></Image>
                    <Image src={'/images/herotag3.png'} alt="social" width={300} height={5} className="md:-ml-28"></Image>
                    <Image src={'/images/herotag4.png'} alt="social" width={300} height={5} className="md:mt-28 md:-ml-28"></Image>
                </div>
            </div>
        </section>
    )
}
