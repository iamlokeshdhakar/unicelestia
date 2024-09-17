import MyButtons from "@/components/Buttons"
import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full py-36">
      <div className="flex flex-col gap-8 px-4 md:px-8">
        <div
          className={`w-full h-fit md:h-[450px] bg-[#0c86b63b] flex flex-col md:flex-row overflow-hidden rounded-xl`}
        >
          <div className=" w-full d:w-1/2 h-full  p-6 md:p-12 flex flex-col justify-center gap-3">
            <p className="bg-white border-2 border-primaryBlue rounded-full w-fit px-2 py-1 text-xs text-primaryBlue font-semibold font-sans">
              TABLETS
            </p>
            <h2 className="text-2xl md:text-3xl text-black">
              Aceclofenac, Paracetamol & Serratiopeptidase Tablets
            </h2>
            <p className="text-2xl font-semibold">TEDFLAM-SP</p>
            <MyButtons
              title="View details"
              bgColor="primaryBlue"
              btnStyles="mt-3 md:mt-6"
            />
          </div>
          <div className=" w-full md:w-1/2 h-full flex justify-center items-center p-12">
            <Image
              src={"/images/pills.png"}
              width={400}
              height={250}
              alt="tablets"
            />
          </div>
        </div>
        <div
          className={`w-full h-fit md:h-[450px] bg-[#f5843433] flex flex-col md:flex-row overflow-hidden rounded-xl`}
        >
          <div className=" w-full d:w-1/2 h-full  p-6 md:p-12 flex flex-col justify-center gap-3">
            <p className="bg-white border-2 border-primaryOrange rounded-full w-fit px-2 py-1 text-xs text-primaryOrange font-semibold font-sans">
              TABLETS
            </p>
            <h2 className="text-2xl md:text-3xl text-black">
              Antioxidants with Multivitamins, Multiminerals, Lycopene, Green
              Tea Extract & Cyanocobalamin Tablets
            </h2>
            <p className="text-2xl font-semibold">ATP GOLD</p>
            <MyButtons
              title="View details"
              bgColor="primaryOrange"
              btnStyles="mt-3 md:mt-6"
            />
          </div>
          <div className=" w-full md:w-1/2 h-full flex justify-center items-center p-12">
            <Image
              src={"/images/pills.png"}
              width={400}
              height={250}
              alt="tablets"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
