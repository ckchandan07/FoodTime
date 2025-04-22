import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Category"; // Assuming this is an array, not a component
import Card from "../Components/Card";
import { food_items } from "../../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

const Home = () => {
  // let [cate, setCate] = useState(food_items);

  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newlist = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newlist);
    }
  }

  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryfee = 50;
  let texes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryfee + texes);

  return (
    <div>
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6  ">
          {Categories.map((item, index) => (
            <div
              key={index}
              className="w-[70px] h-[70px] rounded-br-lg bg-white flex text-center items-center flex-col p-1.5 justify-center shadow-md md:w-[140px] md:h-[140px]  hover:bg-orange-200 duration-200 cursor-pointer transition-all hover:rounded-l-lg "
              onClick={() => filter(item.name)}
            >
             <div className="pt-1.5 text-4xl md:text-6xl">{item.icon}</div> 
             <div className="text-[11px] font-semibold md:text-[20px]">{item.name}</div> 
              
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8">
        {cate.length > 1 ? (
          cate.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-3xl text-orange-500 font-semibold">
            No Dish Found
          </div>
        )}
      </div>

      <div
        className={`w-[100vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 md:w-[45vw] sm:w-[60vw] overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center">
          <h5 className="text-orange-500 font-semibold text-[18px]">
            Order Items
          </h5>
          <h4
            className="text-orange-500 font-semibold text-[20px] cursor-pointer"
            onClick={() => setShowCart(false)}
          >
            <RxCross2 />
          </h4>
        </header>

        {items.length > 0 ? (
          <>
            <div className="mt-3 flex flex-col gap-3">
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 p-3 flex flex-col gap-1.5">
              <div className="flex justify-between font-semibold">
                <span>SubTotal</span>
                <span className="text-orange-500">Rs {subtotal} /-</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Texes</span>
                <span className="text-orange-500">Rs {texes} /-</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Delivery Charge</span>
                <span className="text-orange-500">Rs {deliveryfee} /-</span>
              </div>
            </div>
            <div className="flex justify-between font-semibold p-3 text-xl">
              <span>Total Bill</span>
              <span className="text-orange-500">Rs {total} /-</span>
            </div>
            <button className="w-full bg-orange-300 rounded-md font-bold py-1.5 cursor-pointer hover:bg-orange-500 mt-2 mb-2"  onClick={() => {
              toast.success("Placed Successful ");
            }}>
              {" "}
              Order Placed
            </button>
          </>
        ) : (
          <div
            className="text-orange-500 font-semibold text-center p-10 text-3xl"
          >
            Empty Order
          </div>
        )}
      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
