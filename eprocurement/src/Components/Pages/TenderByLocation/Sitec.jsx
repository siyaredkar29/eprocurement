
import "./Sitec.css"

const Sitec = () => {

    const handleHomeClick = () => {
        window.location.href = '/';
      };
    return (
        <div className='announcement-bcg'>
            <button className="homebutton" onClick={handleHomeClick}>BACK</button>
            <div className="fulltablee">
            <h2 className="headinggg">Site Compatibility</h2>
            <div className="compatibility-details">
               <div className="ppp">
               <p><strong>Browser used</strong> <span>undefined</span></p>
                <p><strong>Full version</strong> <span>127</span></p>
                <p><strong>Your OS</strong> <span>Windows</span></p>
                <p><strong>Cookies Enabled</strong> <span>Yes</span></p>
                <p><strong>Your Screen Resolution</strong> <span>1536 x 864</span></p>
                <p><strong>Java Enabled</strong> <span>No</span></p>
               </div>
            </div>
            <div className="note"><br></br>
                <p className="note1">Note: The portal is compatible for the following browser version</p><br></br>
                <table className="browser-compatibility-table">
                    <thead>
                        <tr>
                            <th>Browser</th>
                            <th>Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Firefox</td>
                            <td>42 to 49</td>
                        </tr>
                        <tr>
                            <td>Firefox ESR</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Edge</td>
                            <td>Kindly follow the Configuration instructions given in the download section.</td>
                        </tr>
                    </tbody><br></br><br></br>
                </table>
            </div>
            
          
        </div>
        </div>
    );
}

export default Sitec;
