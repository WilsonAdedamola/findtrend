import Image from "next/image"

const brands = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center md:px-0">
                <h1 className="text-4xl font-bold mb-32 md:text-6xl">{"Findtrend helps you to increase your productivity and reduce your computer's memory load,"} <span className="text-gray-300">an application that can fulfill your daily browsing needs.</span></h1>
                <h1 className="text-3xl font-bold text-center md:text-6xl">Findtrend make +1000 Startup grow</h1>
                <div className="grid grid-cols-2 mt-16 gap-6 md:gap-8 md:grid-cols-4">
                    <Image src={'/images/microsoft.png'} width={250} height={5} alt="microsoft"></Image>
                    <Image src={'/images/allianz.png'} width={250} height={5} alt="allianz"></Image>
                    <Image src={'/images/upwork.png'} width={250} height={5} alt="upwork"></Image>
                    <Image src={'/images/volvo.png'} width={250} height={5} alt="volvo"></Image>
                    <Image src={'/images/grab.png'} width={250} height={5} alt="grab"></Image>
                    <Image src={'/images/verizon.png'} width={250} height={5} alt="verizon"></Image>
                    <Image src={'/images/coinbase.png'} width={250} height={5} alt="coinbase"></Image>
                    <Image src={'/images/expedia.png'} width={250} height={5} alt="expedia"></Image>
                    <Image src={'/images/airtable.png'} width={250} height={5} alt="airtable"></Image>
                    <Image src={'/images/magento.png'} width={250} height={5} alt="magento"></Image>
                    <Image src={'/images/carrera.png'} width={250} height={5} alt="carrera"></Image>
                    <Image src={'/images/bonanza.png'} width={250} height={5} alt="bonanza"></Image>
                    <Image src={'/images/wetransfer.png'} width={250} height={5} alt="wetransfer"></Image>
                    <Image src={'/images/suzuki.png'} width={250} height={5} alt="suzuki"></Image>
                    <Image src={'/images/algolia.png'} width={250} height={5} alt="algolia"></Image>
                    <Image src={'/images/heineken.png'} width={250} height={5} alt="heineken"></Image>
                </div>
            </div>
        </section>
    )
}

export default brands
