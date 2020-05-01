import React from 'react';
import "../css/layout.css";

const layout = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
            <footer>
                &copy; doc.stephangriesel.com
            </footer>
        </div>
    )
}

export default layout;
