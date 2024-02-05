import { Mail, Phone, SendHorizontal, User } from "lucide-react";

function Contact() {
  return (
    <div className=" flex flex-col text-slate-300 py-10 flex-1">
      <div className="form w-[90%] m-auto">
        <form
          action="https://formspree.io/f/xvoekqby"
          className="flex flex-col gap-5 md:gap-1"
          method="POST"
        >
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300  absolute bg-transparent rounded-full text-base items-center justify-center w-8 pl-5 py-3">
              <User />
            </span>
            <input
              name="username"
              type="text"
              required
              placeholder="Name"
              className="pl-[3rem] rounded-full py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-[#2a2e44] ml-2 text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>

          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300  absolute bg-transparent rounded-full text-base items-center justify-center w-8 pl-5 py-3">
              <Mail />
            </span>
            <input
              name="email"
              type="text"
              required
              placeholder="Mail"
              className="pl-[3rem] rounded-full py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-[#2a2e44] ml-2 text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>

          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300  absolute bg-transparent rounded-full text-base items-center justify-center w-8 pl-5 py-3">
              <Phone />
            </span>
            <input
              name="phone"
              required
              type="text"
              placeholder="Phone"
              className="pl-[3rem] rounded-full py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-[#2a2e44] ml-2 text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>

          <textarea
            name="message"
            id=""
            className="w-full bg-[#272a3f] mt-1 rounded-full h-[4rem] py-4 px-4"
            placeholder="Type your message"
          ></textarea>
          <button className="bg-[#2470a9] hover:bg-[#328bcf] px-4 py-2 flex mt-4 rounded-full  justify-between text-white">
            Send <SendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
