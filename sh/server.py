from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn
import os
import sys

# Define a threaded HTTP server
class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    pass

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        # Enable caching for images and sounds (1 hour) to improve performance
        if self.path.endswith(('.png', '.jpg', '.jpeg', '.gif', '.mp3', '.wav')):
            self.send_header('Cache-Control', 'public, max-age=3600')
        else:
            # Disable cache for HTML/JSON/JS to ensure updates are seen
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    port = 9090
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    
    print(f"Starting Threaded HTTP Server on port {port}")
    print(f"Serving files from: {os.getcwd()}")
    
    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, CORSRequestHandler)
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
