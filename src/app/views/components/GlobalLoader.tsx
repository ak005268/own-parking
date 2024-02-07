
const GlobalLoader = () => {
    return (
        <div className='fixed flex flex-col justify-center items-center backdrop-blur-sm overflow-hidden top-0 left-0 right-0 bottom-0 h-screen w-full
          z-40'>
            <div className="loading loading-ring w-20"></div>
        </div>
    );
};

export default GlobalLoader;