import React from "react";

const Navbar = () => {
    return(
        <div className="">
            <div className="flex justify-end gap-4 bg-orange-800 text-orange-200 p-3">
                <a href="/news">news</a>
                <a href="">game</a>
                <a href="/colletion">colletion </a>
                <a href="">community</a>
                <button className="border-dashed border rounded-full border-orange-200 w-[8%] ">login</button>
            </div>
        </div>
    )
}
export default Navbar;