import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function HomePage() {
  const getRandomThemeKey = () => {
    const keys = Object.keys(themes);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  };

  const themes = {
    space: {
      label: "Space",
      background:
        "bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')]",
    },
    code: {
      label: "Code",
      background:
        "bg-[url('https://spectrum.ieee.org/media-library/line-after-line-of-green-computer-computer-code.jpg?id=27550156&width=1200&height=600&coordinates=0%2C310%2C0%2C310')]",
    },
    rochester: {
      label: "Rochester",
      background:
        "bg-[url('https://s3.us-east-1.amazonaws.com/bt-prod-img/place/Rochester-NewYork.jpg')]",
    },
    travel: {
      label: "Travel",
      background:
        "bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]",
    },
  };

  const [currentTheme, setCurrentTheme] = useState(getRandomThemeKey);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const slides = [
  //   {
  //     title: "Project 1",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //   },
  //   {
  //     title: "Project 2",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  //   },
  //   {
  //     title: "Project 3",
  //     image:
  //       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  //   },
  // ];

  // const [current, setCurrent] = useState(0);

  // const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  // const prevSlide = () =>
  //   setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Contact Links for Footer
  const contactLinks = [
    {
      href: "https://github.com/samfloyd9",
      icon: <FaGithub className="text-2xl text-black" />,
      label: "GitHub Profile",
      color: "hover:bg-purple-400",
    },
    {
      href: "https://www.linkedin.com/in/samuel-floyd-/",
      icon: <FaLinkedin className="text-2xl text-black" />,
      label: "LinkedIn Profile",
      color: "hover:bg-blue-300",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=floyd.samuel.23@gmail.com",
      icon: <MdEmail className="text-2xl text-black" />,
      label: "Email Sam",
      color: "hover:bg-green-300",
    },
    {
      href: "tel:+15854414035",
      icon: <BiSolidPhoneCall className="text-2xl text-black" />,
      label: "Call Sam",
      color: "hover:bg-amber-300",
    },
    {
      href: "https://drive.google.com/file/d/1n01gqchJmklPEjL-jtPhj9XGD4u18qnb/view?usp=drive_link",
      icon: <IoIosDocument className="text-2xl text-black" />,
      label: "View Resume",
      color: "hover:bg-red-300",
    },
  ];

  return (
    <div>
      <div
        className={`fixed top-1/4 left-0 z-40 bg-black shadow-md p-4 rounded-r transition-transform duration-300 ease-in-out
    ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-3">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setCurrentTheme(key);
                setDrawerOpen(false); // optionally auto-close
              }}
              className={`text-sm px-4 py-2 rounded transition-colors duration-300 text-left whitespace-nowrap ${
                currentTheme === key
                  ? "bg-gray-600 text-white"
                  : "bg-white hover:bg-yellow-300"
              }`}
            >
              {value.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`${themes[currentTheme].background} bg-cover bg-no-repeat bg-center h-screen overflow-hidden flex flex-col justify-around items-center -mb-[40px]`}
      >
        {/* Header Section (Name / Title with Custom Font) */}
        <header className="flex justify-center items-center">
          <button
            className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-2 rounded-r hover:bg-gray-700"
            onClick={() => setDrawerOpen(!drawerOpen)}
            title="Change Styling"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
          <div className="flex flex-col items-center content-center gap-10 p-8">
            {/* Stylized Name using FontMeme */}
            <img
              src="https://fontmeme.com/permalink/240928/ea784871b27d59b7acc32e61586aad82.png"
              alt="Samuel"
              border="0"
            />
            <img
              src="https://fontmeme.com/permalink/240928/857b3140e86cdbdfba5b27cdf4d6731e.png"
              alt="Floyd"
              border="0"
            />
            <img
              src="https://fontmeme.com/permalink/240928/d1b515851a829774842a6f71cd13fd40.png"
              alt="Software Engineer"
              border="0"
            />
            <p className="font-audiowide text-white text-center text-lg italic">
              Turning ideas into interactive web experiences.
            </p>
            <div className="flex justify-center gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:pointer"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <div className={`bg-white p-1 rounded-md ${link.color}`}>
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
      <div className="h-screen overflow-hidden flex flex-col justify-around items-center bg-black">
        <section className="bg-white w-full py-16 px-6 flex flex-col items-center">
          <div className="max-w-6xl w-full flex flex-col md:flex-row justify-around items-center gap-10">
            {/* LEFT: Picture + Info */}
            <div className="flex flex-col gap-2 items-center justify-center md:items-center text-center">
              <div className="flex flex-col justify-center">
                <img
                  src="https://64.media.tumblr.com/3cf4a57dc29700a84e384693338ff756/32d1c94a7975da75-dc/s540x810/4acdf4ac18137e2412f551615af6bb08fa111412.jpg" // <-- drop your image in /public folder
                  alt="Sam Floyd"
                  className="w-48 h-48 rounded-full border-2 object-cover mb-4 shadow-xl border-black"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-bold">Samuel Floyd</h2>
                  <p className="text-gray-600">📍 Rochester, NY</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-1">
                <div className="flex justify-start">
                  <a
                    href="https://www.sbu.edu/"
                    className="hover:pointer flex flex-row gap-2 items-center"
                    target="_blank"
                    rel="noreferrer"
                    title="St. Bonaventure University"
                  >
                    <img
                      className="h-8"
                      alt="SBU"
                      src="https://upload.wikimedia.org/wikipedia/en/9/96/St_bona_bonnies_logo.png"
                    />
                    <div className="flex flex-col text-left">
                      <p className="text-gray-700 mt-2">
                        St. Bonaventure University
                      </p>
                      <p className="text-gray-400 text-xs">
                        B.S. Computer Science
                      </p>
                    </div>
                  </a>
                </div>
                <div className="flex justify-start">
                  <a
                    href="https://www.meanguppy.com/"
                    className="hover:pointer flex flex-row gap-2 items-center"
                    target="_blank"
                    rel="noreferrer"
                    title="Mean Guppy"
                  >
                    <img
                      className="h-10"
                      alt="Mean Guppy"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FqrFug2eYJ4rvC4KDts5HJmEbPbBEh_IRw&s"
                    />
                    <div className="flex flex-col text-left">
                      <p className="text-gray-700">Mean Guppy</p>
                      <p className="text-gray-400 text-xs">Former Intern</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: About & Tech */}
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-800 max-w-xl leading-relaxed">
                I’m a Front-end Developer passionate about building clean, fast,
                and interactive web apps. I enjoy working with React and
                Tailwind CSS and love bringing creative ideas to life. Outside
                of coding, I enjoy traveling, food, music, gaming and sports!
              </p>

              {/* Tech Logos */}
              <div className="flex flex-wrap justify-center gap-4 items-center mt-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="h-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="h-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="h-10"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
                  alt="Tailwind"
                  className="h-8"
                />
                {/* Add more logos if you want */}
              </div>
            </div>

            {/* <div className="relative w-full max-w-xl mx-auto">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="rounded shadow h-16"
              />

              <button onClick={prevSlide} className="absolute left-2 top-1/2">
                ←
              </button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2">
                →
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
