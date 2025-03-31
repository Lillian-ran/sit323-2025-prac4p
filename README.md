"# sit323-2025-prac4p" 
# Calculator Microservice
How to use:
Environment setup:
1. Install Node.js (LTS version).
(following steps in cmd)
2.Clone repository:
git clone https://github.com/Lillian-ran/sit323-2025-prac4p.git
3.Installation dependencies:
npm install
4.Start service:
node app.js

Simple test:
url
eg1. http://localhost:3000/add?num1=10&num2=5
return- { "result": 15 }
eg2. http://localhost:3000/divide?num1=8&num2=0
return- {"error":"Division by zero is not allowed"}

curl
(in terminal,run)
curl "http://localhost:3000/multiply?num1=4&num2=3"

API endpoint
addition:
GET /add? num1=<number>&num2=<number>
Example: /add? num1=5&num2=3 → { "result": 8 }

Division error handling:
If the divisor is zero: /divide? num1=8&num2=0 → { "error": "Division by zero is not allowed" }

Error scenario:
Parameter non-numeric: Returns 400 Bad Request and error messages.

If the divisor is zero, 400 Bad Request and error messages are returned.
