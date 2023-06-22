import React, { useState } from 'react'
import Menu from './menuApi.js';
import Card from './Card.js';
import './style.css';
import Navbar from './Navbar.js';


const List = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(List);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(List);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };


    return (
       <>
    
    <Navbar filterItem={filterItem} menuList={menuList} />
      <Card menuData={menuData} />
       </>
    )
}

export default Resturant
