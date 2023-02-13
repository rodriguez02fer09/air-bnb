import React from "react";
import './home.css'
import Search  from '../../components/Search/Search'
import CategoryProducts from "../../components/CategoryProcuts/CategoryProducts"

const Home = ()=>{
    return (<div>
        <Search/>
        <CategoryProducts />
        </div>
    )
}
export default Home;