import React from 'react';
import bg from "../../asset/background.jpg";
import "./shade.css";


const Home = () => {
    return (

            <div id='home' class=" grid-none min-h-screen place-items-center " style={{ background: `url(${bg})`, backgroundRepeat: 'no-reapet', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                
                <div className='opacity-100 mt-56 grid grid-cols-1 lg:grid-cols-1 justify-items-center gap-5'>
                  
                    <div>
                        <h1 className='text-6xl font-bold text-center text-white opacity-100'>Md Sagor Ahammed</h1>
                        <h3 className='text-4xl shad mt-5 font-bold text-blue text-center text-white opacity-150'>Junior Web Developer</h3>
                    </div>
                    <a class="btn mt-5 btn-active btn-primary opacity-100" href='https://drive.google.com/file/d/1NF7yjRqqWpk9nrrA1epzaPLo9PimRZUM/view?usp=sharing' target="_blank">Download Resume</a>
                </div>
           </div>
            
           

    );
};

export default Home;