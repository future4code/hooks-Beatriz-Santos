import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/Urls'

const CharacterListPage = () => {
    useEffect( () => {
        axios.get(BASE_URL).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }, [] )

    return(
        <>
            Page principal
        </>
    )
}

export default CharacterListPage;