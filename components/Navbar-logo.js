import Link from 'next/link'

export default function Navbarlogo() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <Link href="/"><a className="navbar-brand"><img src="/images/logo_horizontal_72ppp.png" /></a></Link>
                </div>
            </nav>
            <style jsx>{`
            .navbar-brand img {
                height: 10vh;
            }
            `}</style>
        </>
    )
}