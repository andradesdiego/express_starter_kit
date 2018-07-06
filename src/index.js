import app from './app';

const { PORT } = process.env;
app.listen(PORT, () => console.log(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`)); // eslint-disable-line no-console
