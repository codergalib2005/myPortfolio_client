import React from "react";
import { Helmet } from "react-helmet";
import { BsArrowUpLeft } from "react-icons/bs";
import { GiRoundKnob } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  let id = 1;
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="py-10">
      <Helmet>
        <title>Asadullah Hil Galib || About</title>
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
          href={`https://happy-snyder-173398.netlify.app/blogd/${id}`}
        />
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl">Publication title</h2>
          <button className="bg-dark text-white py-1 px-3 text-sm font-bold rounded-full">
            Ui Design, Graphic
          </button>
          <button
            onClick={handleBack}
            className="flex items-center text-white hover:text-red-500"
          >
            <span className="pr-3">
              <BsArrowUpLeft />
            </span>{" "}
            Back Newsletter
          </button>
        </div>
        <div className="h-400 mt-10 overflow-hidden">
          <img
            className="w-full transform scale-100 hover:scale-110 transition-all duration-300 ease-linear"
            src="https://codergalib20.github.io/One-Page-Protfolio-design/images/blog/1.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-8 bg-dark p-6">
            <strong className="block text-white text-lg">
              Consectetur adipisicing elit. Magni debitis nemo, minus aut
              tempora impedit quis quam omnis, odit saepe ipsa sunt magnam culpa
              quisquam iusto consectetur necessitatibus. Tenetur, eligendi!
            </strong>
            <p className="text-sm pt-4 text-gray-400">
              Vero praesentium voluptatibus repellendus, delectus harum.
              Necessitatibus temporibus, veritatis sapiente laudantium eius rem
              dolore voluptas porro assumenda quam ea earum ad dolor dolores ut
              ipsam optio! Numquam dolore quidem sequi eum placeat voluptatum,
              assumenda et culpa iure nemo vero animi mollitia facere fuga sit
              debitis doloremque quo tempore nesciunt voluptates cum. Est,
              labore pariatur cupiditate non alias officia ad nihil animi itaque
              soluta quo perferendis vero libero ex. Iste ipsam eaque veniam
              facilis architecto unde, quibusdam accusamus culpa cumque delectus
              deserunt nemo saepe minima.
            </p>
            <ul className="py-4 pl-5">
              <li className="flex items-center text-md text-white">
                <span className="text-secondary pr-3">
                  <GiRoundKnob />
                </span>{" "}
                Doloribus recusandae
              </li>
              <li className="flex items-center text-md text-white">
                <span className="text-secondary pr-3">
                  <GiRoundKnob />
                </span>{" "}
                Doloribus recusandae
              </li>
              <li className="flex items-center text-md text-white">
                <span className="text-secondary pr-3">
                  <GiRoundKnob />
                </span>{" "}
                Doloribus recusandae
              </li>
              <li className="flex items-center text-md text-white">
                <span className="text-secondary pr-3">
                  <GiRoundKnob />
                </span>{" "}
                Doloribus recusandae
              </li>
            </ul>
            <p className="text-sm pt-4 text-gray-400">
              Vero praesentium voluptatibus repellendus, delectus harum.
              Necessitatibus temporibus, veritatis sapiente laudantium eius rem
              dolore voluptas porro assumenda quam ea earum ad dolor dolores ut
              ipsam optio! Numquam dolore quidem sequi eum placeat voluptatum,
              assumenda et culpa iure nemo vero animi mollitia facere fuga sit
              debitis doloremque quo tempore nesciunt voluptates cum. Est,
              labore pariatur cupiditate non alias officia ad nihil animi itaque
              soluta quo perferendis vero libero ex. Iste ipsam eaque veniam
              facilis architecto unde, quibusdam accusamus culpa cumque delectus
              deserunt nemo saepe minima.
            </p>
            <p
              className="bg-secondary-deep text-white mt-3 py-10 px-6"
              style={{ borderRadius: "40% 0" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              officiis aliquam, placeat quis voluptatum ad. Eum, alias quo fuga
              sed?
            </p>
            <p className="text-sm pt-4 text-gray-400">
              Vero praesentium voluptatibus repellendus, delectus harum.
              Necessitatibus temporibus, veritatis sapiente laudantium eius rem
              dolore voluptas porro assumenda quam ea earum ad dolor dolores ut
              ipsam optio! Numquam dolore quidem sequi eum placeat voluptatum,
              assumenda et culpa iure nemo vero animi mollitia facere fuga sit
              debitis doloremque quo tempore nesciunt voluptates cum. Est,
              labore pariatur cupiditate non alias officia ad nihil animi itaque
              soluta quo perferendis vero libero ex. Iste ipsam eaque veniam
              facilis architecto unde, quibusdam accusamus culpa cumque delectus
              deserunt nemo saepe minima.
            </p>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
