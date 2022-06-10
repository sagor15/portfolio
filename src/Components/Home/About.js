import React from 'react';
import profile from "../../asset/profile.jpg";

const About = () => {
    return (
        <section id='about' style={{ backgroundColor: '#212529' }}>
            <h1 className='text-3xl text-white font-bold mt-4'>About</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center' >

                <div class="avatar mt-8">
                    <div class="w-48  rounded-full ring ring-white ">
                        <img src={profile} />
                    </div>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl font-bold text-center text-white opacity-100'>Md Sagor Ahammed</h1>
                    <h3 className='text-xl mt-2  text-dark text-center text-sky-500 opacity-100'>Junior Web Developer</h3>
                    <p className='text-xl text-white'>HI, I am Sagor. I’m a Full-stack Developer. I can see myself in a top-ranking position in the web developing
                        market. Actual that this market is growing higher day by day. But my skills are also growing as
                        I am very keen on learning and a technology lover. I find this sector very interesting and always
                        work with my full enthusiasm.</p>
                </div>

            </div>
        </section>

    );
};

export default About;