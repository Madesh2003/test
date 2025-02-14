import { useContext, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FormDataContext } from "../context/FormDataContext";
import { GoRocket } from "react-icons/go";

const PopupForm = () => {
  const { setName } = useContext(FormDataContext);
  const [inputValue, setInputValue] = useState("");
  const [popup, setPopup] = useState(true);
  const nameFieldRef = useRef(null);

  useEffect(() => {
    nameFieldRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSendData = () => {
    const trimmedName = inputValue.trim();
    if (trimmedName === "") {
      toast.error("Enter a Name");
      setInputValue(trimmedName);
    } else {
      setName(trimmedName);
      setPopup(false);
    }
  };

  return (
    <>
      {popup && (
        <div className="bg-black/90 z-10 fixed left-0 top-0 h-full w-full flex justify-center items-center">
          <div className="h-fit w-72 rounded-2xl bg-white bg-opacity-50 backdrop-blur-lg border border-gray-200 shadow-2xl p-5">
            <div>
              <input
                ref={nameFieldRef}
                type="text"
                value={inputValue}
                placeholder="Who is this message for?"
                className="w-full py-1 border border-gray-200 rounded-full placeholder:indent-5 indent-5 outline-gray-300"
                onChange={handleChange}
              />
              <button
                className="w-full mt-5 bg-blue-500 rounded-full font-medium py-1.5 cursor-pointer text-white flex items-center gap-2 justify-center"
                onClick={onSendData}
              >
                <span>Generate</span> <span><GoRocket /></span>
              </button>
            </div>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default PopupForm;