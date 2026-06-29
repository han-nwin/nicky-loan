import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const distDir = resolve(__dirname, 'dist')

// Railway provides PORT in production. 4173 is just the local fallback.
const port = Number(process.env.PORT ?? 4173)

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

function getFilePath(pathname) {
  const decodedPath = decodeURIComponent(pathname)
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, '')
  const requestedPath = join(distDir, normalizedPath)

  // Keep requests from escaping the built app directory.
  if (!requestedPath.startsWith(distDir)) {
    return null
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isDirectory()) {
    const indexPath = join(requestedPath, 'index.html')

    if (existsSync(indexPath)) {
      return indexPath
    }
  }

  // React/Vite is a single-page app, so unknown routes serve index.html.
  return join(distDir, 'index.html')
}

createServer((request, response) => {
  const host = request.headers.host?.split(':')[0]

  // Make www.nnlending.com permanently redirect to the main domain.
  if (host === 'www.nnlending.com') {
    response.writeHead(301, {
      Location: `https://nnlending.com${request.url ?? '/'}`,
    })
    response.end()
    return
  }

  const url = new URL(request.url ?? '/', 'http://localhost')
  const filePath = getFilePath(url.pathname)

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not found')
    return
  }

  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
  })

  // Serve the matching file from dist/, such as index.html, CSS, JS, or images.
  createReadStream(filePath).pipe(response)
}).listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
