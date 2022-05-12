export const messageData = {
    initi
    inputEmail: false,alMessage: {
        messageId: "initialMessage", 
        text: "Hi! What can I help you with today?", 
        responseOptions: [
            {name: "browsing", value: true, text: "Just browsing", nextMessage: "a1"}, 
            {name: "referTo", value: "sales", text: "I want to learn more about the product", nextMessage: "b1"}, 
            {name: "existingCustomer", value: true, text: "I'm a current customer with a question", nextMessage: "c1"}
        ]
    },
    a1: {
        inputEmail: false,
        messageId: "a1", 
        text: "Let's get to know you better so we can get you to the right place. How familiar are you with our products and services?", 
        responseOptions: [
            {name: "referTo", value: "sales", text: "Not familiar", nextMessage: "b1"},
            {name: "referTo", value: "sales", text: "Somewhat familiar but looking for more information", nextMessage: "b1"},
            {name: "existingCustomer", value: true, text: "I'm a current customer", nextMessage: "c1"},
        ]
    },
    b1: {
        inputEmail: false,
        messageId: 'b1', 
        text: "Awesome! We're a company offering a suite of products and services to help your business grow. What is your role at your business?", 
        responseOptions: [
            {name: "customerRole", value: "sales", text: "Sales", nextMessage: "b2"},
            {name: "customerRole", value: "marketing", text: "Marketing", nextMessage: "b2"},
            {name: "customerRole", value: "customer support", text: "Customer Support", nextMessage: "b2"},
            {name: "customerRole", value: "miscellaneous", text: "None of the above", nextMessage: "b2"},
        ]
    },
    b2: {
        inputEmail: false,
        messageId: 'b2', 
        text: "Okie dokie, let's get to know your company better. How many employees work there?", 
        responseOptions: [
            {name: "companySize", value: "0-9", text: "0-9", nextMessage: "bFinal"},
            {name: "companySize", value: "10-50", text: "10-50", nextMessage: "bFinal"},
            {name: "companySize", value: "51-100", text: "51-100", nextMessage: "bFinal"},
            {name: "companySize", value: "100+", text: "100+", nextMessage: "bFinal"},
        ]
    },
    bFinal: {
        inputEmail: true,
        messageId: 'bFinal', 
        text: "Great! If you leave your business email below, someone from our team will reach out with the right information for you", 
    },
    c1: {
        inputEmail: false,
        messageId: "c1", 
        text: "Welcome back! Who were you hoping to talk to today to answer your question?", 
        responseOptions: [
            {name: "referTo", value: "sales", text: "Sales", nextMessage: "cFinal"},
            {name: "referTo", value: "support", text: "Support", nextMessage: "cFinal"},
        ]
    },
    cFinal: {
        inputEmail: true,
        messageId: 'cFinal', 
        text: "Great! I can help with that. Enter your business email below and someone from our team will reach out shortly", 
    },
}

// message template
// 0: {messageId: 0, text: "", responseOptions: [{name: "", value: "", text: "", nextMessage: messageData[{name: "", value: "", text: "", nextMessage: ""}]}]},

// MAY GET RID OF messageID property, don't know if we'll need it
