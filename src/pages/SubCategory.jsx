import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

const SubCategory = () => {
  const { _id, subCategoryId } = useParams(); 
  const [subCategoryDetails, setSubCategoryDetails] = useState(null);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      fetch(`https://railprep.devshots.io/api/v1/category/${_id}/${subCategoryId}`, {
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
          setSubCategoryDetails(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [_id, subCategoryId]);

  return (
    <div>
      <h1>Subcategory Details</h1>
      {subCategoryDetails ? (
        <Cards data={subCategoryDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubCategory;
