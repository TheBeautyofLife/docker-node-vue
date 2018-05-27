## Docker Node-PM2 Express + Webpack Vue Client Application

**An open source FullStack:** Docker + Nodejs + PM2 + Webpack4 + Vue.js-ES6 client

**Author:** Gonzalo Plaza <gonzalo@verize.com>

1. Clone project repository
```
git clone https://github.com/verize/docker-node-vue.git docker-node-vue
cd docker-node-vue
``` 

2. Configuration
Generate your environment configuration file from default, set your own parameters
```
cp config/default.dist.json config/development.json
```

3. Build and test running Docker container:

```
docker build -t node-pm2-vue .
docker run -d -p 3000:3000 node-pm2-vue:latest
```

Check running server: http://localhost:3000

Test api: 
```
curl --include http://localhost:3000/api/v1/status
```

## Licensing:

The code in this project is licensed under [MIT LICENSE](LICENSE). Read file for more information.