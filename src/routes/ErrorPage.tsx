import React from 'react';
import {Link, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)


    return (
        <div>
            Sorry error appeared
            {
                // @ts-ignore
                error.status
            }
            {   // @ts-ignore
                error.statusText
            }
            <Link rel='noreferrer noopener' to='/onlineStore/'>Homepage</Link>
        </div>
    );
};

export default ErrorPage;