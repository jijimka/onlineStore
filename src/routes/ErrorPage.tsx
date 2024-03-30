import React from 'react';
import {useRouteError} from "react-router-dom";

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
        </div>
    );
};

export default ErrorPage;