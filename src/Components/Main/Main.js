import React from 'react'
import { useState,useEffect } from 'react';
import ProductsList from "../ProductsList";
import PaginationComponent from "../Pagination";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GET_DATA,CATEGORY } from '../../Redux/productsDataSlice';

const Main = () => {

  const {products,currentProducts} = useSelector((state)=> state.products)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(4);
  const [type, setType] = useState("");

  //fetch data
  const getData = async () => {
    const responce = await fetch("https://fakestoreapi.com/products");
    const data = await responce.json();
    return data
  };

  useEffect(() => {
    getData().then((data)=>{  
      dispatch(GET_DATA(data))
    })
  }, []);

  //filter data
  const mens_wears = products.filter(
    (product) => product.category === "men's clothing"
  );
  const jewelery = products.filter(
    (product) => product.category === "jewelery"
  );
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  const womens_wears = products.filter(
    (product) => product.category === "women's clothing"
  );

  useEffect(() => {
    switch (type) {
      case "men's clothing":
        dispatch(CATEGORY(mens_wears))
        setPostsPerPage(mens_wears.length)
        break;
      case "jewelery":
        dispatch(CATEGORY(jewelery))
        setPostsPerPage(jewelery.length)
        break;
      case "electronics":
        dispatch(CATEGORY(electronics))
        setPostsPerPage(electronics.length)
        break;
      case "women's clothing":
        dispatch(CATEGORY(womens_wears))
        setPostsPerPage(womens_wears.length)
        break;
      default:
        dispatch(CATEGORY(products))
        setPostsPerPage(4)
    }
  }, [type]);

  //get current products
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentData = currentProducts.slice(indexOfFirstPost, indexOfLastPost);

   //change page
   const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='main'>
        <select
        className='select'
        name="category"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">all</option>
        <option value="men's clothing">Men's Wear</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Wear</option>
      </select>
      <ProductsList products={currentData}/>
      {currentProducts.length > 10 && (
        <PaginationComponent
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      )}
    </div>
  )
}

export default Main