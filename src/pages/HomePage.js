import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import React from "react";

function HomePage() {
  return (
    <div className="bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] h-screen overflow-hidden flex flex-col justify-between">
      
      {/* Header Section (Name / Title with Custom Font) */}
      <header className="flex justify-center items-center pt-16">
        <div className="flex flex-col items-center gap-10 p-8">
          {/* Stylized Name using FontMeme */}
          <img
            src="https://fontmeme.com/permalink/240928/ea784871b27d59b7acc32e61586aad82.png"
            alt="Samuel Floyd"
            border="0"
          />
          <img
            src="https://fontmeme.com/permalink/240928/857b3140e86cdbdfba5b27cdf4d6731e.png"
            alt="Frontend Developer"
            border="0"
          />
          <img
            src="https://fontmeme.com/permalink/240928/d1b515851a829774842a6f71cd13fd40.png"
            alt="React | JavaScript | Tailwind"
            border="0"
          />
        </div>
      </header>

      {/* Footer Section (Contact Icons) */}
      <footer className="flex justify-center items-end gap-4 pb-6 mb-10">
        {[
          {
            href: "https://github.com/samfloyd9",
            icon: <FaGithub />,
            label: "GitHub Profile"
          },
          {
            href: "https://www.linkedin.com/in/samuel-floyd-/",
            icon: <FaLinkedin />,
            label: "LinkedIn Profile"
          },
          {
            href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=floyd.samuel.23@gmail.com",
            icon: <MdEmail />,
            label: "Email Sam"
          },
          {
            href: "tel:+15854414035",
            icon: <BiSolidPhoneCall />,
            label: "Call Sam"
          },
          {
            href: "https://drive.google.com/file/d/1Fg973bGcJkR15DX32tkBdnuZ3Lk2j4-y/view?usp=sharing",
            icon: <IoIosDocument />,
            label: "View Resume"
          },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:pointer"
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <div className="bg-white p-1 rounded-md hover:bg-red-400">
              {React.cloneElement(link.icon, { className: "text-2xl text-black" })}
            </div>
          </a>
        ))}
      </footer>
    </div>
  );
}

export default HomePage;

// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { IoIosDocument } from "react-icons/io";

// function HomePage() {
//   return (
//     <div className="bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] h-screen overflow-hidden flex flex-col justify-center">
//       <div className="flex justify-center content-center items-center">
//         <div className="flex flex-col items-center gap-10 p-8">
//           <img
//             src="https://fontmeme.com/permalink/240928/ea784871b27d59b7acc32e61586aad82.png"
//             alt="neuropolitical-font"
//             border="0"
//           />
//           <img
//             src="https://fontmeme.com/permalink/240928/857b3140e86cdbdfba5b27cdf4d6731e.png"
//             alt="neuropolitical-font"
//             border="0"
//           />
//           <img
//             src="https://fontmeme.com/permalink/240928/d1b515851a829774842a6f71cd13fd40.png"
//             alt="neuropolitical-font"
//             border="0"
//           />
//         </div>
//       </div>

//       <div className="flex flex-row justify-center items-end content-center gap-3">
//         <a
//           href="https://github.com/samfloyd9"
//           className="hover:pointer"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="bg-white p-0.5 rounded-md">
//             <FaGithub className="bg-white text-2xl" />
//           </div>
//         </a>

//         <a
//           href="https://www.linkedin.com/in/samuel-floyd-/"
//           className="hover:pointer"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="bg-white p-0.5 rounded-md">
//             <FaLinkedin className="bg-white text-2xl" />
//           </div>
//         </a>

//         <a
//           href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=floyd.samuel.23@gmail.com"
//           className="hover:pointer"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="bg-white p-0.5 rounded-md">
//             <MdEmail className="bg-white text-2xl" />
//           </div>
//         </a>

//         <a
//           href="tel:+15854414035"
//           className="hover:pointer"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="bg-white p-0.5 rounded-md">
//             <BiSolidPhoneCall className="bg-white text-2xl" />
//           </div>
//         </a>

//         <a
//           href="https://drive.google.com/file/d/1Fg973bGcJkR15DX32tkBdnuZ3Lk2j4-y/view?usp=sharing"
//           className="hover:pointer"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <div className="bg-white p-0.5 rounded-md">
//             <IoIosDocument className="bg-white text-2xl" />
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
