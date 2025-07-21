import styles from './HdcpPage.module.css';
import { getHdcpList } from '@/libs/api'; // ファイルあるならこう書く

export default async function HdcpPage() {
  const players = await getHdcpList();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>HDCP表</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>氏名</th>
            <th className={styles.th}>フリガナ</th>
            <th className={styles.th}>HDCP</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: any) => (
            <tr key={player.id} className={styles.trHover}>
              <td className={styles.td}>{player.name}</td>
              <td className={styles.td}>{player.kana}</td>
              <td className={styles.td}>{player.hdcp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
