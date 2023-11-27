/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import request from '../apis/request';
import EmailVerificationFailed from '../components/EmailVerificationFailed';
import EmailVerificationSuccess from '../components/EmailVerificationSuccess';
import Loader from '../components/Loader';

const VerificationScreen = () => {

    const params = useParams();
    const navigate = useNavigate()
    const [success, setSuccess] = useState<boolean>(false);
    // const [isLoading, setIsLoading] = useState<boolean>(false)
    // console.log("🚀 ~ file: VerifyEmail.tsx:16 ~ VerificationScreen ~ isLoading:", isLoading)

    // email token
    const verifcationToken = params.token;

    const verifyEmail = async (id: any) => {

        try {

            const { data } = await request.get(`/auth/verify-email/${verifcationToken ?? ''}`)


            console.log("🚀 ~ file: VerifyEmail.tsx:24 ~ verifyEmail ~ data:", data)

            if (data.message === "Successfully Verified") {
                setSuccess(true);
            }

        } catch (error: any) {

            setSuccess(false);
            console.log(error.message);
        }
    }

    // if (isLoading) {
    //     return <Loader />
    // }

    useEffect(() => {

        void verifyEmail(verifcationToken);
        // setIsLoading(true)
    }, []);

    return (
        <>

            <div className='w-full h-screen'>

                {/* <Header /> */}
                {(success) ? <EmailVerificationSuccess /> : (!success) ? <EmailVerificationFailed /> : null}

            </div>
        </>
    )

}

export default VerificationScreen