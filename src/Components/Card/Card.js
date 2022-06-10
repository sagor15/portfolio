import React from 'react';

const Card = ({ info }) => {
    const { id, name, img, description,live,live1 } = info;
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">

                <p>{description}</p>
                <div class="card-actions justify-end">
                    <a href={live} target="_blank" class="btn btn-primary btn-sm">Live Site</a>
                    <a href={live1} target="_blank" class="btn btn-sm">Details</a>
                </div>
            </div>
        </div>
    );
};

export default Card;