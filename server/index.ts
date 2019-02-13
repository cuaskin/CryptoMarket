import app from './app/app';

const PORT:number = Number(process.env.PORT) || 3001;

app.listen(PORT);

console.log(`Server has been started on PORT:${PORT} `);
