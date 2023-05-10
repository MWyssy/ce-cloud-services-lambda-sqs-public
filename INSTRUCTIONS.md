aws sso login --sso-session my-sso

zip function.zip index.js

aws lambda invoke --cli-binary-format raw-in-base64-out --function-name ProcessSQSRecord --payload file://input.txt outputfile.txt
