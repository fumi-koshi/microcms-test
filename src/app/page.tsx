import { supabase } from "@/libs/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error(error);
    return <div>エラーが発生しました</div>;
  }

  return (
    <main>
      <h1>Supabaseデータ</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
