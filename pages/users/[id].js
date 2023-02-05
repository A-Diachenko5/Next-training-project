import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/User.module.scss'

export default function User ({user}) {
    const router = useRouter()
    return (
        <MainContainer keywords={'Личная страница, ЛК, page'}>
            <div className={styles.user}>
                <h1>Пользователь {router.query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }