/* eslint-disable react/jsx-key */
import { useRef } from "react";
import Carousel from "./Carousel";

/* eslint-disable react/prop-types */
function Modal({ item, onClose, setSelectedItem }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSelectedItem(null);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0  bg-slate-400 backdrop-blur-sm  bg-opacity-50 z-50 w-screen h-screen flex items-center justify-center"
    >
      <div className="bg-white gap-6 rounded h-[90%] overflow-y-auto lg:overflow-hidden sm:h-auto relative shadow-md w-[75%] md:w-[80%] p-5 sm:p-6 flex flex-col sm:flex-row justify-start items-start">
        {/* 1 */}

        <div className="flex-1  lg:flex-none  md:w-[40%]">
          <Carousel autoSlide={true} autoSlideInterval={2000}>
            {item.image.map((s) => (
              <img className="" src={s} />
            ))}
          </Carousel>
        </div>
        {/* 2 */}
        <div className="flex-1">
          {/* up */}
          <div>
            <span className="flex gap-2 mt-3 mb-3 items-center">
              <h3 className="font-semibold">Title:</h3>
              <p>{item.title}</p>
            </span>

            <span className="">
              <h3 className="font-semibold">Description:</h3>
              <p>{item.description}</p>
            </span>

            <span className="flex gap-2 mt-3 items-center">
              <h3 className="font-semibold">URL:</h3>
              {item.URL ? (
                <a
                  className="text-green-600 text-[1rem]"
                  target="_blank"
                  rel="noreferrer"
                  href={item.URL}
                >
                  {item.URL}
                </a>
              ) : (
                <p className=" font-semibold text-slate-700">
                  {item.title} is currently down for maintenance. ⚠️
                </p>
              )}
            </span>
          </div>

          {/* down */}
          <div></div>
        </div>

        <button
          className="text-slate-500 font-semibold absolute top-2 right-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Modal;
