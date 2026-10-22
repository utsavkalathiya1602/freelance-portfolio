/**
 * Generate favicon.ico from the SVG icon.
 * Produces a multi-resolution ICO file (16×16, 32×32, 48×48).
 * 
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const svgPath = resolve(ROOT, "src/app/icon.svg");
const svgBuffer = readFileSync(svgPath);

// Sizes to include in the ICO file
const sizes = [16, 32, 48];

/**
 * Create an ICO file from multiple PNG buffers.
 * ICO format: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  
  // ICO header: 6 bytes
  const headerSize = 6;
  // Each directory entry: 16 bytes
  const dirSize = 16 * numImages;
  
  // Calculate offsets
  let offset = headerSize + dirSize;
  const entries = [];
  
  for (let i = 0; i < numImages; i++) {
    const png = pngBuffers[i];
    entries.push({
      size: sizes[i],
      pngBuffer: png.buffer,
      offset,
    });
    offset += png.buffer.length;
  }
  
  // Total file size
  const totalSize = offset;
  const ico = Buffer.alloc(totalSize);
  
  // Write ICO header
  ico.writeUInt16LE(0, 0);     // Reserved
  ico.writeUInt16LE(1, 2);     // Type: 1 = ICO
  ico.writeUInt16LE(numImages, 4); // Number of images
  
  // Write directory entries
  for (let i = 0; i < numImages; i++) {
    const entry = entries[i];
    const pos = headerSize + (i * 16);
    
    ico.writeUInt8(entry.size >= 256 ? 0 : entry.size, pos);     // Width
    ico.writeUInt8(entry.size >= 256 ? 0 : entry.size, pos + 1); // Height
    ico.writeUInt8(0, pos + 2);                                   // Color palette
    ico.writeUInt8(0, pos + 3);                                   // Reserved
    ico.writeUInt16LE(1, pos + 4);                                // Color planes
    ico.writeUInt16LE(32, pos + 6);                               // Bits per pixel
    ico.writeUInt32LE(entry.pngBuffer.length, pos + 8);           // Image size
    ico.writeUInt32LE(entry.offset, pos + 12);                    // Image offset
  }
  
  // Write image data
  for (const entry of entries) {
    entry.pngBuffer.copy(ico, entry.offset);
  }
  
  return ico;
}

async function main() {
  console.log("Generating favicon.ico from icon.svg...");
  
  const pngBuffers = await Promise.all(
    sizes.map(async (size) => {
      const buffer = await sharp(svgBuffer, { density: 300 })
        .resize(size, size)
        .png()
        .toBuffer();
      return { size, buffer };
    })
  );
  
  const icoBuffer = createIco(pngBuffers);
  
  // Write to public/favicon.ico — served at a stable /favicon.ico URL (Google prefers a fixed address).
  const outPath = resolve(ROOT, "public/favicon.ico");
  writeFileSync(outPath, icoBuffer);
  console.log(`✅ Written ${outPath} (${icoBuffer.length} bytes)`);
  
  // Also generate a 192×192 and 512×512 PNG for web manifest / Google
  for (const size of [192, 512]) {
    const pngBuf = await sharp(svgBuffer, { density: 300 })
      .resize(size, size)
      .png()
      .toBuffer();
    const pngPath = resolve(ROOT, `public/icon-${size}.png`);
    writeFileSync(pngPath, pngBuf);
    console.log(`✅ Written ${pngPath} (${pngBuf.length} bytes)`);
  }
  
  // Generate a 32×32 PNG favicon as well for fallback
  const png32 = await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toBuffer();
  const png32Path = resolve(ROOT, "public/favicon-32x32.png");
  writeFileSync(png32Path, png32);
  console.log(`✅ Written ${png32Path} (${png32.length} bytes)`);
}

main().catch(console.error);
