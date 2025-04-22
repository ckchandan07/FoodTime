import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";


const Card = ({ name, image, price, id, type }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] p-2 bg-white rounded-md hover:border-1 border-orange-400  ">
      <div className="h-[180px] overflow-hidden md:h-[250px]">
        <img
          src={image}
          alt=""
          className="object-cover rounded-md h-[100%] w-[100%]"
        />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="flex justify-between text-orange-500 font-semibold py-2">
        <div>Rs {price}/.</div>
        <div className="flex items-center gap-1">
          {" "}
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full bg-yellow-300 rounded-md font-bold py-1.5 cursor-pointer hover:bg-yellow-500 mt-2 mb-2"
        onClick={() => {dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}));
      toast.success("Item added")}
      }
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
