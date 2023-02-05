import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'A.Diachenko ' + keywords}></meta>
                <title> Главная</title>
            </Head>
            <div className="navBar">
                <A href={'/'} text={'Главная'}/>
                <A href={'/users'} text={'Пользователи'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                    {`
                        .navBar{
                            background: orange;
                            padding: 15px;
                        }
                    `}
            </style>
        </>
    )
}

export default MainContainer