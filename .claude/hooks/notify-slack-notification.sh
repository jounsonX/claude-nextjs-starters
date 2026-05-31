#!/bin/bash

ENV_FILE="$(dirname "$0")/../../.env.local"
if [ -f "$ENV_FILE" ]; then
  export $(grep -E '^SLACK_WEBHOOK_URL=' "$ENV_FILE" | xargs)
fi

if [ -z "$SLACK_WEBHOOK_URL" ]; then
  echo "SLACK_WEBHOOK_URL이 설정되지 않았습니다." >&2
  exit 1
fi

curl -s -X POST "$SLACK_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"text": ":warning: *Claude Code 권한 요청* — 승인이 필요합니다. 터미널을 확인해 주세요."}'
