## React App with Vite

This repository contains a React application built using Vite. It provides a modern and efficient development environment for creating React projects

## Installation

To run this application locally, follow these steps:

1. ```
   yarn install

   ```

- This will ensure all app dependencies will be installed

### Development

To start the development server, run the following command:

```
   yarn dev
```

This will start the development server and open the application in your default browser. The application will automatically reload if you make any changes to the source code

### Building for Production

To build the application for production, run the following command:

```yarn build

```

This will generate a production-ready build of your application in the dist directory.

To deploy the application on a virtual machine using NGINX, follow these steps:

1. Copy the PWD of the dist folder on your local machine.

2. Install NGINX on your virtual machine if it's not already installed.

3. Configure NGINX to serve your React application. Create an NGINX server block or update the default configuration file (nginx.conf) with the following:

```
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/your/dist/folder;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Replace your-domain.com with your domain or IP address, and /path/to/your/dist-folder with the path to your React application dist folder.

4. Restart Nginx

Your React application will now be accessible on your virtual machine using the configured domain or IP address.
