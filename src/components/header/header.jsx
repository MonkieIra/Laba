import './header.css'

function Header({img, text}) {
    return ( 
        <header>
            <div className="container">
                <div className="header-1">
                    <div className="head">
                        <img src={img} alt="no" />
                    </div>
                    
                    <div className="head">
                         <h3>{text}</h3>
                    </div>
                    
               
                </div>
              
            </div>
            
        </header>
     );
}

export default Header;