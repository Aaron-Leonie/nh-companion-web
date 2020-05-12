import React from 'react';
import styles from './TextBody.module.css';


export interface TextBodyProps {
    postBody: string,
};

const TextBody = (props: TextBodyProps) => {
    return (
        <div className={styles.postBody}>
            <p>{ props.postBody }</p>
        </div>
    );
};

export default TextBody;