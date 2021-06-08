import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="w3l-footer-16 container">
                <div className="w3l-footer-16-main">
                    <div className="container">
                        <div className="row footer-p">
                            <div className="w-100 text-align-center">
                                <Link className="logo" to="/"><i aria-hidden="true" />Home Made Tiffin</Link>
                                <p className="mt-4">Home Made Tiffin is a .....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer style={{textAlign:'center'}}>
            <small class="copyright">Designed with <FavoriteIcon style={{color:'#fb866a'}} /> by <a href="https://siddhant-ahire.github.io" target="_blank">Siddhant Ahire</a></small>
            </footer>
        </>
    )
}

export default Footer
