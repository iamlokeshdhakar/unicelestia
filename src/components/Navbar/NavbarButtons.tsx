import Link from "next/link"

export const NavbarButtons = () => {
  return (
    <>
      <Link target="_blank" href={"#"}>
        <button className="px-4 py-2 text-primaryOrange border-primaryOrange border-2 rounded-full hover:bg-primaryOrange hover:text-white ">
          Get Direction
        </button>
      </Link>
      <Link
        target="_blank"
        href={"https://api.whatsapp.com/send?phone=918923165656"}
      >
        <button className="px-4 py-2 bg-primaryBlue border-primaryBlue border-2 text-white  rounded-full hover:bg-primaryBlueHover">
          Contact Us
        </button>
      </Link>
    </>
  )
}
