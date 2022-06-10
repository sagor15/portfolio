import React, { useState } from 'react';


import Card from '../Card/Card';

const Project = () => {
 
    const [information , setInformation] = useState();
    fetch('data.json')
    .then(res=>res.json()).then(data=>setInformation(data));

    return (
        <div id='project' className='mb-10' style={{ backgroundColor: '#212529' }}>
            <h1 className='text-white text-3xl mt-16'>Some Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16 mb-10'>


            {
                information?.map(info=> <Card
                key={info.id}
                info={info}
                
                >

                </Card>)
            }
                    </div>
                </div>
            // </div>
        // </div>
    );
};

export default Project;