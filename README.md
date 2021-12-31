準備手順

１．git clone コマンドを叩き、クローン実行。

２．環境変数を設定するため、.envファイルに記載する。
  mv　コマンドで .env exampleファイルを.envファイルに変更。
  
  .envファイルを開き、各サービスのポート、DBの設定を記述
  
３．docker-compose up -d --buildを叩き、コンテナ作成

８．laravelのプロジェクト配下で cp .env example .env　を叩く。 

４．docker exec -it 【appコンテナID】 bashコマンドを叩き、appコンテナに入る。

５．composer-installを叩き、必要なパッケージをインストールする。

６．コンテナ内でphp artisan key:generate を叩く。

７．exitコマンドでコンテナから出る。

８．動作確認のため、http://localhost:【port】/Loginでログイン画面を確認する。

以上
