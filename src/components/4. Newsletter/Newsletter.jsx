const Newsletter = () => {
    return (
        <div className="bg-[conic-gradient(from_90deg,black_0%,black_50%,white_50%,white_100%)] w-full py-9">

        <div className='p-4 md:p-6 ring-white ring-1 rounded-2xl w-[90%] mx-auto '>
        <div className='bg-gradient-to-tr from-[#d2eefa] via-white to-[#fad6af] rounded-2xl text-center py-22 space-y-3'>
                <h1 className="font-bold sm:text-2xl text-lg">Subscribe to our Newsletter</h1>
                <p>Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center gap-3">
                <input type="text" placeholder='Enter your email' className=" rounded-lg input w-[200px] sm:input" />
                <button className='btn rounded-lg bg-gradient-to-r from-[#e4c896] via-[#deac88] to-[#f78297]'>Siuuubscribe</button>
                </div>
        </div>
        </div>
        </div>
    );
};

export default Newsletter;