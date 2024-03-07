import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='dexcriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>

            </div>
            <div className="descriptionbox-dexcription">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat in consequatur doloribus harum quaerat deserunt, natus facere dolores, et inventore tenetur exercitationem. Dignissimos similique veritatis unde explicabo veniam, quia vitae!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas officia mollitia hic eum accusantium, consequatur nesciunt veritatis recusandae non natus qui atque ad vitae libero blanditiis quidem omnis provident.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;