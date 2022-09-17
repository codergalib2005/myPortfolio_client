import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import swal from "sweetalert";

const contactPageStyle = {
  minHeight: "90vh",
  backgroundSize: "cover",
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xdojezqa");
  if (state.succeeded) {
    swal("Thanks for contract!", "Galib Mail send successfully!!", "success");
  }

  return (
    <div style={contactPageStyle}>
      <Helmet>
        <title>Asadullah Hil Galib || Contact</title>
        <meta
          name="description"
          content="Hey There! I'm Asadullah Hil Galib, I am Full stack (MERN) Developer Including ReactJs, NodeJs, ExpressJs, MongoDB, I'm an enthusiastic and
            detail-oriented, Mern Stack Developer. seeking an entry-level position with
            the Company to use my skills in coding, troubleshooting complex design, and
            assisting in the timely completion of projects."
        />
        <meta
          name="keyword"
          content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer "
        />
        <link
          rel="canonical"
          href={`https://happy-snyder-173398.netlify.app/contact`}
        />
      </Helmet>
      <div className="container py-14 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-red-500 hover:bg-red-400 smooth rounded-xl h-48 grid items-center justify-center text-center">
            <div>
              <span className="text-center text-gray-100 smooth text-4xl pb-3 transform scale-100 hover:scale-125 block">
                <FaPhoneAlt className="mx-auto" />
              </span>
              <strong className="text-gray-100 block transform scale-100 hover:scale-105 smooth">
                Phone: +8801313283527
              </strong>
            </div>
          </div>
          <div className="bg-red-500 hover:bg-red-400 smooth rounded-xl h-48 grid items-center justify-center text-center">
            <div>
              <span className="text-center text-gray-100 smooth text-4xl pb-3 transform scale-100 hover:scale-125 block">
                <MdLocationOn className="mx-auto" />
              </span>
              <strong className="text-gray-100 block transform scale-100 hover:scale-105 smooth">
                Location: Pulhat Street, Nilphamari
              </strong>
            </div>
          </div>
          <div className="bg-red-500 hover:bg-red-400 smooth rounded-xl h-48 grid items-center justify-center text-center">
            <div>
              <span className="text-center text-gray-100 smooth text-4xl pb-3 transform scale-100 hover:scale-125 block">
                <MdOutlineMailOutline className="mx-auto" />
              </span>
              <strong className="text-gray-100 block transform scale-100 hover:scale-105 smooth">
                Email: codergalib@gmail.com
              </strong>
            </div>
          </div>
        </div>
        <div className="w-full">
          {state.succeeded && (
            <p className="text-red-50 pt-4">Thanks for joining!</p>
          )}
          }
          <form onSubmit={handleSubmit}>
            <input
              autocomplete="off"
              className="w-full border-2 border-red-500 hover:border-red-300 input-filed py-2 text-gray-300 px-3  font-bold bg-transparent smooth"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              autocomplete="off"
              className="w-full border-2 border-red-500 hover:border-red-300 input-filed py-2 text-gray-300 px-3 mt-3 font-bold bg-transparent smooth"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              autocomplete="off"
              className="w-full border-2 border-red-500 hover:border-red-300 input-filed py-2 text-gray-300 px-3 mt-3 font-bold bg-transparent smooth"
              id="number"
              type="text"
              placeholder="Number"
              name="number"
            />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
            <textarea
              autocomplete="off"
              className="w-full border-2 border-red-500 hover:border-red-300 input-filed py-2 text-gray-300 px-3 mt-3 font-bold bg-transparent smooth"
              id="message"
              name="message"
              placeholder="Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="text-red-500 border-2 border-red-500 hover:border-gray-100 hover:bg-gray-100 font-bold  inline-block py-2 px-6"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
// className="w-full border-2 border-red-500 hover:border-red-300 input-filed py-2 text-gray-400 px-3 mt-3 font-bold bg-transparent smooth"
export default Contact;
