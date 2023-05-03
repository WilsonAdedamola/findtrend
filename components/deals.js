import Image from "next/image"
import { GrFormCheckmark } from "react-icons/gr"
import styles from '../styles/deals.module.css'

const deals = () => {
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto flex flex-col justify-center items-center px-4 md:px-0">
        <h1 className="font-bold text-white text-3xl md:text-6xl">Get your best deal</h1>
        <div className="flex my-16 flex-wrap gap-8 justify-center items-center">
          <p className="text-xl text-white">Monthly</p>
          <div className=" rounded-full relative p-1 w-16 h-8 bg-white">
            <div className="absolute rounded-full w-6 h-6 left-1 bg-[#A8FF35]"></div>
          </div>
          <p className="text-xl text-gray-500">Yearly</p>
          <Image src={'/images/deal-img.png'} width={90} height={5} alt="Deals"></Image>
        </div>
        <div className="flex flex-col flex-wrap gap-4 justify-center items-center md:flex-row">
          <div className="flex flex-col justify-center bg-white rounded-xl pb-6 px-4">
            <div className={styles.card}>
              <p className="text-4xl mb-2 font-semibold">Personal</p>
              <p className="text-sm mb-4 font-semibold">Special first packet for all</p>
              <hr className="border w-full" />
              <p className="my-8 text-6xl font-bold">$8<span className="text-xl font-normal"> /month</span></p>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Up to 5 page each group</p></div>
              <div className="flex items-center justify-center gap-2 my-5"><GrFormCheckmark></GrFormCheckmark><p>Up to 10 group page</p></div>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>5 Days group page saved</p></div>
            </div>
            <div className="div">
              <p className="bg-[#A8FF35] text-center w-full rounded-full py-3 font-semibold">Start Free Trial</p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#A8FF35] rounded-xl pb-6 px-4">
            <div className={styles.card}>
              <p className="text-4xl mb-2 font-semibold">Regular</p>
              <p className="text-sm mb-4 font-semibold">Recommended for personal pro</p>
              <hr className="border w-full bg-black" />
              <p className="my-8 text-6xl font-bold">$20<span className="text-xl font-normal"> /month</span></p>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Up to 15 page each group</p></div>
              <div className="flex items-center justify-center gap-2 my-5"><GrFormCheckmark></GrFormCheckmark><p>Download page up to 20 page</p></div>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Up to 10 group page</p></div>
              <div className="flex items-center justify-center gap-2 mt-5"><GrFormCheckmark></GrFormCheckmark><p>15 Days group page saved</p></div>
            </div>
            <div className="div">
              <p className="bg-black text-white text-center w-full rounded-full py-3 font-semibold">Start Free Trial</p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white rounded-xl pb-6 px-4">
            <div className={styles.card}>
              <p className="text-4xl mb-2 font-semibold">Premium</p>
              <p className="text-sm mb-4 font-semibold">Packet for Startup & Company</p>
              <hr className="border w-full bg-black" />
              <p className="my-8 text-6xl font-bold">$48<span className="text-xl font-normal"> /month</span></p>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Unlimited group pages</p></div>
              <div className="flex items-center justify-center gap-2 my-5"><GrFormCheckmark></GrFormCheckmark><p>Unlimited download page</p></div>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Unlimited page each group</p></div>
              <div className="flex items-center justify-center gap-2 my-5"><GrFormCheckmark></GrFormCheckmark><p>Customize sorting group pages</p></div>
              <div className="flex items-center justify-center gap-2"><GrFormCheckmark></GrFormCheckmark><p>Customize group page name</p></div>
              <div className="flex items-center justify-center gap-2 mt-5"><GrFormCheckmark></GrFormCheckmark><p>30 Days group page saved</p></div>
            </div>
            <div className="div">
              <p className="bg-[#A8FF35] text-center w-full rounded-full py-3 font-semibold">Start Free Trial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default deals
