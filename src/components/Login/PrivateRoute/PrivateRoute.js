import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isLoading } = UseAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => users.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                >

                </Redirect>
            }
        >

        </Route>

    );
};

export default PrivateRoute;