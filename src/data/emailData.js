export default {
    UserID: process.env.REACT_APP_USER_ID,
    TemplateID: process.env.REACT_APP_TEMPLATE_ID,
    ServiceID: process.env.REACT_APP_SERVICE_ID
}

//To add an extra layer of security, avoid unauthorized requests with your key, 
//be sure to restrict your domains, by clicking on settings on your dashboard and specifying the domain.