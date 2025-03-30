"# sit323-2025-prac4p" 
# Calculator Microservice
Environment configuration
1. Install Node.js (LTS version).
2. Clone warehouse:
git clone https://github.com/Lillian-ran/sit323-2025-prac4p.git
Installation dependencies:
npm install
Start service:
node app.js
API endpoint
addition:
GET /add? num1=<number>&num2=<number>
Example: /add? num1=5&num2=3 → { "result": 8 }

Division error handling:
If the divisor is zero: /divide? num1=8&num2=0 → { "error": "Division by zero is not allowed" }

Error scenario:
Parameter non-numeric: Returns 400 Bad Request and error messages.

If the divisor is zero, 400 Bad Request and error messages are returned.
