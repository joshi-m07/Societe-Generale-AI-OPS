// Example controller function
exports.getData = (req, res) => {
    const data = {
        message: 'Hello from the backend!',
        timestamp: new Date()
    };
    res.json(data);
};
