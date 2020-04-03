const dev = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1bgjpdrj7jeix"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://h6edxj1kwi.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_OSdpsSPep",
        APP_CLIENT_ID: "7v0oqtumnte7qiabpag47u0ff1",
        IDENTITY_POOL_ID: "us-west-2:709b4286-a255-48e1-b1d3-931eb0c47e24"
    }
};

const prod = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-1g45o9hps2xaq"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://nhs9sf2xx9.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_QnyWgVFae",
        APP_CLIENT_ID: "3f1u540f18m983hcejqauuqvuj",
        IDENTITY_POOL_ID: "us-west-2:19850b4a-0aa2-40f8-9d5d-6d5cd188d811"
    }
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};