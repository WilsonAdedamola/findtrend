import Image from "next/image"

const section1 = () => {
    return (
        <section className="py-32 bg-[#A8FF35]">
            <div className="container mx-auto flex flex-col justify-center items-center px-4 md:px-0">
                <h1 className="text-2xl font-bold mb-16 sm:text-4xl md:text-7xl">Open new tabs is sh*t</h1>
                <div className="flex flex-col justify-center items-center mb-16 md:gap-4 md:flex-row">
                    <Image src={'/images/left-img.png'} width={100} height={5} alt="new tab" className=" hidden md:block"></Image>
                    <Image src={'/images/mobile-right-img.png'} width={100} height={5} alt="new tab" className=" block self-end md:hidden"></Image>
                    <div className=" p-16 bg-[#F5F5F5] rounded-md">
                        <Image src={'/images/mid-img.png'} width={400} height={5} alt="new tab"></Image>
                    </div>
                    <Image src={'/images/right-img.png'} width={100} height={5} alt="new tab" className=" hidden md:block"></Image>
                    <Image src={'/images/mobile-left-img.png'} width={100} height={5} alt="new tab" className=" self-start block md:hidden"></Image>
                </div>
                <p className="text-xl max-w-3xl text-center font-semibold">A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
            </div>
        </section>
    )
}

export default section1
