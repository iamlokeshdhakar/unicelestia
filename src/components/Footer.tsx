import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    // <div className="w-full p-6  border-t-2 border-e-gray-100 bg-white">
    //   {/* <div className="w-full h-64 bg-orange-200 rounded-2xl"></div> */}
    //   <div className="w-full h-96 rounded-xl flex justify-center items-center gap-4">
    //     <div className="w-[30%] flex justify-center items-center">
    //       <div className="bg-slate-100 p-10 rounded-3xl">
    //         <Image
    //           src="/images/flogo.png"
    //           alt="footer-logo"
    //           width={200}
    //           height={300}
    //         />
    //       </div>
    //     </div>
    //     <div className="w-[70%] flex justify-center items-center">
    //       <div className=" w-72 h-48 px-4">
    //         <span className="font-medium text-xl">Quick Links</span>
    //         <div className="w-full h-full flex flex-col">
    //           <p>Home</p>
    //           <p>Medicines</p>
    //           <p>Get Directions</p>
    //           <p>Contact Us</p>
    //         </div>
    //       </div>
    //       <div className=" w-72 h-48 px-4">
    //         <span className="font-medium text-xl">Medicines</span>
    //         <div className="w-full h-full flex flex-col">
    //           <p>Tedflam-SP</p>
    //           <p>ATP Gold Tablet</p>
    //           <p>ATP Gold Syrup</p>
    //           <p>Rostro-DSR</p>
    //           <p>Mirazef-S</p>
    //         </div>
    //       </div>
    //       <div className=" w-72 h-48 px-4">
    //         <span className="font-medium text-xl">Contact Us</span>
    //         <div className="w-full h-full flex flex-col">
    //           <p>+91 8923165656</p>
    //           <p>ucpharmaltd@gmail.com</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full flex justify-between px-10 items-center flex-col md:flex-row bg-white py-10 border-2 border-b-8  gap-9">
      <Image
        src={"/images/full-logo.png"}
        alt="footer-logo"
        width={200}
        height={100}
      />
      <div className="flex justify-center items-center text-base font-medium gap-2 md:gap-6 flex-wrap ">
        <span className="flex gap-1 justify-center items-center cursor-pointer hover:text-primaryOrange">
          <Phone size={20} strokeWidth={1.5} />
          +91 8923165656
        </span>
        <span className="flex gap-1 justify-center items-center cursor-pointer hover:text-primaryBlue">
          <Mail size={20} strokeWidth={1.5} />
          ucpharmaltd@gmail.com
        </span>
      </div>

      <p>© Unicelestia Pvt. Ltd. 2024</p>
    </div>
  )
}
