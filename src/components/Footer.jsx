import React from "react";

function Footer({ year }) {
    return (
        <footer className="footer fixed-bottom mt-auto bg-black text-white text-center py-3">
            <p>Copyright &copy;{year} - R&D incrustwerush.org</p>
        </footer>
    );
}
  
  export default Footer;
  