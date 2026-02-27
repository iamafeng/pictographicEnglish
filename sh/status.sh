#!/bin/bash
# Check the status of the game server
# Usage: ./sh/status.sh

PORT=9090
# Resolve the project root directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_ROOT="$SCRIPT_DIR/.."
LOG_FILE="$PROJECT_ROOT/game_server.log"

# Find the PID
# Using pgrep to find our specific python server script (matches server.py in any path)
PID=$(pgrep -f "server.py")

if [ -z "$PID" ]; then
    echo "Game Server is NOT running on port $PORT."
else
    echo "✅ Game Server is RUNNING on port $PORT (PID: $PID)."
fi

echo "--------------------------------"
echo "Recent Logs ($LOG_FILE):"
# Show last 20 lines of log
if [ -f "$LOG_FILE" ]; then
    tail -n 20 "$LOG_FILE"
else
    echo "Log file $LOG_FILE not found."
fi
