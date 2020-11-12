## エイリアスを追加したい

### 1. ルートディレクトリにnext.config.jsを作成
```js
// next.config.js
const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
}
```

### 2. (TSの場合)ts.config.jsonを編集

補完が効くようになる

```json
// ts.config.json
"baseUrl": ".",
"paths": {
  "@": ["src/"],
  "@/*": ["src/*"],
}
```
