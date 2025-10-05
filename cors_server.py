#!/usr/bin/env python3
"""
Simple HTTP server with CORS support for Angular Training-A app
"""
import http.server
import socketserver
from urllib.parse import urlparse

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Max-Age', '86400')
        super().end_headers()

    def do_OPTIONS(self):
        # Handle preflight requests
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    PORT = 4200
    Handler = CORSHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 CORS-enabled server running at http://localhost:{PORT}")
        print(f"📁 Serving files from: dist/")
        print("🌐 CORS headers enabled for cross-origin requests")
        httpd.serve_forever()
