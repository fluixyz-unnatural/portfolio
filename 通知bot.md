# ライバースケジュール通知用bot

好きな配信者の配信予定が分かり次第スマホで通知を受け取りたいと思い作成した。

Twitter：[@notifyschedule](https://twitter.com/notifyschedule)

ソースコード：[github](https://github.com/fluixyz-unnatural/portfolio/blob/master/NotifySchedulingBot.py)



<b>目次</b>

[toc]



## 機能説明

配信予定を把握したいライバーは事務所に所属しており、事務所がスケジュールを公開している。([ホロジュール](https://schedule.hololive.tv/))

上記のサイトを5分毎にチェックし、サイト内のスケジュールから目的の配信者の予定の有無、ある場合は時刻を取得し、前回チェックしたときとの差異を確認し、変更があった場合はツイートする。



## 使用したもの

### Phython

触れたことはなかったが各種API等の解説記事が多かったため採用した。



### TwitterAPI

スマホ側に新たに何かを導入することなく通知を受け取れるため、通知の手段としてTwitterを利用した。



### Google Cloud Platform (GCP)

コードを一定時間毎に実行する必要があったがサーバを持っていないためクラウドサービスを利用した。GCPには様々な機能があるようだが中でも使ったのは以下の3つである。



#### Cloud Functions

コードを登録し、GCPの他のサービスをトリガーとして設定することができる。書いたコードをこれに登録した。



#### Cloud Scheduler

分、時間、曜日などの一定間隔でアクションを起こせる。これを用いてCloudFunctionsに登録したコードを5分毎に実行した。



#### Storage

前回実行したときとの差異を見る必要があったためファイルをディレクトリ上に保存する必要があったため利用した。



