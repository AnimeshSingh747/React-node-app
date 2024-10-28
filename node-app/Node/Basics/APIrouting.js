app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send('login successfully');
});