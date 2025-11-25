const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3000;

const distDir = path.join(__dirname, 'dist');
const mediaDir = path.join(__dirname, 'media');

app.use('/media', express.static(mediaDir, { fallthrough: false }));
app.use(express.static(distDir));

app.get('/api/media', async (_req, res) => {
  try {
    const entries = await fs.readdir(mediaDir, { withFileTypes: true });
    const media = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => /\.(mp4|mov|webm|mkv|png|jpe?g|gif|webp)$/i.test(name))
      .map((name) => {
        const isVideo = /\.(mp4|mov|webm|mkv)$/i.test(name);
        return {
          name,
          type: isVideo ? 'video' : 'image',
          url: `/media/${encodeURIComponent(name)}`,
        };
      });
    res.json(media);
  } catch (err) {
    console.error('Failed to read media directory', err);
    res.status(500).json({ error: 'Failed to read media directory' });
  }
});

// SPA fallback
app.use((_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
