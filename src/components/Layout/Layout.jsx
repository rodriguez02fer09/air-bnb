import {Header,Footer} from "../"
import Context from "../../context/context"

export default function Layout ({children}){
    return (
		<div className="layout">
			<Context.Provider value={{state: state, update: update}}>
				<Header/>
				<main>
					{children}
				</main>
				<Footer/>
			</Context.Provider>
		</div>
	)

}