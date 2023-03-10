import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
  AiFillCompass,
} from "react-icons/ai";

import { Inter } from "@next/font/google";
import Image from "next/image";
import headshot from "public/Ai headshot-9.jpg";
import frontend from "public/Frontend.jpg";
import backend from "public/Backend.jpg";
import web1 from "public/web1.jpg";
import web2 from "public/web-2.png";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  if (typeof document !== "undefined") {
    const form = document.getElementById("myForm");
    const msg = document.getElementById("msg");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // code to submit form data
      form.reset(); // reset form fields
    });
  } else {
    console.log("Running in a non-browser environment.");
    // do something else here
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxSsUlfslKGGIL5l41H8DCV_5nWswMxH2t7yBM8nl4yxUWyF1dHdoFiciqLY3IbFvLjA/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    );
    if (response.ok) {
      msg.innerHTML = "Message was sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    } else {
      // handle error
      console.log("Error sending message:", response.status);
    }

    const data = await response.json();
    console.log(data);
  };

  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio | Mohamed Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/favicon-16x16.png" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Hello World!
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setdarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="Resume2.0.pdf"
                  target={"_blank"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10 dark:text-white">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:6xl dark:text-white">
              Mohamed Ahmed
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Creating something out of nothing is my passion.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
  
            <a
              href="https://www.linkedin.com/in/mohamed-ahmed-97421015a/"
              target={"_blank"}
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/" target={"_blank"}>
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
            <Image src={headshot} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the Beginning of my journey as a Software developer i have
              been gaining and mastering my skill, some of the tools i have
              gained on my way include:
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10  dark:text-white">
              <Image
                className="rounded-full overflow-hidden"
                src={frontend}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-md pt-8 pb-2 dark:text-white">
                Frontend{" "}
              </h3>
              <p className="py-2 dark:text-white">
                User experience is one of the most important aspect to my job,
                HTML/CSS were some of the first tools ive learned and has only
                grown from there.
              </p>
              <h4 className="py-4 text-teal-600">Fronted Tools I Use:</h4>
              <p className=" text-gray-800 py-1 dark:text-white">HTML5</p>
              <p className=" text-gray-800 py-1 dark:text-white">CSS3</p>
              <p className=" text-gray-800 py-1 dark:text-white">React</p>
              <p className=" text-gray-800 py-1 dark:text-white">Next Js</p>
              <p className=" text-gray-800 py-1 dark:text-white">jQuery</p>
              <p className=" text-gray-800 py-1 dark:text-white">TailWindCSS</p>
            </div>
            <div className="text-center mx-auto shadow-lg p-10 rounded-xl my-10">
              <Image
                className="rounded-full"
                src={backend}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-md pt-8 pb-2 dark:text-white">
                Backend
              </h3>
              <p className="py-2 dark:text-white">
                As i continued onmy journey backend development has become an
                essiential part of creating fully functioning application
              </p>
              <h4 className="py-4 text-teal-600 ">Backend Tools I Use:</h4>
              <p className=" text-gray-800 py-1 dark:text-white">Node.js</p>
              <p className=" text-gray-800 py-1 dark:text-white">Express.js</p>
              <p className=" text-gray-800 py-1 dark:text-white">MongoDB</p>
              <p className=" text-gray-800 py-1 dark:text-white">Heroku</p>
              <p className=" text-gray-800 py-1 dark:text-white">Django</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white underline">
              Projects
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-center mx-auto shadow-lg p-10 rounded-xl space-x-2 my-10 gap-10">
            <div className="flex flex-col md:w-1/2 dark:text-white">
              <h3 className="text-2xl font-burtons text-yellow-500 dark:text-white">
                Rummage
              </h3>
              <p>
                Rummage is a community based marketplace that allows user to
                sell unwanted items direct-to-buyers. This application uses
                React and React-Router on the frontend. While using Express Js
                and MongoDB on the backend. Rummage is fully deployed using
                Netlify and Heroku.
              </p>
              <a
                href="https://github.com/Kingsimba754/Rummage-Frontend"
                target={"_blank"}
              >
                <AiFillGithub className="text-5xl mt-10 mx-auto" />
              </a>
            </div>
            <div className="flex justify-center md:w-1/2">
              <Image
                className="rounded-md max-w-sm md:max-w-full"
                src={web1}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mx-auto shadow-lg p-10 rounded-xl space-x-2 my-10 gap-10">
            <div className="flex flex-col md:w-1/2 dark:text-white">
              <h3 className="text-2xl font-burtons text-yellow-500 dark:text-yellow-500">
                What to watch!
              </h3>
              <p>
                "What to watch!" was one of the first projects that i worked on.
                Accessing an API and displaying information on the DOM was the
                ultimate Goal of of this project. Using Technolgies such as
                JavaScript and Jquery i was able to generate a random movie
                suggestion from the API. Allowing users to free up time from
                endless searching for a movie or TV show to watch. This website
                is also hosted on GitHub pages.
              </p>
              <a
                href="https://github.com/Kingsimba754/what-to-watch"
                target={"_blank"}
              >
                <AiFillGithub className=" text-5xl mt-10 mx-auto" />
              </a>
            </div>
            <div className="flex justify-center md:w-1/2">
              <Image
                className="rounded-md max-w-sm md:max-w-full"
                src={web2}
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex p-1 justify-center items-center">
            <div className="flex flex-col space-y-6 bg-gradient-to-r from-teal-700 to-teal-400 w-full p-8 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0">
              <div className="flex flex-col space-y-6 justify-between md:w-1/2">
                <div>
                  <h1 className="text-4xl font-bold tracking-wide">
                    Contact Info!
                  </h1>
                  <p className="pt-2 text-cyan-100 text-xl">
                    For a more direct contact solution please leave your Name,
                    Email and a brief message. Look forward to hearing from you!
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="inline-flex space-x-2 items-center">
                    <AiFillPhone className="text-teal-300 text-xl" />{" "}
                    <span>+(732) 298-4227</span>
                  </div>
                  <div className="inline-flex space-x-2 items-center">
                    <AiFillMail className="text-teal-300 text-xl" />{" "}
                    <span>Mohamedahmed754@hotmail.com</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className=" flex justify-start bg-white rounded-xl shadow-lg p-8 text-gray-600">
                  <form
                    onSubmit={handleSubmit}
                    id="myForm"
                    className="flex flex-col space-y-4"
                  >
                    
                    <div>
                      <label htmlFor="" className="text-sm">
                        Your name
                      </label>
                      <div>
                        <input
                          type="text"
                          name="Name"
                          required
                          onChange={handleChange}
                          placeholder="Your name"
                          className=" ring-1 ring-gray-300 rounded-md px-4 py-2 mt-2 oultine-none focus:ring-2 focus:ring-teal-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Email Address
                      </label>
                      <div>
                        <input
                          type="email"
                          name="Email"
                          required
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="ring-1 ring-gray-300 rounded-md px-4 py-2 mt-2 oultine-none focus:ring-2 focus:ring-teal-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Message
                      </label>
                      <div>
                        <textarea
                          name="Message"
                          onChange={handleChange}
                          rows="4"
                          className="ring-1 ring-gray-300 rounded-md px-4 py-2 mt-2 oultine-none focus:ring-2 focus:ring-teal-300"
                        ></textarea>
                      </div>
                    <span id="msg" className="block mt-5 "></span>
                    </div>
                    <button
                      type="submit"
                      className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                    >
                      Send Message!
                    </button>
  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
