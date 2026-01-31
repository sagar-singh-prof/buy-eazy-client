import { useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";

export default function MainPage(){
    const [selected,setSelected]=useState("home")
    return (
        <>
        
        <NavBar selected={selected} onSelect={setSelected}></NavBar>
        <div>
            {
                selected ==='Home' && <HomePage />
                
            }
            {selected === 'Cart' && <Cart />}
        </div>
        
        
        </>
    )
}