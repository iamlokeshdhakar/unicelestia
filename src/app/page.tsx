import MedicineBox from "@/components/MedicineBox"
import { medicineBoxData } from "@/lib/constant"
import { MessageSquareText, Phone, Pill } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full py-20 px-4  md:px-8">
      <div className="w-full h-screen"></div>
      {/* Medicine Box Section */}
      <div className="flex gap-2 items-center">
        <Pill strokeWidth={2.5} className="text-primaryOrange" size={42} />
        <h2 className=" text-3xl md:text-5xl font-semibold text-primaryBlue">
          Our Products
        </h2>
      </div>
      <div className="flex flex-col gap-8 mt-20 ">
        {medicineBoxData.map((data, i) => {
          return (
            <MedicineBox
              key={i}
              formula={data.formula}
              imgUrl={data.imgUrl}
              tabName={data.tabName}
              tag={data.tag}
              btnClass={data.theme}
              color={data.color}
              bgColor={data.bgColor}
            />
          )
        })}
      </div>

      <div className="w-full mx-auto py-20  rounded-3xl  my-20  bg-primaryBlue text-white px-4">
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
            <button
              className={`px-4 md:px-6 rounded-full py-3 w-fit text-white font-semibold  md:text-lg bg-primaryOrange flex justify-center items-center gap-2`}
            >
              <Phone size={24} strokeWidth={1.5} />
              Call Now
            </button>
            <button
              className={`px-4 md:px-6 rounded-full py-3  w-fit text-white font-semibold  md:text-lg bg-green-500 flex justify-center items-center gap-2`}
            >
              <MessageSquareText size={24} strokeWidth={1.5} />
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
