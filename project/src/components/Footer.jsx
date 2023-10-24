import { Link } from "react-router-dom";

const footerStyles = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };
  
  const logoStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };
  
  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '1rem',
  };

  
export default function Footer () {
    return (
      <footer style={footerStyles}>
        <div className="container">
          <div style={logoStyles}>LoremIpsum</div>
          <div>
            <Link to="/" style={linkStyles}>Home</Link>
            <Link to="/about" style={linkStyles}>About Us</Link>
            <Link to="/Contact" style={linkStyles}>Contact</Link>
          </div>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Google. All Rights Reserved.
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
        </div>
      </footer>
    );
  };