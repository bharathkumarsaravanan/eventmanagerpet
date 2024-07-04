import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const EventManager = lazy(() => import("./EventManager/EventManager"));
const Logs = lazy(() => import("./Logs/Logs"));
const Summary = lazy(() => import("./Summary/Summary"));


export const MenuPage = () => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/summary">Summary</Link>
                        </li>
                        <li>
                            <Link to="/logs">Logs</Link>
                        </li>
                        <li>
                            <Link to="/event-manager">Event Manager</Link>
                        </li>
                    </ul>
                </nav>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/summary" element={<Summary/>}/>
                        <Route path="/logs" element={<Logs/>}/>
                        <Route path="/event-manager" element={<EventManager/>}/>
                        <Route path="/" element={<div>Select a page</div>} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    )
};