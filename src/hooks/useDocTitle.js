import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Sound-Beat`;
        } else {
            document.title = 'Sound-Beat | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
