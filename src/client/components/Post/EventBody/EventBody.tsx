import React from 'react';
import styles from './EventBody.module.css';

export interface EventBodyProps {
    eventTitle: string,
    body: string,
    inviteStatus: string,
}


const EventBody = (props: EventBodyProps) => {
    
    return (
        <div className={styles.eventPostContainer}>
            <div className={styles.imgContainer}>
                <img style={{borderRadius:10}}src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-03-26-16-53/animal-crossing-turnip-price-daisy-mae-stalk-market-7018-1585241635380.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" 
                height={80} width={80}/>
            </div>
            <div className={styles.postBody}>
                <div className={styles.eventTitle}>
                    <span>{props.eventTitle}</span>
                </div>
                <div className={styles.descriptionText}>
                    <div>
                        <span>{props.body}</span>
                    </div>
                    <div>
                        <span>{props.inviteStatus}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventBody