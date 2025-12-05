import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    message: 'Success',
    data: [
      { title: '해외 마케팅', icon: '/assets/iconmarketing.svg' },
      { title: '퍼블리셔', icon: '/assets/iconimage.svg' },
      { title: '캐드원(제도사)', icon: '/assets/iconbox.svg' },
      { title: '해외 세일즈', icon: '/assets/icontarget.svg' },
      { title: '해외 CS', icon: '/assets/iconcall.svg' },
    ],
  });
}
