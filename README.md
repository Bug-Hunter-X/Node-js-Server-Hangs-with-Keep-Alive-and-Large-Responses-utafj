# Node.js Server Hangs with Keep-Alive and Large Responses

This repository demonstrates a bug where a Node.js HTTP server hangs when using keep-alive connections and sending large response bodies.  The issue arises from inefficient handling of keep-alive connections, leading to performance degradation or server crashes under load.

## Bug Description

The provided `server.js` file contains a simple HTTP server that keeps the connection alive and sends a large response body. Under heavy load, this server may hang or become unresponsive. This is because the server's event loop might be blocked, preventing it from processing other requests.

## Solution

The `serverSolution.js` file demonstrates a solution that addresses this issue using techniques to improve the efficiency of how keep-alive connections are managed and response data is handled.

## How to Reproduce

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the repository directory.
3. Run `server.js`: `node server.js`
4. Send multiple requests to the server (e.g., using a tool like `ab` or `wrk`) to simulate load. Observe that the server might become unresponsive.
5. Run `serverSolution.js` to see an example of a solution. (Note that the solution addresses only one approach to solve the issue.)

## Contributing

Contributions are welcome. Please open an issue or create a pull request for any suggestions or improvements.