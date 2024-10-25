import CSS from "../Header/style.module.css"

console.log(CSS)
export default function HeaderPage(){
    return(
      <div>
           <header>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contuct US</a></li>
                        <li><a href="#">DEtails</a></li>
                        <li><a href="#">More Info</a></li>
                    </ul>

                </div>
           </header>
      </div>
    )
  }