const ormError = require('./ormErrorHandler.middleware');
const {
    errorHandler,
    logError,

} = require('./errorHandler.middleware');

const errorRoutes = (app) => {
    app.use(logError);
    app.use(ormError);
    app.use(errorHandler);

    //404
    app.use('*', (req, res) => res.status(404).json(
        { 
            message: 'Temporaly out of service' 
        }));
}

module.exports = errorRoutes;
