# Express.js: Secure Error Handling

This repository demonstrates a common error in Express.js applications: insecure error handling that can leak sensitive information to the client.

The `bug.js` file shows an example of improper error handling where stack traces are exposed to the client and a generic error message is returned, potentially hiding the real cause of an error. 

The `bugSolution.js` file demonstrates the corrected code with secure error handling that protects against vulnerabilities.

**Key improvements in `bugSolution.js`:**

* **404 Handling:**  Specifically returning a 404 (Not Found) response when appropriate.
* **500 Handling:** Using appropriate status codes while avoiding the exposure of stack traces or other sensitive data.