import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/FolioDetails/Loader";
import Main from "../components/FolioDetails/Main";
import HaierMe from "../components/HaierMe";
import { useGetAPortfolioQuery } from "../features/api/apiSlice";
import Message from "../ui/Message";
const FolioDetails = () => {
  const { portfolioId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetAPortfolioQuery(portfolioId);
  let content = null;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Message message="That was server error!" color="red" />;
  } else if (!isLoading && !isError && !product.name) {
    content = <Message message="Product Not Found!" color="red" />;
  } else if (!isLoading && !isError && product) {
    content = (
      <>
        <Main product={product} isLoading={isLoading} />
      </>
    );
  }
  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        {content} <HaierMe />
      </div>
    </div>
  );
};

export default FolioDetails;
