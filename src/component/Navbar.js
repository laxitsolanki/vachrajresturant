import React from 'react'

const Navbar = (props) => {
  return (
    <>
       <nav className="navbar">
        <div className="btn-group">
          {props.menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => props.filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
