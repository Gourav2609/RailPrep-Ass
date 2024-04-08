import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

const DetailPage = () => {
  const { _id } = useParams();
  const [subCategoryDetails, setSubCategoryDetails] = useState([]);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  
    if (token) {
      fetch(`https://railprep.devshots.io/api/v1/category/${_id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data: ", data);
          setSubCategoryDetails(data.data.categories);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [_id]);

  useEffect(() => {
    console.log("SubCategory: ", subCategoryDetails);
}, [subCategoryDetails]);
  

  return (
    <>
    <NavBar />
    <section className="bg-gray-50 dark:bg-gray-900 mt-14 ">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sub Categories
              </h1>
              <ul className="flex flex-wrap justify-center gap-4"> 
                {subCategoryDetails.map((item) => (
                  <Cards key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default DetailPage;
