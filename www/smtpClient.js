/*global cordova, module*/

let smtpClient = {
    sendMail: function(mailSettings, successCallback, errorCallback) {
        const keys = ["smtp", "smtpUserName", "smtpPassword", "emailFrom", "emailTo", "emailCC", "emailBCC", "subject", "textBody", "priority", "attachmentsName", "attachmentsRole", "attachmentsType", "attachmentsBase64"];
        for (let key of keys) {
            if (typeof mailSettings?.[key] === "undefined") {
                throw new Error("\"" + key + "\" parameter is not a found");
            }
        }
        if (mailSettings["smtp"] === "" || mailSettings["smtpUserName"] === "" || mailSettings["smtpPassword"] === "") {
            errorCallback();
        } else {
            cordova.exec(successCallback, errorCallback, "SMTPClient", "cordovaSendMail", [JSON.stringify(mailSettings)]);
        }
    },
    isLoaded: function() {
        console.info('SMTP Client is loaded !');
        return true;
    }
};

module.exports = smtpClient;
