import React from "react";

const Footer = () => {
    return (
        <>
        <footer className="footer">
                    <div className="container">
                        <nav>
                            <ul>
                                <li><a href="http://thememakker.com/contact/" target="_blank" rel="noopener noreferrer">Contate-nos</a></li>
                                <li><a href="http://thememakker.com/about/" target="_blank" rel="noopener noreferrer">Sobre nós</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </nav>
                        <div className="copyright">
                            &copy; <span>{new Date().getFullYear()}</span> \ Desenvolvido por
                            <a href="https://github.com/lucasleytao" target="_blank" rel="noopener noreferrer"> Inova at Business</a>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer