# Run nginx with either tracerats.org or challenges.tracerats.org

# Check the SERVER_HOSTNAME variable to know which path to host
if [[ "$SERVER_HOSTNAME" == "tracerats.org" ]]; then
  nginx -g "daemon off;" -c /tracerats/Website/nginx.conf
elif [[ "$SERVER_HOSTNAME" == "challenges.tracerats.org" ]]; then
  nginx -g "daemon off;" -c /tracerats/Website/challenges/nginx.conf
fi
