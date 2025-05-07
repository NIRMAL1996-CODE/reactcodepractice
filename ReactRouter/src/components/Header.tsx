import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className="bg-blue-500 w-full h-[100px] flex items-center justify-between text-white text-2xl gap-20  p-2">
        <h1 className="text-2xl">Hello!</h1>
        <div className="flex gap-10">
          {/* <a className="text-2xl underline" href="/">Home</a>
          <a className="text-2xl underline" href="/about">About</a>
          <a className="text-2xl underline" href="/product">Product</a>
          <a className="text-2xl underline" href="/contact">Contact</a> */}
         <Link className="text-2xl underline" to={"/"}>Home</Link>
         <Link className="text-2xl underline" to={"/product"}>Product</Link>
         <Link className="text-2xl underline" to={"/about"}>About</Link>
         <Link className="text-2xl underline" to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;