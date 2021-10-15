# TOKEN=06446c559312aac7a1f212f7f4e06862 OLD_PW=b NEW_PW=c sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PW}"'",
      "new": "'"${NEW_PW}"'"
    }
  }'

echo
