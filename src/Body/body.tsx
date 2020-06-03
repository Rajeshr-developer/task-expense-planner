import React from 'react';
import Header from '../components/header';
import DashBoard from '../dashBoard/';
import Footer from '../footer';
import { DeviceHeader } from '../components/deviceHeader';
import PromptPopup from '../components/promptPopup';
import { MyProvider } from '../contextProvider/myProvider';

const BodyContents = () => {

    return (
        <>
            <DeviceHeader />
            <MyProvider>
                <PromptPopup />
                <Header />
                <DashBoard />
                <Footer />
            </MyProvider>
        </>
    )
}

export default BodyContents;