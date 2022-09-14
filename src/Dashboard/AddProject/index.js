import React, { useReducer, useState } from "react";
import AddBenefits from "./AddBenefits";
import AddImage from "./AddImage";
const initialState = {
  images: [],
  benefits: [],
  tools: [],
  technology: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BENEFITS":
      return {
        ...state,
        benefits: [...state.benefits, action.payload],
      };
    case "REMOVE_BENEFITS":
      return {
        ...state,
        benefits: state.benefits.filter((item) => item !== action.payload),
      };
    case "ADD_TOOLS":
      return {
        ...state,
        tools: [...state.tools, action.payload],
      };
    case "REMOVE_TOOLS":
      return {
        ...state,
        tools: state.tools.filter((item) => item !== action.payload),
      };
    case "ADD_TECHNOLOGY":
      return {
        ...state,
        technology: [...state.technology, action.payload],
      };
    case "REMOVE_TECHNOLOGY":
      return {
        ...state,
        technology: state.technology.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <AddImage />
          </div>
          <div className="col-span-8">
            {/* Input Group */}
            <div>
              <label
                className="flex font-bold items-center text-gray-400"
                htmlFor="project_name"
              >
                Project Name
              </label>
              <input
                autoComplete="off"
                className="bg-transparent border-2 border-gray-400 py-2 text-xl text-red-400 w-full px-2 rounded mt-2"
                type="text"
                name="name"
                id="project_name"
                placeholder="Project name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Input Group */}
            <div className="mt-6">
              <label
                className="flex font-bold items-center text-gray-400"
                htmlFor="project_description"
              >
                Project Description
              </label>
              <textarea
                rows={5}
                autoComplete="off"
                className="bg-transparent border-2 border-gray-400 py-2 text-lg text-red-400 w-full px-2 rounded mt-2"
                type="text"
                name="description"
                id="project_description"
                placeholder="Project description..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            {/* Input Group */}
            <AddBenefits state={state} dispatch={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
