import { useState } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import volunteer from "../../../Assets/Images/register/volunteer.webp";
import aid from "../../../Assets/Images/register/take-care.webp";
import sunrise from "../../../Assets/Images/register/sunrise.webp";
import donate from "../../../Assets/Images/register/donate.webp";
import hope from "../../../Assets/Images/register/hope.webp";
import {
  createHopePieceOrder,
  captureHopePieceOrder,
} from "../../../Redux/APICalls/donationCall";
import { selectArtworkForPurchase } from "../../../Redux/APICalls/donationCall";

const BuyHope = () => {
  const dispatch = useDispatch();
  const { loading, purchaseSuccess, error } = useSelector(
    (state) => state.donation
  );
    const {user} = useSelector((state)=>state.auth)
    const [amount, setAmount] = useState(null);
  const artworkID = "ART-12345";

  const handleCreateOrder = async () => {
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid number of Hope Pieces");
      throw new Error("Invalid amount");
    }

    dispatch(selectArtworkForPurchase(artworkID));

    const res = await dispatch(createHopePieceOrder(amount));
    return res.payload.id;
  };

  const handleApprove = async (data) => {
    try {
      await dispatch(captureHopePieceOrder(data.orderID, artworkID));
      toast.success("Thank you for purchasing Hope Pieces!");
    } catch (error) {
      toast.error("Failed to complete purchase");
    }
  };

  return (
    <PayPalScriptProvider>
      <div className="w-screen h-screen flex items-center justify-center bg-lightBg">
        <div className="w-full md:w-[70%] h-[85%] flex flex-col md:flex-row justify-between items-center overflow-hidden rounded-xl bg-white shadow-lg relative">
          <div className="w-full md:w-1/2 h-full z-10 bg-black rounded-xl grid grid-cols-3 grid-rows-3 gap-3 p-2">
            <div
              style={{ backgroundImage: `url(${volunteer})` }}
              className="col-span-2 p-4 rounded-xl bg-cover bg-center brightness-75"
            ></div>
            <div
              style={{ backgroundImage: `url(${aid})` }}
              className="p-4 rounded-xl bg-cover bg-center brightness-75"
            ></div>
            <div
              style={{ backgroundImage: `url(${donate})` }}
              className="p-4 rounded-xl bg-cover bg-center brightness-75"
            ></div>
            <div
              style={{ backgroundImage: `url(${sunrise})` }}
              className="p-4 rounded-xl bg-cover bg-center brightness-75 col-span-2"
            ></div>

            <div className="bg-indigo-700 col-span-2 p-4 rounded-xl shadow-lg text-white flex flex-col items-start justify-end space-y-3">
              <p className="text-xs">
                Empowering Hope, changing Lives is our Goal
              </p>
              <h1 className="text-lg font-semibold">
                One Hope Piece, One Changed Life
              </h1>
            </div>
            <div
              style={{ backgroundImage: `url(${hope})` }}
              className="p-4 rounded-xl bg-cover bg-center brightness-75"
            ></div>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2 p-8">
            <form className=" w-[90%] flex flex-col justify-center items-center gap-6">
              <ToastContainer theme="colored" position="top-center" />
              <h1 className=" text-3xl font-bold text-center text-primary">
                <Link
                  to="/"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-secondary"
                >
                  ANaroz
                </Link>{" "}
                Hope Pieces
              </h1>

              <div className="space-y-4 w-full">
                <div className="w-full mb-4 border border-zinc-300 rounded-md h-12 flex items-center px-4 focus-within:border-primary transition-all">
                  <input
                    type="number"
                    placeholder="Number of Hope Pieces"
                    className="w-full outline-none text-lg bg-transparent"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="w-full">
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    onError={(err) => {
                      toast.error("Payment failed. Please try again.");
                      console.error("PayPal error:", err);
                    }}
                  />
                </div>
              </div>

              {loading && (
                <p className="text-center text-gray-500">
                  Processing your Hope Pieces purchase...
                </p>
              )}
              {purchaseSuccess && (
                <p className="text-center text-green-500">
                  Thank you for supporting hope! Your purchase was successful.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default BuyHope;
