import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook, 
    faInstagram, 
    faPinterest, 
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { 
    faExclamationTriangle, 
    faBars,
    faTimes,
    faEdit, 
    faTrash, 
    faCopy 
} from '@fortawesome/free-solid-svg-icons';

export const Facebook = () => <FontAwesomeIcon icon={faFacebook}/>;
export const Twitter = () => <FontAwesomeIcon icon={faTwitter}/>;
export const Pinterest = () => <FontAwesomeIcon icon={faPinterest}/>;
export const Instagram = () => <FontAwesomeIcon icon={faInstagram}/>;

export const Exclamation = () => <FontAwesomeIcon icon={faExclamationTriangle}/>;

export const Burger = () => <FontAwesomeIcon icon={faBars}/>;
export const Close = () => <FontAwesomeIcon icon={faTimes}/>;

export const Edit = () => <FontAwesomeIcon icon={faEdit}/>;
export const Trash = () => <FontAwesomeIcon icon={faTrash}/>;
export const Copy = () => <FontAwesomeIcon icon={faCopy}/>;


