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
  const { title, description, industry, image, document } = item || {};
  return (
    <div>
      <div className="bg-dark p-4 shadow-md relative certificate-card">
        <img src={image} alt={title} />
        <div className="absolute top-4 left-4 right-4 bottom-4 bg-overlay flex items-center justify-center flex-col certificate-card-body p-4">
          <h2 className="font-bold mb-2 text-xl">{title}</h2>
          <a
            href={document}
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 px-4 py-1 border-2 border-red-600 hover:bg-transparent rounded-full"
          >
            View
          </a>
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
        </Helmet>
        <div className="bg-dark w-full h-full max-w-md p-6">
          <div className="flex items-center justify-between">
            <div></div>
            <button onClick={closeModal}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div></div>
        </div>
      </Modal>
    </div>
  );
};

export default CertificateItem;
