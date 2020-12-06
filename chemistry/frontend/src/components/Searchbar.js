import React from 'react'

const Searchbar = ({ executeSearch, setShown }) => {
  return (
    <div className="searchbar__wrapper">
      <input type="text" className="searchbar__input" placeholder="Search Compound"/>

      {/* <div className="searchbar__dropdown-wrapper">
        <ul className="searchbar__dropdown">
          <li className="searchbar__dropdown__Item"></li>
          <li className="searchbar__dropdown__Item"></li>
        </ul>
      </div> */}
      
      <button className="searchbar__button" onMouseEnter={() => {
        document.querySelector('.searchbar__button__icon').classList.add('searchbar__button__icon--hovered')
        setTimeout(() => {
          document.querySelector('.searchbar__button__icon').classList.remove('searchbar__button__icon--hovered')
        }, 500)
      }} onClick={() => {
        document.querySelector('.searchbar__button__icon').classList.add('searchbar__button__icon--clicked')
        setTimeout(() => {
          document.querySelector('.searchbar__button__icon').classList.remove('searchbar__button__icon--clicked')
        }, 200)

        executeSearch(document.querySelector('.searchbar__input').value)
        setShown('loader')

      }}>
        <i className="searchbar__button__icon material-icons">search</i>
      </button>

    </div>
  )
}

export default Searchbar
