// import styles from "./page.module.css";
import "./globals.css";
import type {} from "next/app";

export default function home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Naniwa Network Operators Group</h1>
      <h2 className="text-2xl">About NaniwaNOG</h2>
      <p>
        NaniwaNOG(Naniwa Network Operators
        Group)は、インターネットにおける技術的事項、運用に関する事項を議論、検討、紹介することを通して関西地域の技術者および利用者に貢献することを目的としたグループです。
        <br />
        議論や情報提供の場として年間1回程度一堂に会する場としてのミーティングを開催しています。
      </p>
      <h2 className="font-bold p-4">NaniwaNOG 2 Meeting in Himeji 開催概要</h2>
      <p className="px-4">参加登録はこちら</p>
      <a href="https://naniwanog2.peatix.com/" className="underline px-4">
        https://naniwanog2.peatix.com/
      </a>
      <h3 className="font-bold px-4">本会議</h3>
      <p className="px-4">
        日時：2024年10月10日(木) 13:00 ～ 18:00
        <br />
        会場：イーグレひめじ あいめっせホール
        <br />
        〒670-0012 兵庫県姫路市本町６８−２９０
      </p>
      <br />
      <h3 className="font-bold px-4">懇親会</h3>
      <p className="px-4">
        日時：18:30 〜<br />
        会場：姫路モノリス
        <br />
        会費：4950円(税込み)
      </p>
      <br />
      <h3 className="font-bold text-left px-4">タイムテーブル</h3>
      <p className="text-left px-4">
        13:00 ～ 13:10 　開会挨拶、会場案内(10分)
        <br />
        13:10 ～ 13:35 　災害プログラム1(仮)(25分)
        <br />
        13:35 ～ 14:00 　災害プログラム2(仮)(25分)
        <br />
        14:00 ～ 14:15 　休憩(15分)
        <br />
        14:15 ～ 14:40 　 BAKUCHIKU と Team Shirankedo
        イベントネットワーク徒然(25分)
        <br />
        14:40 ～ 15:30 　若手セッション 2024(50分)
        <br />
        15:30 ～ 15:45 　休憩(15分)
        <br />
        15:45 ～ 16:00 　告知タイム(15分)
        <br />
        16:00 ～ 16:45 　東西の AS を分ける？分けない？(45分)
        <br />
        16:45 ～ 17:00 　休憩(15分)
        <br />
        17:00 ～ 17:50 　夏の高校野球配信ネタ(仮)(50分)
        <br />
        17:50 ～ 18:00 　閉会宣言・次回予告・懇親会連絡(10分)
      </p>
      <br />
      <h3 className="font-bold text-left px-4">協賛(五十音順)</h3>
      <ul className="text-left px-4">
        <li>アルテリア・ネットワークス株式会社</li>
        <li>インターネットマルチフィード株式会社</li>
        <li>エクイニクス・ジャパン株式会社</li>
        <li>NTT スマートコネクト株式会社</li>
        <li>MC デジタル・リアリティ株式会社</li>
        <li>株式会社オプテージ株式会社</li>
        <li>近鉄ケーブルネットワーク株式会社</li>
        <li>さくらインターネット株式会社</li>
        <li>JR西日本光ネットワーク株式会社</li>
        <li>株式会社 JPIX</li>
        <li>セイコーソリューションズ株式会社</li>
        <li>株式会社 ZTV</li>
        <li>株式会社ネットアイアールディー</li>
        <li>BBIX 株式会社</li>
        <li>ビー・ビー・バックボーン株式会社</li>
      </ul>
      <br />
      <h3 className="text-left px-4">Powered by</h3>
      <ul className="text-left px-4">
        <li>yuzamme</li>
        <li>mitarai</li>
        <li>murakuki</li>
        <li>nnnnnnnnnke</li>
      </ul>
    </div>
  );
}
