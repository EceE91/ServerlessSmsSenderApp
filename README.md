# ServerlessSmsSenderApp
Enable users to get notifications via SMS, E-mail and browsers

A simple notification panel in the front-end language of choice (e.g. JavaScript / HTML) and develop a back-end, based on AWS (lambda) serverless computing, that allows a back-office user to add notifications for particular users or for all users. Each notification comprises the following displayable fields: date-time, subject, type (this could be 'general', 'urgent', or anything else you think of in your solution), description. The users should be able to see these notifications in their panel and also to receive them via SMS and/or email.

Technologies:
- AWS Lambda serverless
- AWS SNS (simple notification service)
- AWS API Gateway
- AWS CloudWatch (to check the message details in CloudWatch service.)
- Sigma IDE
