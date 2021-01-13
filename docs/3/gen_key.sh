#https://qiita.com/masakielastic/items/05cd6a36bb6fb10fccf6
openssl req -x509 -newkey rsa:4096 -sha256 \
-nodes -keyout server.key -out server.crt \
-subj "/CN=example.com" -days 3650
