import Link from "next/link"
import { useEffect, useState } from "react"
import MainContainer from "../components/MainContainer"

const Users = ({users}) =>{

    return(
        <MainContainer keywords={'Пользователи, users'}>
            <h1>Пользователи</h1>
            {
                users.map((user)=>{
                    return <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                })
            }
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await responce.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
  }