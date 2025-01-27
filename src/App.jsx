import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Layout from './common/Layout';
import {
    NotFile,
    Main,
    Bi,
    Intro,
    Headquarters,
    Location,
    Competitive,
    Interior,
    Procedure,
    Contact,
    Alliance,
    AlliancePurchasing,
    AllianceEntry,
    AllianceSupplier,
    AllianceSupplier2,
    AllianceSupplier3,
    Information,
    Notice,
    EventStore,
    Register,
} from './pages';
import Dessert from './pages/menu/Dessert';
import Store from './pages/store';
import { EventstoreDetail, InformationDetail, NoticeDetail } from './components';
import ScrollToTop from './common/scrolltop';

const App = () => {
    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    {/* main */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                    </Route>
                    {/* main end */}

                    {/* brand */}
                    <Route path="/brand" element={<Layout />}>
                        <Route path="intro" element={<Intro />} />
                        <Route path="bi" element={<Bi />} />
                        <Route path="headquarters" element={<Headquarters />} />
                        <Route path="location" element={<Location />} />
                    </Route>
                    {/* brand end */}

                    {/* menu */}
                    <Route path="/menu" element={<Layout />}>
                        <Route path="dessert" element={<Dessert />} />
                        <Route path="beverage" element={<Dessert />} />
                        <Route path="mdproduct" element={<Dessert />} />
                    </Route>
                    {/* menu end */}

                    {/* franchise */}
                    <Route path="/franchise" element={<Layout />}>
                        <Route path="competitive" element={<Competitive />} />
                        <Route path="interior" element={<Interior />} />
                        <Route path="procedure" element={<Procedure />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="alliance">
                            <Route index element={<Alliance />} />
                            <Route path="alliancePurchasing" element={<AlliancePurchasing />} />
                            <Route path="allianceEntry" element={<AllianceEntry />} />
                            <Route path="allianceSupplier" element={<AllianceSupplier />} />
                            <Route path="allianceSupplier2" element={<AllianceSupplier2 />} />
                            <Route path="allianceSupplier3" element={<AllianceSupplier3 />} />
                        </Route>
                    </Route>
                    {/* franchise end */}

                    {/* community */}
                    <Route path="/community" element={<Layout />}>
                        <Route path="information">
                            <Route index element={<Information />} />
                            <Route path=":informationID" element={<InformationDetail />} />
                        </Route>
                        <Route path="notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>
                        <Route path="eventstore">
                            <Route index element={<EventStore />} />
                            <Route path=":eventstoreID" element={<EventstoreDetail />} />
                        </Route>
                        <Route path="register" element={<Register />} />
                    </Route>
                    {/* community end */}

                    {/* store */}
                    <Route path="/store" element={<Layout />}>
                        <Route path="competitiveness" element={<Store />}></Route>
                    </Route>
                    {/* store end */}

                    {/* notFile */}
                    <Route path="*" element={<Layout />}>
                        <Route path="*" element={<NotFile />} />
                    </Route>
                    {/* notFile end */}
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
