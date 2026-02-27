#!/bin/bash
# Stop the game server (Aggressive version)
# Usage: ./sh/stop.sh

echo "Stopping any existing englist server processes..."

# Try to kill the new server script (matches python3 server.py or python3 sh/server.py)
pkill -f "server.py" && echo "Killed python3 server.py"

# Try to kill the old http.server module (just in case)
pkill -f "python3 -m http.server" && echo "Killed simple http.server"

echo "Stop command issued. Run ./sh/status.sh to verify."
