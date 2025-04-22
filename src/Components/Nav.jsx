import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import { food_items } from "../../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)
  useEffect(()=>{
   let newlist = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)) 
   setCate(newlist)
  },[input])

    let items=useSelector(state=>state.cart)
    console.log(items)
  return (
      <div className="sticky top-0 backdrop-blur-xl">
    <div className="w-full  flex justify-between items-center p-2 md:p-3">
      <div className="p-[10px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="text-orange-500 text-3xl" />
      </div>
      <form className="flex justify-center items-center w-[60%] p-[13px] rounded-md gap-3 px-5 shadow-md bg-white md:w-[60%]" onSubmit={(e)=>e.preventDefault()}>
        <IoSearch className="text-orange-500 text-2xl" />
        <input
          className="w-[100%] outline-none"
          type="text"
          placeholder="Search Tasty Food"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="p-[10px] relative bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer" onClick={()=>{
        setShowCart(true)
      }}>
        <span className="absolute top-0 right-1 font-bold text-orange-500 ">
         {items.length}
        </span>
        <LuShoppingBag className="text-orange-500 text-3xl" />
      </div>
    </div>
         </div>
  );
};

export default Nav;
