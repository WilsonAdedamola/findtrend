import Image from "next/image"

const section2 = () => {
    return (
        <section className="bg-[#FAFAFA] py-24">
            <div className="container mx-auto flex flex-col justify-center items-center px-4 md:px-0">
                <h1 className="text-2xl font-bold text-center md:text-6xl">All platform connect to Findtrend</h1>
                <div className="flex justify-center items-center gap-4 my-14 pb-4 overflow-x-auto">
                    <Image src={'/images/facebook.png'} width={100} height={5} alt="facebook" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/twitter.png'} width={100} height={5} alt="twitter" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/dribble.png'} width={100} height={5} alt="dribble" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/pinterest.png'} width={100} height={5} alt="pinterest" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/mmm.png'} width={100} height={5} alt="mmm" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/reddit.png'} width={100} height={5} alt="reddit" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/vk.png'} width={100} height={5} alt="vk" className="w-16 md:w-auto cursor-pointer"></Image>
                    <Image src={'/images/linkedln.png'} width={100} height={5} alt="linkedln" className="w-16 md:w-auto cursor-pointer"></Image>
                </div>
                <Image src={'/images/tweets.png'} width={700} height={5} alt="tweets"></Image>
                <button className='rounded-full outline-none bg-black font-semibold text-white mt-16 px-4 sm:px-7 py-3'>View More Trend</button>
            </div>
        </section>
    )
}

export default section2
