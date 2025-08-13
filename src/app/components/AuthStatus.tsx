"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabaseClient";
import { Session } from "@supabase/supabase-js";

export default function AuthStatus() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>読み込み中...</p>;

  if (!session) {
    return <p>ログインしていません</p>;
  }

  return <p>ログイン中: {session.user.email}</p>;
}
