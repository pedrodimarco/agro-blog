import styles from './footer.module.css'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className="container text-center" id="contact">
                    <div className="row title pt-5 pb-5">
                        <h1 className="text-center">Contacto</h1>
                    </div>
                    <div className="row m-0 pb-3">
                        <div className="col">
                            <i className="far fa-envelope"></i>
                            <p>blog_example@gmail.com</p>
                        </div>
                        <div className="col">
                            <i className="fas fa-phone-alt"> </i>
                            <p>+59899123123</p>
                        </div>
                        <div className="col">
                            <i className="fab fa-instagram"></i>
                            <p>@example.blog</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            
            p, i {
                font-size: 30px;
            }
            `}

            </style>
        </>
    )
}
