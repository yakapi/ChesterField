import React, {useContext, useState, useEffect} from 'react'

import { UserContext } from '../../context/userContext'

import { useRouter } from 'next/router'
import Navigation from '../../component/navigation/navigation'
import LockerPlugin from '@/component/locker/locker'

export default function locker(){
  const {currentUser, setUserInfo} = useContext(UserContext)
  const router = useRouter()
  //si utilisateur pas connecté alors ...
  if (!currentUser) {
    router.push('/')
  }
    //si il est connecté on retourne Outlet qui renvoie à la route enfant
    return(
      <div>
        <Navigation/>
        <LockerPlugin/>
      </div>
    )
}
