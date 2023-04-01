/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import request from '../apis/request';
import EmailVerificationFailed from '../components/EmailVerificationFailed';
import EmailVerificationSuccess from '../components/EmailVerificationSuccess';
// import EmailVerificationFailed from '../components/EmailVerificationFailed'
// import EmailVerificationSuccess from '../components/EmailVerificationSuccess'

const VerificationScreen = () => {

    const params = useParams();
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);

    // email token
    const verifcationToken = params.token;

    const verifyEmail = async (id: any) => {

        try {

            const { data } = await request.get(`/auth/verify-email/${verifcationToken}`)

            console.log("🚀 ~ file: VerifyEmail.tsx:24 ~ verifyEmail ~ data:", data)

            if (data.message === "Successfully Verified") {
                setSuccess(true);
            }
        } catch (error: any) {

            setSuccess(false);
            console.log(error.message);
        }
    }

    useEffect(() => {

        verifyEmail(verifcationToken);
    }, []);

    return (
        <>

            <div className='w-full h-screen'>

                {/* <Header /> */}
                {(success) ? <EmailVerificationSuccess /> : (!success) ? <EmailVerificationFailed />: null}

            </div>
        </>
    )

}

export default VerificationScreen