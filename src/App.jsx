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

                    {/* Introduce */}
                    <Route path="/Introduce" element={<Layout />}>
                        <Route path="FirstCreationIntroduce" element={<Intro />} />
                        <Route path="ManagementPhilosophy" element={<Bi />} />
                        <Route path="Directions" element={<Headquarters />} />
                    </Route>
                    {/* Introduce end */}

                    {/* Publishing */}
                    <Route path="/Publishing" element={<Layout />}>
                        <Route path="PublicationInformation" element={<Dessert />} />
                        <Route path="publishingProcess" element={<Dessert />} />
                        <Route path="BookstoreDistribution" element={<Location />} />
                        <Route path="Marketing" element={<Dessert />} />
                    </Route>
                    {/* Publishing end */}

                    {/* PrintAndDesign */}
                    <Route path="/PrintAndDesign" element={<Layout />}>
                        <Route path="paperPrinting" element={<Competitive />} />
                        <Route path="livePrint" element={<Interior />} />
                        <Route path="brandingDesign" element={<Procedure />} />
                        {/* <Route path="alliance">
                            <Route index element={<Alliance />} />
                            <Route path="alliancePurchasing" element={<AlliancePurchasing />} />
                            <Route path="allianceEntry" element={<AllianceEntry />} />
                            <Route path="allianceSupplier" element={<AllianceSupplier />} />
                            <Route path="allianceSupplier2" element={<AllianceSupplier2 />} />
                            <Route path="allianceSupplier3" element={<AllianceSupplier3 />} />
                        </Route> */}
                    </Route>
                    {/* PrintAndDesign end */}

                    {/* CustomerService */}
                    <Route path="/CustomerService" element={<Layout />}>
                        <Route path="announcement" element={<Procedure />} />
                        <Route path="QNA" element={<Procedure />} />
                        <Route path="FrequentlyAskedQuestions" element={<Procedure />} />
                        <Route path="Consultationform" element={<Procedure />} />
                    </Route>
                    {/* CustomerService end */}

                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
