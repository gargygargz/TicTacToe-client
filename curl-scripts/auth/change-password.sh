# TOKEN=VALUE OLD_PW=value NEW_PW=value sh curl-scripts/auth/change-password.sh

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
