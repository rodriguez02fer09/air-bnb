import React from "react";
import {Header, Footer} from "../../components"

export default function Layout({ children }) {
  return (
    <div className="layout">
     <Header/>
				<main>
					{children}
				</main>
				<Footer/>
			
    </div>
  );
}
