# backend-stats

## Deploying backend

You can clone the application here:

```sh
$ git clone git@github.com:solami-limited/backend-stats.git
```

To deploy the backend, run the following commands

```sh
$ cd backend-stats/backend
$ go build -o server
$ chomd +x server
$ ./server
```

You can also create a service to run this application on start app
To do this, add `backend.service` to your systemd service then run the following

```sh
# to start service
sudo systemctl start backend.service

# to check status of the service
sudo systemctl status backend.service

# to enable start up on reboot
sudo systemctl enable backend.service
```

That's all for backend

## Deploying Frontend

To deploy the frontend, run the following commands

```sh
$ cd backend-stats/frontend
$ yarn build

...
```
# chezacash-stats
