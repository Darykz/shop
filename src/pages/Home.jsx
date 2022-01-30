import React from "react";
import Card from "../Components/Card";


function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
    }){

    function renderItems(){
      
      const filteredItems = items.filter((item) => 
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      console.log(filteredItems)
      return (isLoading ? [1,2,3] : filteredItems).map((item, i) => (
        <Card 
          key={i}
          onFavorite = {(obj) => onAddToFavorite(obj)}
          onClickPlus = {(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...item}
          />
          ))
      
      
    }
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            {searchValue && <img onClick={() => setSearchValue("")} className="clear cu-p" src="/img/btn-remove.svg" alt="clear input"></img>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {renderItems()}
          
        </div>
      </div>

    );
}

export default Home;