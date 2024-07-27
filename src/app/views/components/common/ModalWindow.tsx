

interface MyProps {
    children?: React.ReactNode;
  }

const ModalWindow=( {children}:MyProps) => {

    return(<>
        <div className="z-[100] fixed top-0 right-0 left-0 bottom-0  opacity-70 bg-transparent h-full w-full ">
            {children}       
        </div>
    </>);
};
export default ModalWindow;