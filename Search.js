import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './data';

const Search = () => {
    const [filter, setFilter] = useState('');
    const [noOfElements, setnoOfElements] = useState(4);
    
    const slice = data.cardData.slice(0, noOfElements);
    
        
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {

     return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return(
        <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="logo.jpeg" alt="Bootstrap" width="200" height="50"/>
    </a>
  </div>
</nav>
        <section className="py-4 container">
        <div className="row justify-content-center">

        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto">
            <label className="form-lable h4">Search</label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={searchText.bind(this)}
            />
          </div>
        </div>

         {dataSearch.map((item,index)=>{
            return(
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                   <img src={item.img} alt="" className="card-img-top"/>
                   <div className="card-body" >
                       <h5 className = "card-title">{item.title}</h5>
                       <p className="card-text">{item.desc}</p>
                   </div>
                </div>
                </div>

            )
         })}
         
        </div>
        </section>
        <nav aria-label="...">
                <ul class="pagination">
                <li class="page-item disabled">
                 <a class="page-link">Previous</a>
              </li>
            <li class="page-item"><a class="page-link" href="./Search">1</a></li>
            <li class="page-item active" aria-current="page">
             <a class="page-link" href="./Search2">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="./Search3">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
             </li>
             </ul>
         </nav>
         </div>
    );

}

export default Search;