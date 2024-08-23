


const Awards = () => {
    const handleHomeClick = () => {
        window.location.href = '/';
      };
    return (
        <div className='announcement-bcg'>
            <div className="fulltable">
            <h2>Awards</h2>
            <div className="awards-images">
            <button className="homebutton" onClick={handleHomeClick}>BACK</button>
                <a href="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Feindia_award%20(1).jpg?alt=media&token=56729d66-5e47-4011-b4f3-07cc5f0b6090" target="_blank" rel="noopener noreferrer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FScreenshot%202024-08-15%20200116.png?alt=media&token=47856b4e-0e0e-442c-b151-0979945d3a8b" alt="Award 1" />
                </a>
                <a href="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FADB-Assessment%20(1).pdf?alt=media&token=7c3b9fa0-fd25-45db-bbcd-7b7010cd844f" target="_blank" rel="noopener noreferrer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FScreenshot%202024-08-15%20192252.png?alt=media&token=a0618a72-14f6-4510-a3f1-ede7697a7b5e" alt="Award 2" />
                </a>
                <a href="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2Fskoch_award_2010%20(1).pdf?alt=media&token=bdfb663d-4dc9-47c2-b439-8dbae846bd06" target="_blank" rel="noopener noreferrer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-d1959.appspot.com/o/assests%2FScreenshot%202024-08-15%20192519.png?alt=media&token=f300aa58-8837-4f74-94fe-ed20bb051767" alt="Award 3" />
                </a>
            </div>
        </div>
        </div>
    );
};

export default Awards;
