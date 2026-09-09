# denkakougei.dev

https://denkakougei.dev

## Setup

Bun は `.bun-version` に記載のバージョンを使用する。

```sh
$ git clone git@github.com:denkakougei/denkakougei.dev.git
$ cd denkakougei.dev
$ bun install
```

リポジトリ直下に `.env` を作成し、環境変数を設定:

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

開発サーバーの起動:

```sh
$ bun run dev
```


## Deploy

| 環境 | トリガー | デプロイ先 |
| --- | --- | --- |
| production | `main` への push | GitHub Pages |
| staging | `develop` への push | Cloudflare Workers |
