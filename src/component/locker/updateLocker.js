import React, {useContext, useEffect, useState} from 'react'
import {LockerContext} from "../../context/lockerContext"


export default function UpdateLocker({updateData, closeUpdateLocker}){
    function isEmpty(str) {
        return (!str || 0 === str.length);
      }
    const { getOneLockerData, updateLockerData} = useContext(LockerContext)
    const [oneLockerData, setOneLockerData] = useState(null)
    const loadLockerData = async (e) =>{
        let cred = await getOneLockerData(updateData)
        console.log(cred);
        setOneLockerData(cred)
        return cred
    }
    const submitUpdate = (e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
        updateLockerData(e.target[0].value, e.target[2].value)
        closeUpdateLocker()
    }
    // let mountState = false
    useEffect(()=>{
        console.log('MOUNT TES');
        // if (mountState) {
            loadLockerData()

        // }
        // mountState = true
    },[])

    return(
        <div>
            {isEmpty(oneLockerData) ? "" : 
            
                <div className='add_locker_container'>
                    <form onSubmit={submitUpdate} className='add_locker_form'>
                        <div className='add_locker_zone'>
                            <div className='add_locker_line'>
                                <label htmlFor="add_locker_name">Name : </label>
                                <input type="text" id='add_locker_name' name="add_locker_name" readOnly value={oneLockerData.nom} />
                            </div>
                            <div className='add_locker_line'>
                                <label htmlFor="add_locker_url">url image : </label>
                                <input type="text" id='add_locker_url' name="add_locker_url" readOnly value={oneLockerData.url}/>
                            </div>
                        </div>
                        <div className='add_locker_line'>
                            <textarea name="add_locker_area" rows="14" cols="50"  defaultValue={oneLockerData.area}  ></textarea>
                        </div>
                        <div className='add_locker_btnline'>
                            <input type="submit" id='add_locker_name' className='link_green' name="add_locker_name" value="update"/>
                            <button onClick={closeUpdateLocker}  className='link_red'>Annuler</button>
                        </div>

                    </form>
                </div>
            
            }
        </div>
    )
}