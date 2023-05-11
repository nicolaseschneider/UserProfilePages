import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";
import styles from './ProfilePreview.module.scss';

const ProfilePreview = ({ profile }) => {
    return (
        <div
            className={styles.profilePreview}
        >
            {PROFIILE_PARAMS.map(({ key }, i) => (
                <span style={{width: 200}}key={i} >
                    {profile[key]}
                </span>
            ))}
        </div>
    );
};

export default ProfilePreview;
