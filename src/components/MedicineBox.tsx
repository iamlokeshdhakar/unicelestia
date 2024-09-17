import Image from "next/image"
import MyButtons, { MyButtonsProps } from "./Buttons"

interface MedicineBoxProps {
  tabName: string
  formula: string
  imgUrl: string
  bgColor: "#f1dbc5c2"
  buttons: MyButtonsProps
}

export default function MedicineBox({
  tabName,
  formula,
  imgUrl,
  bgColor,
  buttons
}: MedicineBoxProps) {
  return (
    <div
      className={`w-full h-[450px] bg-[${bgColor}] flex  overflow-hidden rounded-3xl`}
    >
      <div className="w-1/2 h-full  p-20 flex flex-col justify-center gap-3">
        <p className="bg-white border-2 border-primaryOrange rounded-full w-fit px-4 font-medium">
          Tablet
        </p>
        <h2 className="text-3xl text-slate-700">{formula}</h2>
        <p className="text-2xl font-semibold"> {tabName}</p>
        <MyButtons
          title={buttons.title}
          bgColor={buttons.bgColor}
          btnStyles="mt-6"
        />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center p-12">
        <Image src={imgUrl} width={400} height={250} alt="tablets" />
      </div>
    </div>
  )
}
