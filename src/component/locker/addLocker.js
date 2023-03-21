import React, {useContext} from 'react'

import {LockerContext} from "../../context/lockerContext"


export default function AddLocker({closeAddLocker}){
    const { addLockerFirebase, lockerData, setLockerData} = useContext(LockerContext)

    const submitAddLocker = (e)=>{
        function isEmpty(str) {
            return (!str || 0 === str.length);
          }
        e.preventDefault()
        addLockerFirebase(e.target[0].value,e.target[0].value, e.target[1].value, e.target[2].value)
        console.log(isEmpty(lockerData));
        if (isEmpty(lockerData)) {
            let newLockerData = []
            let addData = {
                "nom": e.target[0].value,
                "url": e.target[1].value,
                "area": e.target[2].value
            }
            newLockerData.push(addData)
            setLockerData(newLockerData)
            closeAddLocker()
        }else{
            let newLockerData = []
            for (let i = 0; i < lockerData.length; i++) {
                newLockerData.push(lockerData[i])                
            }
            let addData = {
                "nom": e.target[0].value,
                "url": e.target[1].value,
                "area": e.target[2].value
            }
            newLockerData.push(addData)
            setLockerData(newLockerData)
            closeAddLocker()
        }
    }
    return(
        <div className='add_locker_container'>
            <form onSubmit={submitAddLocker} className='add_locker_form'>
                <div className='add_locker_zone'>
                    <div className='add_locker_line'>
                        <label htmlFor="add_locker_name">Name : </label>
                        <input type="text" id='add_locker_name' name="add_locker_name" />
                    </div>
                    <div className='add_locker_line'>
                        <label htmlFor="add_locker_url">url image : </label>
                        <input type="text" id='add_locker_url' name="add_locker_url" />
                    </div>
                </div>
                <div className='add_locker_line'>
                    <textarea name="add_locker_area" rows="14" cols="50"></textarea>
                </div>
                <div className='add_locker_btnline'>
                    <input type="submit" id='add_locker_name' className='link_green' name="add_locker_name" />
                    <button onClick={closeAddLocker} className='link_red'>Annuler</button>
                </div>

            </form>
        </div>
    )
}