
# auth

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 注m   意事项
1. 在主应用中使用window.history.pushState();跳转，在vue子应用中，使用router-link跳转会报错；使用router.push()会造成刷新；使用router.replace无异常
