import React, {useState} from 'react'
import Link from "next/link"


export default function Blog(){
    let id = ["COD","XBOX"]
    return(
        <div>
            <Link href={"/blog/" + id[0]}>
            <div className="articles_container">
                <h1>Call of Duty MW2</h1>
            </div>
            </Link>
            <Link href={"/blog/" + id[1]}>
            <div className="articles_container">
                <h1>XBOX Rocket League</h1>
            </div>
            </Link>


        </div>
    )
}