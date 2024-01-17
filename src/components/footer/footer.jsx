import './footer.css'


function Footer({copyright , year}) {
    return ( 
        <footer>
            <div className="container">
                <p>{copyright}</p>
                <p>{year}</p>
            </div>
            
        </footer>
     );
}

export default Footer;