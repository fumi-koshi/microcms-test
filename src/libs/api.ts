import { HdcpPlayer } from './types';

export async function getHdcpList(): Promise<HdcpPlayer[]> {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/hdcp`,
    {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  return data.contents;
}
