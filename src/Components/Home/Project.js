import React from 'react';

import ass12 from "../../asset/ass12.png";
import ass11 from "../../asset/ass11.png";
import ass10 from "../../asset/ass10.png";
import ass3 from "../../asset/ass3.png";
import extra from "../../asset/extra.png";

const Project = () => {
 

    return (
        <div className='mb-10' style={{ backgroundColor: '#212529' }}>
            <h1 className='text-white text-3xl mt-16'>Some Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16 mb-10'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={ass12} alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>This project is about bd electronic riksha parts mean auto parts</p>
                        <div class="card-actions justify-end">
                            <a href='https://assaignment-12-21812.web.app/' target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                            <button class="btn btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={ass11} alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>This is about a gym equipment store.
                            Firebase Authentication System, API, Private-route Bootstrap, Node.</p>
                        <div class="card-actions justify-end">
                        <a href='https://assaignment-11-599ca.web.app/' target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                            <button class="btn btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={ass10} alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>This project is about Bangladeshi actress Mehejabin Chowdhury</p>
                        <div class="card-actions justify-end">
                        <a href='https://mehejabin-project.firebaseapp.com/' target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                            <button class="btn btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={ass3} alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <a href='https://cranky-wescoff-ea6f5a.netlify.app/' target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                            <button class="btn btn-sm">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={extra} alt="Shoes" /></figure>
                    <div class="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                        <a href='https://sagor15.github.io/green-university-1/' target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                            <button class="btn btn-sm">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;