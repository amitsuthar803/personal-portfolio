import { motion, useInView, useAnimation } from "framer-motion";
import Contact from "./Contact";
import { useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Card from "./Card";
import Map from "./Map";

const MainContent = () => {
  const container = useRef(null);
  const ref = useRef(null);
  console.log(ref);
  // if we can't set true this will continuew fireing on and off
  const isInview = useInView(ref, { once: true, root: container });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      console.log(isInview);
      // fire the animation
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={container} className="container m-auto overflow-x-hidden">
      {/* conainer wrapper */}
      <div className="flex-grow">
        {/* section-1 */}
        <section
          id="home"
          className="home py-[3rem] bg-text after:content-['01'] "
        >
          {/* column 1 */}
          <div className="flex flex-col md:items-center sm:justify-center md:flex-row">
            {/* 1 */}
            <div className=" flex-1">
              <div className="px-7">
                <img className="sm:w-full " src="./banner-image.png" alt="" />
              </div>
            </div>
            {/* 2 */}
            <div ref={ref} className="flex-1 ml-5 flex justify-start">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
              >
                <span className="text-sm  sm:text-sm uppercase text-[#51565b]">
                  Designer / Developer
                </span>

                <h1 className="font-bold text-[4rem] sm:text-[5rem] md:text-[9rem] tracking-tight leading-[1] mt-2">
                  <span>Amit</span>
                  <br className="hidden md:block" />
                  <span>Suthar</span>
                </h1>
              </motion.div>
            </div>
          </div>

          {/* column 2 */}
          <div className="flex p-5 flex-col lg:flex-row justify-between items-start md:items-center ">
            <div>
              <div>
                <span className="text-[#333]">01</span>
                <h3 className="font-semibold mt-1 text-[1.8rem] leading-[1.2]">
                  Frontend <br className="hidden md:block" /> Developer
                </h3>
                <p className="mt-1 text-[#333]">HTML, CSS, JS</p>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#333]">02</span>
                <h3 className="font-semibold mt-1 text-[1.8rem] leading-[1.2]">
                  React <br className="hidden md:block" /> Developer
                </h3>
                <p className="mt-1 text-[#333]">JSX, Redux, Node, Git</p>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#333]">03</span>
                <h3 className="font-semibold mt-1 text-[1.8rem] leading-[1.2]">
                  Graphic <br className="hidden md:block" /> Designer
                </h3>
                <p className="mt-1 text-[#333]">Photoshop, Illustrator.</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div>
                <AnchorLink
                  href="#works"
                  className="bg-black text-white text-uppercase py-4 px-5 "
                >
                  View All Work
                </AnchorLink>
              </div>
            </div>
          </div>
        </section>
        {/* section-1 end*/}

        {/* section-2*/}
        <section
          id="about"
          className="about bg-text after:content-['02'] mt-2 py-[4rem] flex flex-col "
        >
          {/* column 1 */}
          <div className="flex justify-center text-start mb-10">
            {/* 1 */}
            <div className="flex flex-col w-full px-4 md:w-1/2">
              <span className="text-sm  sm:text-base uppercase text-[#51565b]">
                introduction
              </span>
              <h2 className="font-bold capitalize text-[3rem] sm:text-[4rem] md:text-[6rem] tracking-tight leading-[1]">
                who am i ?
              </h2>
            </div>
          </div>

          {/* column 2 */}
          <div className="flex justify-between gap-[4rem] flex-col md:flex-row px-5">
            {/* div1 */}
            <div className="w-full flex-1">
              <div className="">
                <h2 className="text-[1.9rem] font-semibold">
                  {`I'm`} <span className="text-red-600">Amit Suthar</span>, a
                  Web Developer
                </h2>
                <p className="mt-2">
                  I am a Frontend developer who is enthusiastic and
                  detail-oriented. I have a strong foundation in web development
                  principles and a passion for creating user-friendly
                  interfaces. I am proficient in React, JavaScript, HTML, CSS,
                  and responsive design. I have experience in building and
                  maintaining single-page applications (SPAs).
                </p>
              </div>
            </div>
            {/* div2 */}
            <div className="w-full flex-1">
              <div className="">
                <table className="table-auto w-full text-start justify-start">
                  <tbody className="">
                    <tr className="text-center border-b-2 ">
                      <th className="pb-2">Name</th>
                      <td className="pl-10">Amit Suthar</td>
                    </tr>
                    <tr className="text-center border-b-2">
                      <th className="pb-2">E-mail</th>
                      <td className="pl-10">
                        <a href="#">amitsuthar803@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="text-center border-b-2 ">
                      <th className="pb-2">Age</th>
                      <td className="pl-10">23</td>
                    </tr>
                    <tr className="text-center border-b-2">
                      <th className="pb-2">From</th>
                      <td className="pl-10">Rajasthan, Banswara, 327022</td>
                    </tr>

                    <tr className="text-center border-b-2">
                      <th className="pb-2">Phone</th>
                      <td className="pl-10">7014780586</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* section-2 ends*/}

        {/* section-3*/}

        <section
          id="skills"
          className="skills px-4 bg-text after:content-['03'] py-[4rem] flex flex-col "
        >
          <span className="text-sm  sm:text-base uppercase text-[#51565b]">
            BIODATA
          </span>
          {/* column 1 */}
          <div className="flex flex-col md:flex-row items-start mt-[-10px]">
            {/* 1 */}
            <div className="flex-1">
              <h2 className="font-semibold text-[3rem]">My Education</h2>
              <div className="">
                <span className="">2019 - 2022</span>
                <h3 className="">Bachelor in Computer Application,</h3>
                <p>PSP PG COLLEGE</p>
              </div>
              <div className="mt-5">
                <span className="">2017 - 2018</span>
                <h3 className="">Senior Secondary (12th)</h3>
                <p>GOVT. SR. SEC. SCHOOL</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-1">
              <h2 className="font-semibold text-[3rem]">My Experience</h2>
              <div className="">
                <span className="">2023 - 2024</span>
                <h3 className="">Reshnaks infotech</h3>
                <p>Here i work on Pharmacy management system webapp.</p>
              </div>
              <div className="mt-5">
                <span className="">2020 - 2022</span>
                <h3 className="">PCWALA.NET</h3>
                <p>
                  My job involves installing and repairing computer hardware, as
                  well as diagnosing software issues.
                </p>
              </div>
            </div>
          </div>

          {/* column 2 */}
          <h2 className="font-semibold text-[3rem]">My Skills</h2>
          <div className="flex flex-col md:flex-row md:gap-[5rem] items-start mt-[2rem]">
            {/* 1 */}
            <div className="flex-1  w-full">
              <div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      HTML / CSS
                    </span>
                    <span className="text-sm font-medium  text-black">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Javascript
                    </span>
                    <span className="text-sm font-medium  text-black">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      React JS
                    </span>
                    <span className="text-sm font-medium  text-black">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Tailwind css
                    </span>
                    <span className="text-sm font-medium  text-black">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-1  w-full">
              <div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Adobe Photoshop
                    </span>
                    <span className="text-sm font-medium  text-black">70%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Adobe Illustrator
                    </span>
                    <span className="text-sm font-medium  text-black">60%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Figma
                    </span>
                    <span className="text-sm font-medium  text-black">55%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[55%]"></div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium  text-black">
                      Bootstrap
                    </span>
                    <span className="text-sm font-medium  text-black">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 ">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section-3 ends*/}

        <section
          id="portfolio"
          className="portfolio px-4 py-[4rem] flex flex-col "
        >
          <div className="flex flex-col justify-center items-center text-start ">
            {/* 1 */}
            <div className="flex flex-col w-full  md:w-1/2">
              <span className="text-sm  sm:text-base uppercase text-[#51565b]">
                Portfolio
              </span>
              <h2 className="font-bold capitalize text-[3rem] sm:text-[4rem] md:text-[6rem] tracking-tight leading-[1]">
                My Work
              </h2>
            </div>

            {/* 2 */}
            <div className="md:py-6  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <Card />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact h-full  px-4 py-[4rem] flex flex-col "
        >
          <div className="flex flex-col justify-center items-center text-start mb-10">
            {/* 1 */}
            <div className="flex flex-col w-full px-4 md:w-1/2">
              <span className="text-sm  sm:text-base uppercase text-[#51565b]">
                Contact
              </span>
              <h2 className="font-bold capitalize text-[3rem] sm:text-[4rem] md:text-[6rem] tracking-tight leading-[1]">
                Meet Us
              </h2>
            </div>
            {/* 2 */}
            <div className="flex mt-5 bg-[#1b1e31] flex-col gap-5 md:gap-0 md:flex-row justify-between w-full">
              <Map />
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
