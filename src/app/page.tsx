import { HeroSection } from "@/components/HeroSection"
import MedicineBox from "@/components/MedicineBox"
import { InfiniteSlider } from "@/components/Scroll"
import { medicineBoxData } from "@/lib/constant"
import { MessageSquareText, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <InfiniteSlider />
      {/* Medicine Box Section */}
      <div
        id="products"
        className="flex gap-2 items-center w-full justify-center mt-28 flex-col"
      >
        <h2 className=" text-4xl md:text-6xl text-center font-bold ">
          Our Products
        </h2>
        <p className="max-w-[500px] text-center">
          At the heart of our mission lies a diverse range of innovative
          products designed to enhance your everyday life.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-20 px-8 md:px-20 ">
        {medicineBoxData.map((data, i) => {
          return (
            <MedicineBox
              key={i}
              formula={data.formula}
              imgUrl={data.imgUrl}
              tabName={data.tabName}
              tag={data.tag}
            />
          )
        })}
      </div>

      <div className="w-full mx-auto py-20 my-20  bg-primaryBlue text-white px-4 bg-gradient-to-b from-primaryBlue to-primaryBlueHover">
        <div className="flex mx-auto flex-col w-full lg:w-1/2 justify-center items-center gap-10">
          <div>
            <h2 className="font-semibold text-2xl md:text-5xl text-center">
              Get in touch with
            </h2>
            <h2 className="font-semibold text-2xl md:text-5xl text-center">
              us with any questions
            </h2>
          </div>
          <p className="text-center">
            {`We're here to help! Whether you have questions about our products,
            services, or partnerships, feel free to reach out. Our team is ready
            to assist you with all the information you need. Let's connect and
            ensure you get the support you deserve.`}
          </p>
          <div className="flex gap-6 flex-wrap justify-center items-center">
            <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryOrange px-4 py-2 font-medium transition bg-primaryOrange text-white">
              <span>
                <Phone size={20} strokeWidth={1.5} />
              </span>
              <span> Call Now </span>
            </button>

            <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-green-500 px-4 py-2 font-medium transition bg-green-500 hover:text-white">
              <span>
                <MessageSquareText size={20} strokeWidth={1.5} />
              </span>
              <span> Whatsapp </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-fit w-full ">
        <svg
          className="inline-block fill-current w-full h-auto text-primaryBlue"
          viewBox="0 0 1440 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
        </svg>
      </div>
    </div>
  )
}
