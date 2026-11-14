const { spawn } = require('child_process');
const http = require('http');

console.log('Starting next start on port 3005...');
const server = spawn('cmd.exe', ['/c', 'npx', 'next', 'start', '-p', '3005'], {
  cwd: 'c:\\Users\\vinit\\Projects\\mkl-45',
});

server.stdout.on('data', (d) => process.stdout.write(d));
server.stderr.on('data', (d) => process.stderr.write(d));

setTimeout(() => {
  const routes = [
    '/',
    '/docs',
    '/docs/installation',
    '/docs/theming',
    '/docs/changelog',
    '/docs/components/button',
    '/docs/components/input',
    '/docs/components/dialog',
    '/docs/components/data',
    '/components',
    '/themes',
    '/blocks',
    '/r/button.json',
    '/r/dialog.json',
    '/r/input.json',
  ];
  let checked = 0;
  for (const r of routes) {
    http.get('http://localhost:3005' + r, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(`[HTTP ${res.statusCode}] ${r} (${data.length} bytes)`);
        checked++;
        if (checked === routes.length) {
          console.log('\nAll checked successfully!');
          server.kill();
          process.exit(0);
        }
      });
    }).on('error', (err) => {
      console.log(`[ERROR] ${r} -> ${err.message}`);
      checked++;
      if (checked === routes.length) {
        server.kill();
        process.exit(1);
      }
    });
  }
}, 3000);
