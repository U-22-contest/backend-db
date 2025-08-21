# バックエンド　セットアップ手順

以下の手順でセットアップできるか確認してないので、不備がある場合があるかもです。

### １．Dockerセットアップ
```angular2html
cd docker

docker-compose up -d
```

### 2.依存関係のインストール
今回Nestjsのみなので「nest-backend」フォルダに移動・実行します
```angular2html
cd nest-backend

pnpm install
```

### 3.環境変数の設定
環境変数ファイルを作成、必要な設定を行います
nest-backendフォルダ内に.envファイルを作成し、以下を記載
```angular2html
DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"

MONGO_URL="mongodb://localhost:27017/mydatabase"

JWT_SECRET="※ここは適当な英数字を羅列してください※"
```

### 4.Prismaクライアント生成
```angular2html
pnpm prisma generate
```

### 5.マイグレーション
```angular2html
pnpm prisma migrate dev
```

### 6.実行
```angular2html
pnpm run start:dev
```

### 7.APIドキュメント
実行後、以下のURLでアクセスできます。
```angular2html
http://localhost:4000/api-docs
```

おまけ
- pnpm prisma studioでデータベースGUIを起動できます。