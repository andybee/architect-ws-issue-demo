exports.handler = async (event) => ({
  headers: {
    'Content-Type': 'text/html',
  },
  body: `<!doctype html>
<html>
<body>
  <h1>Connection 1</h1>
  <p><pre id="id1"></pre></p>
  <button id="connect1">Connect</button>
  <button id="disconnect1" disabled>Disconnect</button>
  <h1>Connection 2</h2>
  <p><pre id="id2"></pre></p>
  <button id="connect2">Connect</button>
  <button id="disconnect2" disabled>Disconnect</button>
  <script>
    let connection1;
    let connection2;
    document.getElementById('connect1').addEventListener('click', () => {
      connection1 = new WebSocket('ws://localhost:3333');
      connection1.addEventListener('message', ({ data }) => document.getElementById('id1').textContent = data);
      document.getElementById('connect1').disabled = true;
      document.getElementById('disconnect1').disabled = false;
    });
    document.getElementById('connect2').addEventListener('click', () => {
      connection2 = new WebSocket('ws://localhost:3333');
      connection2.addEventListener('message', ({ data }) => document.getElementById('id2').textContent = data);
      document.getElementById('connect2').disabled = true;
      document.getElementById('disconnect2').disabled = false;
    });
    document.getElementById('disconnect1').addEventListener('click', () => {
      connection1.close();
      document.getElementById('connect1').disabled = false;
      document.getElementById('disconnect1').disabled = true;
    });
    document.getElementById('disconnect2').addEventListener('click', () => {
      connection2.close();
      document.getElementById('connect2').disabled = false;
      document.getElementById('disconnect2').disabled = true;
    });
  </script>
</body>
</html>
`
});