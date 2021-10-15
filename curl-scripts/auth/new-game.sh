# EMAIL=gs@example.com PASSWORD=b sh curl-scripts/auth/new-game.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/games \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}
    }'

echo
