import Profpic from "../images/profpic.png"
import About from "./about.js"
import Interest from "./interest.js"
import Contacts from "./contacts.js"
import Header from "./header.js"

export default function Content(){
    return(
        <div className="bg-slate-900 p-10 w-screen h-screen">
            <div className="bg-slate-800 rounded-xl flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/3">
                    <img src={Profpic} className="object-cover w-full max-h-64 rounded-tr-xl rounded-tl-xl md:h-full md:w-auto md:max-h-full md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none"></img>
                </div>
                
                <div className="flex flex-col w-full h-full justify-center md:w-2/3 bg-dark px-12 py-5 md:px-16 md:py-8">
                    <Header />
                    <Contacts />
                    <About />
                    <Interest />
                </div>
            </div>
        </div>
    );
}