# Tamir Madar · Portfolio & Drone Gallery

This repository contains the landing page for [tamirmadar.com](https://tamirmadar.com). The site showcases my DevOps background, the homelab that powers the site, and a drone gallery containing photos/videos captured in my free time. The project is designed to run on my personal Proxmox + K3s cluster, but it can just as easily be run locally with Docker or `npm`.

## Highlights

- Sleek hero with social links, CV, and drone link (matching the Base44 concept).
- Skills grid and homelab section highlighting Kubernetes, CI/CD, IaC, databases, networking, and drone expertise.
- `/drone-footage` gallery that automatically lists any files mounted in `drone-media/` (images and videos).
- Modal viewer with keyboard navigation (Esc to close, ← → arrows to switch media) and overlay click to dismiss.
- Tailwind CSS, React, Framer Motion animations, and a small Express server serving static assets + API for the gallery.

## Tech Stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- Tailwind CSS with custom gradients and blur effects
- Framer Motion for subtle motion/entrances
- Express server (`server.cjs`) for serving the built assets and the `/api/media` endpoint
- Docker & docker-compose for containerized deployments

## Project Structure

```
├── src/               # React components & styles
├── server.cjs         # Express server + media API
├── docker-compose.yml # Local deployment stack
├── Dockerfile         # Multi-stage build (Vite -> Node runtime)
├── drone-media/       # (gitignored) local media folder mounted into the container
└── README.md
```

## Getting Started (npm)

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # type-check + build
npm run preview    # preview the built app
npm start          # run the Express server after building
```

For the drone gallery to show content during development, place images/videos in `drone-media/` and run `npm start` (or the Docker steps below) so the `/api/media` endpoint can read the mounted directory.

## Docker & Docker Compose

1. Place your drone media (photos/videos) inside `./drone-media/`.
2. Build & run:

   ```bash
   docker compose up --build
   ```

3. Visit `http://localhost:5173` for the main page and `http://localhost:5173/drone-footage` for the gallery.

The compose file maps `./drone-media` into the container at `/app/media` (read-only). Any files in that folder become available in the gallery automatically. Supported extensions: `jpg`, `jpeg`, `png`, `gif`, `webp`, `mp4`, `mov`, `webm`, `mkv`.

## Deployment Notes

- The production site runs inside my homelab as a Kubernetes Deployment on K3s with GitOps deployment automation.
- The Dockerfile outputs a Node runtime image serving static assets + API (no Nginx needed). To deploy elsewhere, build/push the image and run with any container orchestrator, remembering to mount media at `/app/media`.

### Build & push multi-arch images

If you want to build and push images for both amd64 and arm64 (matching my home lab + cloud runners), use Docker Buildx:

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t ghcr.io/rollersweet/portfolio:v2 \
  -t ghcr.io/rollersweet/portfolio:latest \
  --push .
```

## Customization

- Update `src/App.tsx` to change hero text, social links, or skills.
- Replace `src/Portrait.jpg` with your own image to customize the hero portrait.
- To change the drone gallery copy or layout, edit `DroneGallery` inside `src/App.tsx`.

## License

MIT License © Tamir Madar. See `LICENSE` for details.
