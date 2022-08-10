import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Divider: React.FC = ({
    ...props
 }) => {
    return (
        <hr className="border-gray-200 dark:border-gray-700 "  {...props}/>
    )
}