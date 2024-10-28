application.use((req, res, next) => {
    console.log('Middleware running');
    next();
});