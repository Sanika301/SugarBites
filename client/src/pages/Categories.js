import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="category-card">
        <div className="row">
          <h1 className="text-center text-white">Explore More Categories</h1>
          {categories.map((c) => (
            <div className="col-md-3 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="explore-category">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
