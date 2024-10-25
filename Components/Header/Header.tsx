import React from "react";
import styles from "./style.module.css";


export default function HeaderPage(){
    return(
      <div>
           <header>
                <div className={styles.navbar}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contuct US</a></li>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">More Info</a></li>
                    </ul>

                </div>
           </header>
      </div>
    )
  }