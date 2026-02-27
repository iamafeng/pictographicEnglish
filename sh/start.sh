#!/bin/bash
# Start the Python HTTP server in the background
# Usage: ./sh/start.sh

PORT=9090
LOG_FILE="english_server.log"

# Navigate to the project root (one level up from this script)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR/.." || exit

echo "Starting Multithreaded Game Server on port $PORT..."
echo "Serving files from: $(pwd)"
nohup python3 sh/server.py $PORT > $LOG_FILE 2>&1 &

echo "Server started! (PID: $!)"
echo "Logs are being written to $LOG_FILE"
