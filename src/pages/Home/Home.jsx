import React from "react";
import './home.css'
import Search  from '../../components/Search/Search'
import CategoryProducts from "../../components/CategoryProcuts/CategoryProducts"
import RecomDetailProducts from "../../components/RecomDetailProcuts/RecomDetailProducts"
const Home = ()=>{
    return (<div className="main-container">
        <Search/>
        <CategoryProducts />
        <RecomDetailProducts/>
        </div>
    )
}
export default Home;