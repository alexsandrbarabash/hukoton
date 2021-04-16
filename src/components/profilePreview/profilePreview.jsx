import React from 'react';

import './profilePreview.scss';

const ProfilePreview = ({name}) => {
    const dividedName = name.split(' ');

    return (
        <div className='profile-preview d-flex align-items-center'>
            <div
                className='profile-preview__avatar rounded-circle d-flex justify-content-center align-items-center'>
                {dividedName[0][0] + dividedName[1][0]}
            </div>
            <div className='profile-preview__name'>{name}</div>
        </div>
    );
};

export default ProfilePreview;
