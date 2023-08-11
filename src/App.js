import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publRoutes } from '~/routes';
import { DefaultLayout } from '~/client/layouts';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if(route.layout) {
                            Layout = route.layout ;
                        } else if(route.layout === null){
                            Layout = Fragment ;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
