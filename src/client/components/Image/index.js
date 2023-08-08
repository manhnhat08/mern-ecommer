import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

import images from '~/client/assets/images';

const Image = forwardRef(({ src, className, alt, ...props }, ref) => {
    // Handle error src image
    const [fallback, setfallback] = useState('');
    const handleError = () => {
        setfallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
