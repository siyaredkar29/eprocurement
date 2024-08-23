
const Announcements = () => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };
  return (
    <div className="announcement-bcg">
      <button className="homebutton" onClick={handleHomeClick}>BACK</button>
      <div className="fulltable">
        <div className="announcement-container">
          <h2 className="announcement-title">Announcements</h2>
          <br></br>
          <p className="announcement-subtitle">
            The eTender related announcements are published below.
          </p>
          <div className="announcement-details">
            <table className="announcement-table">
              <thead>
                <tr>
                  <th>Subject / Content</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Important Security Update -</strong> To ensure the
                    utmost security of your accounts and personal information,
                    all users requested to change their passwords at regular
                    intervals.
                    <br />
                    <span className="announcement-content">
                      To ensure the utmost security of your accounts and
                      personal information, all users requested to change their
                      passwords at regular intervals. Regular password changes
                      help protect your account from unauthorized access.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Announcements;
