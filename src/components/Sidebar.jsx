/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sidebar = ({
  sidebarWidth,
  setSidebarWidth,
  hamburgerRef,
  setIsHamburgerActive,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track the active link
  const [prevActiveLink, setPrevActiveLink] = useState(""); // State to track the previous active link
  console.log(prevActiveLink);

  const sidebarRef = useRef();

  const handleLinkClick = (link) => {
    // Set the new active link
    // setActiveLink(link);

    // Remove active styling from the previous link
    if (prevActiveLink) {
      const prevActiveLinkElement = document.querySelector(
        `[data-link="${prevActiveLink}"]`
      );
      if (prevActiveLinkElement) {
        prevActiveLinkElement.classList.remove("before:pr-[8rem]");
      }
    }

    // Add styling to the current active link
    const currentActiveLinkElement = document.querySelector(
      `[data-link="${link}"]`
    );
    if (currentActiveLinkElement) {
      currentActiveLinkElement.classList.add("before:pr-[8rem]");
    }

    // Update the previous active link
    setPrevActiveLink(link);

    // Add additional logic if needed when a link is clicked
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Adjust these values based on your layout and styling
    // const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("skills");
    const worksSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");

    if (scrollPosition < aboutSection.offsetTop) {
      setActiveLink("home");
    } else if (scrollPosition < experienceSection.offsetTop) {
      setActiveLink("about");
    } else if (scrollPosition < worksSection.offsetTop) {
      setActiveLink("skills");
    } else if (scrollPosition < contactSection.offsetTop) {
      setActiveLink("portfolio");
    } else {
      setActiveLink("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const manageOutsideClick = (e) => {
    e.stopPropagation();

    // Check if the application is in mobile view
    if (isMobile) {
      // Check if the click is on the hamburger icon
      if (
        hamburgerRef &&
        hamburgerRef.current &&
        hamburgerRef.current.contains(e.target)
      ) {
        // Clicked on the hamburger icon, do nothing
        return;
      }

      // Check if the click is inside the sidebar
      if (
        sidebarRef &&
        sidebarRef.current &&
        sidebarRef.current.contains(e.target)
      ) {
        // Clicked inside the sidebar
      } else {
        // Clicked outside the sidebar, close it
        setSidebarWidth("w-0");
        setIsHamburgerActive(false);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setSidebarWidth("w-0");
      setIsHamburgerActive(false);
    } else {
      setIsMobile(false);
      setSidebarWidth("w-64");
    }
  };

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add click event listener after the initial render
  useEffect(() => {
    document.addEventListener("click", manageOutsideClick);

    return () => {
      document.removeEventListener("click", manageOutsideClick);
    };
  }, [isMobile]); // Add isMobile to dependency array

  return (
    <div className="flex h-screen fixed z-20" ref={sidebarRef}>
      <div
        className={`bg-white  text-[#212529]  ${sidebarWidth} overflow-hidden transition-all duration-200`}
      >
        <div className="navigation px-[4rem] py-[3rem]">
          <div className="site-logo">
            <AnchorLink>
              <img src="/main-logo.png" alt="" />
            </AnchorLink>
          </div>
          <div className="nav">
            <ul className="list-none p-0 overflow-hidden mt-[3rem]">
              <li className="py-2">
                <AnchorLink
                  href="#home"
                  data-link="home"
                  className={`anchor-link ${
                    activeLink === "home" ? "before:pr-[8rem]" : ""
                  }`}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </AnchorLink>
              </li>

              {/* <li className={`py-4 ${activeLink === "about" ? "" : ""}`}> */}
              <li className="py-2">
                <AnchorLink
                  data-link="about"
                  href="#about"
                  className={`anchor-link  ${
                    activeLink === "about" ? "before:pr-[8rem]" : ""
                  }`}
                  onClick={() => handleLinkClick("about")}
                >
                  About&nbsp;Me
                </AnchorLink>
              </li>

              <li className="py-2">
                <AnchorLink
                  data-link="skills"
                  href="#skills"
                  className={`anchor-link ${
                    activeLink === "skills" ? "before:pr-[8rem]" : ""
                  }`}
                  onClick={() => handleLinkClick("experience")}
                >
                  Skills
                </AnchorLink>
              </li>

              <li className="py-2">
                <AnchorLink
                  data-link="portfolio"
                  href="#portfolio"
                  className={`anchor-link ${
                    activeLink === "portfolio" ? "before:pr-[8rem]" : ""
                  }`}
                  onClick={() => handleLinkClick("works")}
                >
                  Portfolio
                </AnchorLink>
              </li>

              <li className="py-2">
                <AnchorLink
                  data-link="contact"
                  href="#contact"
                  className={`anchor-link ${
                    activeLink === "contact" ? "before:pr-[8rem]" : ""
                  }`}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
