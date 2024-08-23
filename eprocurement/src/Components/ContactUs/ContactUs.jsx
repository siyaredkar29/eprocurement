
import "./ContactUs.css"
const ContactUs = () => {

    const handleHomeClick = () => {
        window.location.href = '/';
      };
  return (
   <div className='backimg'>

<button className="homebutton" onClick={handleHomeClick}>BACK</button>
     <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-card">
        <h3>Info Tech Corporation of Goa Limited (A Government of Goa Undertaking)</h3>
        <p><strong>Address :</strong> IT HUB, 3rd Floor, Altinho, Panaji-Goa</p>
        <p><strong>Tel :</strong> 832-2225192</p>
        <p><strong>E-Mail :</strong> e-tender.goa@gov.in</p><br></br>
        
        <h3>Support Helpdesk</h3>
        <p><strong>Tel :</strong> 91-7972854213, 91-7822039673, 91-7972871944</p>
        <p><strong>E-Mail :</strong> e-tender.goa@gov.in</p><br></br>

        <h3>Senior Support</h3>
        <p><strong>Mobile :</strong> 91-9834889836</p>
        <p><strong>E-Mail :</strong> e-tender.goa@gov.in</p><br></br>

        <h3>For any technical related queries please call at 24 x 7 Help Desk Number</h3>
        <p><strong>Address :</strong> International Bidders are requested to prefix 91 as country code</p>
        <p><strong>Tel :</strong> 0120-4001002, 0120-4001005, 0120-4493395</p>
        <p><strong>E-Mail :</strong> support-eproc@nic.in</p><br></br>

        <h3>EMail Support</h3>
        <p>A) For any Issues or Clarifications relating to the published tenders, bidders are requested to contact the respective Tender Inviting Authority</p>
      </div>
    </div>
   </div>
  )
}

export default ContactUs
