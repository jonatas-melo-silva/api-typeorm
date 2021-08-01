import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`🚀️ Server listening on port ${PORT} 🔥️`);
});

process.on('SIGINT', () =>{
  server.close();
  console.log('🚀️ Server stopped 🔥️');
})