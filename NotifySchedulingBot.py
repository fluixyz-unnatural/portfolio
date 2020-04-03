import requests
from bs4 import BeautifulSoup
import datetime
import twitter
import os
from google.cloud import storage as gcs

bucket_name = 'higara_sionchantuuti_tweet'
project_name='higarashiochantuuti'

def upload_text(file_name,text):
    client = gcs.Client(project_name)
    #バケット名を指定してbucketを取得
    bucket = client.get_bucket(bucket_name)
    #Blobを作成
    blob = gcs.Blob(file_name, bucket)
    blob.upload_from_string(text)

def read_blob(file_name,text):
    client = gcs.Client(project_name)
    #バケット名を指定してbucketを取得
    bucket = client.get_bucket(bucket_name)
    #Blobを作成
    blob = gcs.Blob(file_name, bucket)
    if not blob.exists() :
        print('not exists')
        return False
    content = blob.download_as_string()
    compTxt = "b'"+text+" '"
    print(text in content.decode('utf-8'))
    return text in content.decode('utf-8')


def main(event,context):
    #ツイートのための準備
    auth = twitter.OAuth(consumer_key="APIキー",
    consumer_secret="APIシークレット",
    token="アクセストークン",
    token_secret="アクセストークンシークレット")
    t = twitter.Twitter(auth=auth)

    #今日と明日の日付を文字列に変換したり

    #現在時刻を取得, GCP上で動かす前提なのでタイムゾーンをきちんと指定する
    dt_now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))
    label = dt_now.strftime('\n(%Y-%m-%d %H:%M)')
    today = dt_now
    tomorrow = today+datetime.timedelta(days=1)
    yesterday = today-datetime.timedelta(days=1)
    s_today = today.strftime("%m/%d") #今日の日付の文字列
    s_tomorrow = tomorrow.strftime("%m/%d") #明日の日付の文字列
    s_yesterday = yesterday.strftime("%m/%d") #昨日の日付の文字列
    shiontime = ""

    #htmlを持ってきて文字列にバラす
    r = requests.get("https://schedule.hololive.tv/")
    soup = BeautifulSoup(r.text, "html.parser")
    text = soup.find_all('div','container')
    s = soup.get_text().split();

    #今日の日付のスケジュールがどこからどこまでかを探す
    start = 0
    end = len(s)-1
    for i in range(0,len(s)):
        if s[i]==s_today:
            start = i
            break
    for i in range(start+1,len(s)):
        if s[i]==s_yesterday:
            end=i
            break
        if s[i]==s_tomorrow:
            end = i
            break
        if s[i]==s_today:
            end=i
            break

    #紫咲シオンの文字を見つける
    found = False
    for i in range(start+2,end):
        if s[i]=='紫咲シオン':
            shiontime += s[i-1]
            shiontime += " "

    filename = dt_now.strftime('%Y-%m-%d')+".txt"

    if not shiontime == "":
        TweetText = shiontime
        if read_blob(filename,TweetText):
            print('tweet log matched')
            return
        else :
            upload_text(filename,TweetText)
            t.statuses.update(status=shiontime+label)
