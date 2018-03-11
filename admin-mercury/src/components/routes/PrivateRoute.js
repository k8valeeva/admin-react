import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from "../MainLayout/Layout";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={matchProps => {
            const userExist = localStorage.getItem('userExist');

            if (userExist === 'exist') {
                return (
                    <div className="MainBody">
                        <Layout>
                            <Component {...matchProps}/>
                        </Layout>
                    </div>
                );
            }
            else {
                return(
                    <Redirect to="/login" />
                );
            }
        }} />
    )
};

export default PrivateRoute;