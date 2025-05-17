本リポジトリは、NaniwaNOGのホームページ ( https://naniwanog.jp/ ) 用です。

## 始め方
1. バージョン管理ツールとして`asdf`をPCにインストールし、設定する。
   - https://asdf-vm.com/guide/getting-started.html
   - `.tool-versions`に記載されているバージョンをインストールする。
2. 以下コマンドで開発サーバーが立ち上がる
   ```bash
   # asdf経由でnodeがインストールされている前提
   npm install
   npm run dev
   ```
3. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスする。

## 使用ライブラリについて
- cssには[tailwindcss](https://tailwindcss.com/)を使用。
- linterやprettierも使用。

## デプロイまわりメモ
- CloudflareのWorkersでデプロイしている
  - アカウントは`yuzamme`
  - 無料枠でやっているため、連携アカウントの制限あり。アクセス必要な場合は管理者に問い合わせる。
- GitHubと連携済み。`main`ブランチにマージするとそのまま公開されるので注意。
  - プルリクあげるだけでプレビューページが出来上がる。
- microCMSの設定もされているが、2025/05現在、使用していない。
