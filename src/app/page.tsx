import { supabase } from "@/libs/supabaseClient";
import AuthStatus from "@/app/components/AuthStatus";

export default async function Home() {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error("Supabase error:", error);
    return <div>エラーが発生しました: {error.message}</div>;
  }

  return (
    <main>
      <AuthStatus />;
      <h1>Supabaseデータ</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
