import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import utilStyles from '../../styles/articles.module.css'
import Navbarlogo  from '../../components/Navbar-logo'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbarlogo></Navbarlogo>
            <article className="container mt-5 mb-5">
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br />
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}></Date>
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <div className={utilStyles.backToHome}>
                    <Link href="/">
                        <a>← Volver a inicio</a>
                    </Link>
                </div>
            </article>
            <style jsx>{`
                img {
                    width: 100%;
                }
                a {
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}