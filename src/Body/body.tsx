import React from 'react';
import Header from '../components/header';
import DashBoard from '../dashBoard/';
import Footer from '../footer';
import { DeviceHeader } from '../components/deviceHeader';
import PromptPopup from '../components/promptPopup';
import AlertPopup from '../components/alertPopup';

const BodyContents = () => {

    return (
        <>
            <AlertPopup />
            <PromptPopup />
            <DeviceHeader />
            <Header />
            <DashBoard />
            <Footer />
        </>
    )
}

export default BodyContents;