import React from "react";
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
      <div className="bg-dark p-4 shadow-md relative certificate-card">
        <img src={image} alt={title} />
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-overlay w-full h-full max-w-md p-6">
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 rounded-full p-3">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <button
              className="flex items-center justify-center text-3xl text-red-600"
              onClick={closeModal}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between text-white pt-4">
              <h3>{industry}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-red-500 border-b border-red-500"
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
