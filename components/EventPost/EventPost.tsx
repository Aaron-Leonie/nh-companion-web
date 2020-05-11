import React from 'react';
import styles from './EventPost.module.css';

const EventBody = () => {
    
    return (
        <div className={styles.eventPostContainer}>
            <img src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-03-26-16-53/animal-crossing-turnip-price-daisy-mae-stalk-market-7018-1585241635380.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" 
            height={50} width={50}/>
            <div className={styles.postBody}>
                <div>
                    <span>Some bitch at my Island!</span>
                </div>
                <div>
                    <span>I posted some fucking text!</span>
                </div>
                <div>
                    <span>Dodo Code: Fuck You</span>
                </div>


            </div>
            
        </div>
    );
}

export default EventBody