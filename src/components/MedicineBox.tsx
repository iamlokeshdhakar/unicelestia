import Image from "next/image"

interface MedicineBoxProps {
  tag: string
  tabName: string
  formula: string
  imgUrl: string
  btnClass: "bg-primaryOrange" | "bg-primaryBlue" | any
  color: any
  bgColor: any
}

export default function MedicineBox({
  tag,
  tabName,
  formula,
  imgUrl,
  btnClass,
  color,
  bgColor
}: MedicineBoxProps) {
  return (
    <div
      className={`w-full h-fit md:h-[450px] ${bgColor} bg-gray-200 flex flex-col md:flex-row overflow-hidden rounded-xl`}
    >
      <div className=" w-full d:w-1/2 h-full  p-6 md:p-12 flex flex-col justify-center gap-3">
        <p
          className={`bg-white border-2 border-${color} rounded-full w-fit px-2 py-1 text-xs text-${color} font-bold font-sans`}
        >
          {tag}
        </p>
        <h2 className="text-xl md:text-3xl text-black">{formula}</h2>
        <p className="text-xl font-semibold">{tabName}</p>

        <button
          className={`px-4 md:px-8 rounded-full py-2 md:py-3  w-fit text-white font-semibold text-base md:text-lg ${btnClass}`}
        >
          View Details
        </button>
      </div>
      <div className=" w-full md:w-1/2 h-full flex justify-center items-center p-12">
        <Image src={imgUrl} width={400} height={250} alt="tablets" />
      </div>
    </div>
  )
}
