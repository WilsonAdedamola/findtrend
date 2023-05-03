import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Section1 from "@/components/section1"
import Brands from "@/components/brands"
import Section2 from "@/components/section2"
import Deals from "@/components/deals"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Hero></Hero>
      <Section1></Section1>
      <Brands></Brands>
      <Section2></Section2>
      <Deals></Deals>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
