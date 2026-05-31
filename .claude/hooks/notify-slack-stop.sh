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
  -d '{"text": ":white_check_mark: *작업 완료* — Claude가 응답을 마쳤습니다."}'
