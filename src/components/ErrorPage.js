import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return(
        <div>
            <h1>This is going to be the error page</h1>
            <p>Page not found</p>
            <p>Return to the <Link to={'/'}>Homepage</Link></p>
            
        </div>
    )
}

export default ErrorPage;