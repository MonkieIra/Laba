import './nav.css'

function Nav({links}) {
    return (
        <header>
            <div className="container">
                <nav>
                <ul>
                    {
                        links.map((link)=>{
                            return <li>{link}</li>
                        })
                    }
                    
                </ul>
            </nav> 
            </div>
           
        </header>
        
      );
}

export default Nav;