import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecreaseQty, IncreaseQty, RemoveItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";


const Card2 = ({ name, price, image, id, qty }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] bg-white p-2 rounded-md flex items-center justify-between shadow-2xl">
      <div className="w-[60%] h-full flex items-center gap-2">
        <div className="w-[60%] h-full overflow-hidden rounded-md">
          <img
            src={image}
            alt=""
            className="object-cover w-[100%] h-[100%] rounded-md"
          />
        </div>
        <div className="w-[40%]">
          <div className="font-semibold">{name}</div>
          <div className="flex border-2  justify-between items-center text-center w-[95px] bg-white text-xl font-semibold rounded-md border-orange-400 md:w-[110px]">
            <button className="cursor-pointer px-2 "onClick={()=>{ qty>1? dispatch(DecreaseQty(id)):1}}>-</button>
            <span className="bg-slate-300 px-2">{qty}</span>
            <button className="cursor-pointer px-2 " onClick={()=>{dispatch(IncreaseQty(id))}}>+</button>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        <span className="text-orange-400">Rs {price}/-</span>
        <RiDeleteBin5Line
          className="text-red-600 text-[25px] cursor-pointer"
          onClick={() => {dispatch(RemoveItem(id));toast.error("Item Remove")}}
        />
      </div>
    </div>
  );
};

export default Card2;
