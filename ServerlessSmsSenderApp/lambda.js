//  API Gateway (as POST request) endpoint to accept requests and set it as the trigger for lambda function

let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {


    // the request payload received by the API will be injected to 
    // the lambda function as the event object. 
    // we only have to extract the information from the event object 
    // and assign them to variables for further
    let receiver = event['receiver'];
    let sender = event['sender'];
    let message = event['message']; // description


    // Transactional type should be used for Critical messages that support customer transactions
    // Promotional type used for non-critical messages, such as marketing messages
    let isPromotional = true;

    console.log("Sending message", message, "to receiver", receiver);

    sns.publish({
        Message: message,
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Promotional'
            },
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': sender
            }
        },
        PhoneNumber: receiver
    }).promise()
        .then(data => {
            console.log("Sent message to", receiver);
			callback(null, data);
        })
        .catch(err => {
            console.log("Sending failed", err);
			callback(err);
        });
        
    // sns is dragged here
    callback(null, { "notification": "Successfully executed" });
}

