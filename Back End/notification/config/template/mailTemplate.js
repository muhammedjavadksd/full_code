

let mailTemplate = {

     

    otpMailTemplate: (otp, recipientName) => {

        let template = `Dear ${recipientName},
        
        We are pleased to assist you with your account verification process. As part of our commitment to security, we have generated a One Time Password (OTP) for you. Please use the OTP provided below to complete the verification process:
        
        OTP: ${otp}
        
        This OTP will expire in 30 minutes for security reasons. Please ensure to complete the verification process within this time frame.
        
        If you did not request this OTP or need further assistance, please contact our support team immediately.
        
        Thank you for choosing our services.
        
        Best regards,
        LifeLink`
 
        return template
    }
}


module.exports = mailTemplate