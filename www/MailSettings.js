var MailSettings = (function () {
    function MailSettings(mailSettings) {
        if (mailSettings === void 0) { mailSettings = undefined; }
        if (mailSettings != undefined) {
            this.smtp = mailSettings.smtp;
            this.port = mailSettings.port;
            this.sport = mailSettings.sport;
            this.auth = mailSettings.auth;
            this.ssl = mailSettings.ssl;
            this.smtpUserName = mailSettings.smtpUserName;
            this.smtpPassword = mailSettings.smtpPassword;
			this.emailFrom = mailSettings.emailFrom;
            this.emailTo = mailSettings.emailTo;
			this.emailCC = mailSettings.emailCC;
			this.emailBCC = mailSettings.emailBCC;
			this.subject = mailSettings.subject;
            this.textBody = mailSettings.textBody;
            this.attachments = mailSettings.attachments;
        }
    }
    return MailSettings;
})();