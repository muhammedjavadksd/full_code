

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
    },

    adminForgetPasswordMailTemplate: (url, name) => {

        let template = ` 
        Dear ${name},
        
        We have received a request to reset the password for your Life Link admin account. If you did not make this request, please ignore this email. Otherwise, please follow the instructions below to reset your password.
        
        1. Click on the following link to reset your password:
           ${url}
        
        2. You will be directed to a secure page where you can enter a new password. Please ensure your new password meets the following criteria:
           - At least 8 characters long
           - Contains both uppercase and lowercase letters
           - Includes at least one number
           - Contains at least one special character (e.g., !, @, #, $)
        
        3. After entering your new password, click "Submit" to complete the process.
        
        If you encounter any issues or need further assistance, please do not hesitate to contact our support team 
        
        Thank you for your prompt attention to this matter.
        
        Best regards,
        
        Life Link
        Developer Community 
        
        ---
        
        **Important:** For security reasons, this password reset link will expire in 30 miniuts. If you do not reset your password within this time frame, you will need to submit a new request.
        
        ---
        
        **Security Tip:** If you are using a shared or public computer, ensure you log out after resetting your password and clear the browser history to protect your account information.
        
        ---
        
        This is an automated message. Please do not reply directly to this email.`;
        return template
    }
}


module.exports = mailTemplate