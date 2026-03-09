# Personal OS

[cloudflarebutton]

A modern, fullstack starter template for building personal dashboards and productivity apps on Cloudflare Workers and Pages. Features a responsive React frontend with shadcn/ui components, Tailwind CSS, API routes powered by Hono, TanStack Query, dark mode support, and seamless deployment.

## Features

- **Fullstack Architecture**: Static React app served via Cloudflare Pages with API routes in Cloudflare Workers.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom theming, dark/light mode toggle.
- **API-Ready Backend**: Hono-based routes in `worker/userRoutes.ts` (extend without modifying core files).
- **State Management**: TanStack Query for data fetching/caching.
- **Developer Experience**: Hot reload, TypeScript, error boundaries, client error reporting.
- **Responsive Design**: Mobile-first, sidebar layout, animations, and glassmorphism effects.
- **Production-Ready**: ESLint, optimized builds, Cloudflare observability.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion, Sonner (toasts), React Router
- **Backend**: Cloudflare Workers, Hono, TypeScript
- **Data & State**: TanStack Query, Zustand, React Hook Form, Zod
- **UI Utils**: class-variance-authority, clsx, tailwind-merge
- **Build Tools**: Bun, Wrangler, Cloudflare Vite Plugin
- **Other**: Immer, UUID, Date-fns

## Quick Start

```bash
bun install
bun run dev
```

Your app will be available at `http://localhost:3000` (or `$PORT`).

## Installation

1. **Prerequisites**:
   - [Bun](https://bun.sh) installed
   - [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`bunx wrangler@latest login`)

2. Clone/Fork the repo and run:
   ```bash
   bun install
   ```

## Development

- **Start dev server**:
  ```bash
  bun run dev
  ```
  Frontend: `http://localhost:3000`  
  API routes: `http://localhost:3000/api/*`

- **Type generation** (Cloudflare bindings):
  ```bash
  bun run cf-typegen
  ```

- **Lint**:
  ```bash
  bun run lint
  ```

- **Preview production build**:
  ```bash
  bun run preview
  ```

**Adding API Routes**: Extend `worker/userRoutes.ts`. Core worker files (`index.ts`, `core-utils.ts`) are protected—do not modify.

**Customizing UI**: 
- Edit `src/pages/HomePage.tsx` for homepage.
- Use `AppLayout` from `src/components/layout/AppLayout.tsx` for sidebar.
- shadcn/ui components are pre-installed in `src/components/ui/*`.

## Deployment

Deploy to Cloudflare Workers/Pages with one command:

```bash
bun run deploy
```

This builds assets and deploys via Wrangler.

**Custom Domain & Config**:
- Edit `wrangler.jsonc` for bindings (KV, D1, R2, DOs).
- Set `wrangler.toml` secrets: `wrangler secret put NAME`.
- Assets are SPA-routed; API on `/api/*`.

[cloudflarebutton]

**Direct Deploy**: Use the Cloudflare button above or [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/workers/new?name=personal-os-djnukoevj0n1upiza_zt4&url=${repositoryUrl}).

## Project Structure

```
├── src/                 # React app
│   ├── components/      # shadcn/ui + custom
│   ├── pages/           # Routes (HomePage.tsx)
│   └── hooks/           # Custom hooks (theme, mobile)
├── worker/              # Hono API routes
│   ├── userRoutes.ts    # YOUR ROUTES HERE
│   └── index.ts         # Core (do not edit)
├── tailwind.config.js   # Theming
└── wrangler.jsonc       # Deployment config
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run lint` | Lint code |
| `bun run preview` | Local prod preview |
| `bun run deploy` | Deploy to Cloudflare |
| `bun run cf-typegen` | Generate types |

## Environment Variables

No env vars required by default. Add via `wrangler.toml`:

```toml
[vars]
MY_VAR = "value"
```

## Contributing

1. Fork & clone
2. `bun install`
3. Make changes
4. `bun run lint`
5. PR with clear description

## License

MIT. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- File issues here or join Cloudflare Discord.