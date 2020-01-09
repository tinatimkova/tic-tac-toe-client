curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--header "Content-type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${PLAYER}"'"
    },
    "over": false
  }
}'

echo
