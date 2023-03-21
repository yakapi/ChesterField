import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../../firebase-config'

export const LockerContext = createContext()

export function LockerContextProvider(props){

    const [lockerData, setLockerData] = useState()

    const addLockerFirebase = async (id, nom, url, area) => {
      await setDoc(doc(db,"locker",id), {
        nom: nom,
        url: url,
        area: area
      })
    }

    const getLockerData = async ()=> {
      const collectionLocker = collection(db,'locker')
      const lockerSnapshot = await getDocs(collectionLocker)
      const lockerList = lockerSnapshot.docs.map(doc => doc.data())
      return lockerList
    }

    const getOneLockerData = async (id) => {
      const docRef = doc(db, "locker", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        let result = docSnap.data()
        return result
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }      
    }

    const updateLockerData = async (id, objt) => {
      try {
        const lockerElement = doc(db,'locker', id)
        await updateDoc(lockerElement, "area", objt)
      } catch (error) {
        
      }
    }  

    return(
      <LockerContext.Provider value={{addLockerFirebase, updateLockerData, lockerData, setLockerData, getLockerData, getOneLockerData}}>
        {props.children}
      </LockerContext.Provider>
    )
  }