import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const typingHeadArray = ["Hostel 5", "PentHouse", "Insti Ka Baap"];
  const [typingHead, setTypingHead] = useState("");
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const iRef = useRef(0);
  const jRef = useRef(0);
  const incRef = useRef(true);

  const typingAnimationFunction = () => {
    if (incRef.current) {
      if (jRef.current < typingHeadArray[iRef.current].length) {
        jRef.current++;
      } else {
        incRef.current = false;
        clearInterval(intervalRef.current);
        timeoutRef.current = setTimeout(() => {
          intervalRef.current = setInterval(typingAnimationFunction, 100);
        }, 1000);
      }
    } else {
      if (jRef.current > 0) {
        jRef.current--;
      } else {
        incRef.current = true;
        if (iRef.current < typingHeadArray.length - 1) {
          iRef.current++;
        } else {
          iRef.current = 0;
        }
      }
    }
    setTypingHead(typingHeadArray[iRef.current].substring(0, jRef.current));
  };

  useEffect(() => {
    intervalRef.current = setInterval(typingAnimationFunction, 100);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 select-none">
      {/* landing page */}
      <div className="flex flex-col gap-3 sm:flex-row sm:h-[80vh] items-center sm:max-w-screen-lg sm:m-auto">
        <div className="m-auto flex-1">
          <img
            src="/hostel5-banner.png"
            alt="hostelGateImage"
            className="h-[60vh] sm:[70vh] m-auto"
          />
        </div>
        <div className="text-white flex-1">
          <div className="text-6xl font-semibold text-center my-3">
            {typingHead}
            <span className="border-2 ml-2"></span>
          </div>
          <div className="text-lg text-center">
            Welcome to the beating heart of student life at IIT Bombay where
            camaraderie meets academic excellence, and every corridor echoes
            with the spirit of innovation. Welcome to Hostel 5, your home away
            from home.
          </div>
        </div>
      </div>
      <hr className="border-2 border-gray-400" />
      {/* about us */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-screen-lg m-auto my-10">
        <div className="relative w-full aspect-[1.3] sm:flex-1">
          <div className="border-4 border-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-full"></div>
          <img
            src="/about-us.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[84%] object-cover"
          />
        </div>
        <div className="text-white sm:flex-[1.5] flex flex-col justify-center">
          <div className="text-4xl">About Us</div>
          <div className="text-lg">
            Located within the vibrant campus of the prestigious Indian
            Institute of Technology Bombay, Hostel 5 stands as more than just a
            residence; it's a community, a home away from home for students from
            diverse backgrounds and disciplines. With a rich history spanning
            decades, Hostel 5 has been a cornerstone of student life, fostering
            academic excellence, camaraderie, and personal growth.
          </div>
        </div>
      </div>
      <hr className="border-2 border-gray-400" />
      {/* our mission page */}
      <div className="flex flex-col sm:flex-row-reverse gap-6 max-w-screen-lg m-auto my-10">
        <div className="relative w-full aspect-[1.3] sm:flex-1">
          <div className="border-4 border-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-full"></div>
          <img
            src="/our-mission.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[84%] object-cover"
          />
        </div>
        <div className="text-white sm:flex-[1.5] flex flex-col justify-center">
          <div className="text-4xl">Our Mission</div>
          <div className="text-lg">
            At Hostel 5, our mission is simple yet profound: to provide an
            inclusive and nurturing environment where every resident can thrive
            academically, socially, and personally. We strive to cultivate a
            culture of respect, collaboration, and innovation, empowering our
            residents to pursue their passions, excel in their studies, and make
            meaningful contributions to society.
          </div>
        </div>
      </div>
      <hr className="border-2 border-gray-400" />
      {/* division page */}
      <div className="flex flex-col gap-4 my-10 text-white md:flex-row max-w-screen-lg m-auto">
        {[
          [
            "Culturals",
            "From vibrant cultural festivals to spirited talent nights, Hostel 5 is a melting pot of creativity, where diverse talents shine and traditions come alive.",
            "/cult",
          ],
          [
            "Technicals",
            "At Hostel 5, innovation knows no bounds. From hackathons to technical symposiums, we're a hub of ideas where minds converge to shape the future.",
            "/tech",
          ],
          [
            "Sports",
            "In the arena of sports, Hostel 5 reigns supreme. With state-of-the-art facilities and a passion for excellence, we celebrate teamwork, determination, and sporting prowess.",
            "/sports",
          ],
        ].map((division) => (
          <div
            className="flex flex-col gap-2 mx-2 border-b border-t py-3 rounded-2xl"
            key={division[0] + "home-section"}
          >
            <div className="m-auto text-3xl">{division[0]}</div>
            <div className="text-lg text-center">{division[1]}</div>
            <Link
              to={division[2]}
              className="relative m-auto border px-3 py-2 rounded-md before:content-[''] before:absolute before:-z-10 before:bg-slate-600 before:top-0 before:left-0 before:h-full before:w-full before:max-w-0 before:hover:max-w-full before:rounded-md before:transition-all"
            >
              Go to {division[0]} page
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
