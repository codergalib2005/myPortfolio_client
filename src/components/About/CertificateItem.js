import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    margin: "0 15px",
    background: "none",
    transition: "all 0.5s linear",
  },
};

Modal.setAppElement("#root");

const CertificateItem = ({ item }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  const { title, description, industry_link, industry, image, document } =
    item || {};
  return (
    <div>
      <div className="gradiend-purple shadow-md relative p-4 ">
        <div
          className="certificate-card overflow-hidden"
          style={{ height: "236px" }}
        >
          <img className="min-h-full w-full" src={image} alt={title} />
          <div className="absolute top-4 left-4 right-4 bottom-4 bg-overlay flex items-center justify-center flex-col certificate-card-body p-4">
            <h2 className="font-bold mb-2 text-xl text-center">{title}</h2>
            <div className="grid grid-cols-2 gap-1">
              <a
                href={document}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 px-4 py-1 border-2 border-red-600 hover:bg-transparent rounded-full text-center"
              >
                View
              </a>
              <button
                onClick={openModal}
                className="bg-red-600 px-4 py-1 border-2 border-red-600 hover:bg-transparent rounded-full text-center"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={`${description}`} />
          <meta
            name="keyword"
            content="portfolio, galib, asadullah hil gailb, my portfolio, web designer, web development, application development, software developer, apps developer, mern developer, frontend developer, full stack developer "
          />
          <link
            rel="canonical"
            href={`https://happy-snyder-173398.netlify.app`}
          />
          <link rel="canonical" href={`${image}`} />
        </Helmet>
        <div className="w-full h-full max-w-md p-6 gradiend-purple-deep ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-white">{title}</h2>
            <button className="text-2xl text-white" onClick={closeModal}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between text-white pt-4 ">
              <h3>{industry}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-white border-b border-white"
                href={industry_link}
              >
                Details
              </a>
            </div>
            <p className="text-gray-200 pt-3">{description}</p>
            <a
              href={document}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 px-4 py-3 mt-4 inline-block border-2 border-red-600 hover:bg-transparent text-white rounded-full text-center"
            >
              View Documents
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CertificateItem;
