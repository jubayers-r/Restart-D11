import img from "../../assets/logo.png";
import banner from "../../assets/banner-main.png";
import { ToastContainer, toast } from "react-toastify";
const Header = ({ coin, newCoin }) => {
  const handleSuccess = () => {
    toast.success("1200000 Coin added successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="flex py-5 justify-between">
        <div>
          <img src={img} />
        </div>
        <div className="flex space-x-6 place-items-center">
          <ul className="hidden sm:flex space-x-3 md:space-x-5 text-black/60 text-sm md:text-lg">
            <li>Home</li>
            <li>Feature</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <div className="flex rounded-xl btn bg-white">
            <h1 className="font-semibold ">{coin} Coin </h1>
            <img
              src="  https://cdn-icons-png.flaticon.com/512/7880/7880066.png "
              width="25"
              height="25"
            />
          </div>
          <details>
            <summary className="btn sm:hidden ">Menu</summary>
            <ul className="absolute z-1 bg-amber-100 rounded-2xl p-2">
              <li>Home</li>
              <li>Feature</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </details>
        </div>
      </div>
      {/* HERO */}
      <div className="rounded-2xl w-full bg-gradient-to-tr from-[#8189e3] via-black to-[#c8948a] py-10 md:py-20">
        <div className=" text-center lg:space-y-7 sm:space-y-2.5 mx-auto w-full top-5 md:top-10 2xl:top-25">
          <img src={banner} className=" mx-auto w-[20%]" />
          <h1 className=" text-white sm:font-semibold md:text-2xl lg:text-3xl lg:font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className=" text-white/70 lg:text-2xl">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            onClick={() => {
              newCoin();
              setTimeout(() => {
                handleSuccess();
              }, 0);

            }}
            className="btn bg-[#E7FE29] xl:p-6.5 md:p-4 p-2 ring-1 ring-[#E7FE29] border-black xl:border-8 border-4 rounded-2xl md:font-bold lg:text-xl md:text-lg"
          >
            Claim Free Credit
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Header;
