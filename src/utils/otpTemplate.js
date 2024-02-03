

module.exports = otpTemplate = (name, otp) => {
    const logoCid = 'logo';
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>OtP</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </head>
        
        <body style="
              margin: 0;
              font-family: 'Poppins', sans-serif;
              background: #ffffffce;
              font-size: 14px;
            ">
            <div style="
                max-width: 680px;
                margin: 0 auto;
                padding: 45px 30px 60px;
                background: orange;
                background-position: top center;
                font-size: 14px;
                color: #434343;
                border-radius: 15px;
              ">
                <header style="display: flex;width: 100%;justify-content: center;align-items: center;">
                    <img alt="" src="cid:${logoCid}" height="200px" />
                </header>
        
                <main>
                    <div style="
                    margin: 0;
                    margin-top: 30px;
                    padding: 92px 30px 115px;
                    background: #ffffff;
                    border-radius: 30px;
                    text-align: center;
                  ">
                        <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                            <h1 style="
                        margin: 0;
                        font-size: 24px;
                        font-weight: 500;
                        color: #1f1f1f;
                      ">
                                Your OTP
                            </h1>
                            <p style="
                        margin: 0;
                        margin-top: 17px;
                        font-size: 16px;
                        font-weight: 500;
                      ">
                                Hey ${name}
                            </p>
                            <p style="
                        margin: 0;
                        margin-top: 17px;
                        font-weight: 500;
                        letter-spacing: 0.56px;
                      ">
                                One-Time Password (OTP) is expired in 2 min. Please use this code to verify your identity. Do
                                not
                                share this code with anyone for security reasons.
                            </p>
                            <p style="
                        margin: 0;
                        margin-top: 60px;
                        font-size: 40px;
                        font-weight: 600;
                        letter-spacing: 25px;
                        color: #ba3d4f;
                      ">
                                ${otp}
                            </p>
                        </div>
                    </div>
        
                    <p style="
                    max-width: 400px;
                    margin: 0 auto;
                    margin-top: 50px;
                    text-align: center;
                    font-weight: 500;
                    color: white;
                  ">
                        Thank you
                    </p>
                </main>
            </div>
        </body>
        
        </html>
        `
    )
}


