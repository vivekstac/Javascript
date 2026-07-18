const http = require('http');

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Helper function to send a JSON response
    const sendResponse = (statusCode, body) => {
        res.statusCode = statusCode;
        res.end(JSON.stringify(body));
    };

    // Helper function to handle the request body (for POST, PUT)
    const getRequestBody = (request) => {
        return new Promise((resolve, reject) => {
            let body = '';
            request.on('data', (chunk) => {
                body += chunk.toString();
            });
            request.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (error) {
                    reject(new Error('Invalid JSON'));
                }
            });
            request.on('error', (err) => reject(err));
        });
    };

    // --- Routing Logic ---

    if (req.url === '/users' && req.method === 'GET') {
        // READ all users
        sendResponse(200, users);
    } else if (req.url === '/users' && req.method === 'POST') {
        // CREATE user
        getRequestBody(req)
            .then((newUser) => {
                if (!newUser.name || !newUser.email) {
                    return sendResponse(400, { message: 'Name and email are required' });
                }
                const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                newUser.id = newId;
                users.push(newUser);
                sendResponse(201, newUser);
            })
            .catch((err) => sendResponse(400, { message: err.message }));
    } else if (req.url.startsWith('/users/') && req.method === 'GET') {
        // READ single user
        const id = parseInt(req.url.split('/')[2]);
        const user = users.find(u => u.id === id);
        if (user) {
            sendResponse(200, user);
        } else {
            sendResponse(404, { message: 'User not found' });
        }
    } else if (req.url.startsWith('/users/') && req.method === 'PUT') {
        // UPDATE user
        const id = parseInt(req.url.split('/')[2]);
        getRequestBody(req)
            .then((updatedData) => {
                const userIndex = users.findIndex(u => u.id === id);
                if (userIndex !== -1) {
                    users[userIndex] = { ...users[userIndex], ...updatedData };
                    sendResponse(200, users[userIndex]);
                } else {
                    sendResponse(404, { message: 'User not found' });
                }
            })
            .catch((err) => sendResponse(400, { message: err.message }));
    } else if (req.url.startsWith('/users/') && req.method === 'DELETE') {
        // DELETE user
        const id = parseInt(req.url.split('/')[2]);
        const initialLength = users.length;
        users = users.filter(u => u.id !== id);
        if (users.length < initialLength) {
            sendResponse(204, null); // No content for successful deletion
        } else {
            sendResponse(404, { message: 'User not found' });
        }
    } else {
        // Handle unknown routes
        sendResponse(404, { message: 'Route not found' });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
