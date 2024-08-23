
import "./Downloads.css"

const Downloads = () => {

  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const downloads = [
    { no: 1, name: 'LibreOffice Suite', url: 'https://www.libreoffice.org/download', fileSize: '10-Jul-2021', size: '1024 KB' },
    { no: 2, name: 'Autocad DWF Viewer', url: 'https://viewer.autodesk.com/', fileSize: '12-Jul-2021', size: '2048 KB' },
    { no: 3, name: 'PDF Reader', url: 'http://get.adobe.com/reader', fileSize: '12-Jul-2021', size: '3072 KB' },
    { no: 4, name: 'PDF Creator', url: 'http://www.pdfforge.org/download', fileSize: '12-Jul-2021', size: '4096 KB' },
    { no: 5, name: 'JRE Download', url: 'http://java.sun.com/javase/downloads/index.jsp', fileSize: '12-Jul-2021', size: '5120 KB' },
    { no: 6, name: 'JRE 8 Download', url: 'https://eprocure.gov.in/mmp/jre-windows-i586.exe', fileSize: '12-Jul-2021', size: '6144 KB' },
    { no: 7, name: 'GePNIC-eBrochure', url: 'https://eprocure.gov.in/cppp/sites/default/files/brochure/GePNIC_Brochure.pdf', fileSize: '01-Jan-2024', size: '2048 KB' },
    { no: 8, name: 'Firefox ESR Browser', url: 'https://ftp.mozilla.org/pub/firefox/releases/52.0.2esr/win32/en-US/Firefox Setup 52.0.2esr.exe', fileSize: '01-Oct-2021', size: '1024 KB' },
    { no: 10, name: 'User Creation Data Sheet', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fuser_datasheet%20(2).pdf?alt=media&token=c364e005-3898-4860-a25c-ff8995a1e917', size: '107.25 KB' },
    { no: 11, name: 'Tender Creation Data Sheet', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Ftender_datasheet.pdf?alt=media&token=3a065f62-1573-47b0-b7f2-625a7d7b5470', size: '242.83 KB' },
    { no: 12, name: 'Corrigendum Creation Data Sheet', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fcorrigendum_inputform.pdf?alt=media&token=e3392f00-d84b-4d39-8b20-6f5d6b77b74f', size: '48.20 KB' },
    { no: 13, name: 'DSC for Foreign Bidders', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FDSC_For_Foreign_Bidders.pdf?alt=media&token=bf42a722-e9e6-4fba-8cde-7691b7fee1ec', size: '277.09 KB' },
    { no: 14, name: 'System Malfunction Procedure', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FSystemMalfunctionProcedure.pdf?alt=media&token=723a47f9-7b58-4bed-9a03-f1a56f998edf', size: '260.49 KB' },
    { no: 15, name: 'Resources Required', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fresources.pdf?alt=media&token=d3d5fecc-6424-447c-bf13-65cdfd0dd37e', size: '820.03 KB' },
    { no: 16, name: 'Form for DSC Deactivation For Bidders', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FDSC_Deactivation_Format_for_Bidders.pdf?alt=media&token=130d7307-1d1d-4bff-ba27-4ab29ecbf52e', size: '35.18 KB' },
    { no: 17, name: 'Nodal Officer Block Form', url: 'https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FNodal_Officer_Block_Form.pdf?alt=media&token=3a0dd82c-5c24-4b6d-88b0-1c682ee9e679', size: '780.29 KB' },
    { no: 18, name: 'Model Tender Doc (MTC) for Proc. of Goods in .pdf', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Goods%20NIC.pdf', size: '102.24 KB' },
    { no: 19, name: 'Model Tender Doc (MTC) for Proc. of Goods in .word', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Word%20Goods%20NIC.docx', size: '242.83 KB' },
    { no: 20, name: 'MTC for Proc. of Non Consultancy Services in .pdf', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Services%20NIC.pdf', size: '780.29 KB' },
    { no: 21, name: 'MTC for Proc. of Non Consultancy Services in .word', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Word%20Services%20NIC.docx', size: '102.24 KB' },
  ];

  return (
   <div className='bcg'>
    <div className='fulltable'>
    <button className="homebutton" onClick={handleHomeClick}>BACK</button>

     <div className="downloads-table-container">
        <h2 className='headinggg'>DOWNLOADS</h2>
      <table className="downloads-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Downloads</th>
            <th>URL</th>
            <th>File Size (in KB)</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download, index) => (
            <tr key={index}>
              <td>{download.no}</td>
              <td>{download.name}</td>
              <td><a href={download.url} target="_blank" rel="noopener noreferrer">{download.url}</a></td>
              <td>{download.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
   </div>
  );
};

export default Downloads;
