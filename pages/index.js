import Head from "next/head"
import Link from "next/link"
import A from '../components/A'
import MainContainer from "../components/MainContainer"

const Index = () =>{
    return(

        <MainContainer keywords={'Главная, страница, page'}>
            <div>
                <h1>Главная страница приложения</h1>
            </div>
        </MainContainer>
    )
}

export default Index