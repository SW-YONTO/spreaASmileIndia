# 📷 Image Specifications for Dignitaries Section

## Required Images

### 1. Ambassador Photos

**Location:** `public/src/images/dignitaries/`

**File Names:**
- `ambassador-1.jpg`
- `ambassador-2.jpg`
- `ambassador-3.jpg`
- (Add more as needed: `ambassador-4.jpg`, etc.)

**Specifications:**
- **Dimensions:** Minimum 500px (width) × 600px (height)
- **Aspect Ratio:** Portrait orientation (5:6 ratio recommended)
- **Format:** JPG or PNG
- **File Size:** Under 500KB (optimize for web)
- **Quality:** High resolution, professional photo
- **Style:** Formal portrait, clear background, good lighting

**Recommended Settings:**
```
Width: 600px
Height: 720px
Resolution: 72 DPI
Color Mode: RGB
Format: JPEG
Quality: 85%
```

---

### 2. Signature Images (Optional)

**Location:** `public/src/images/dignitaries/`

**File Names:**
- `signature-1.png`
- `signature-2.png`
- `signature-3.png`

**Specifications:**
- **Format:** PNG with transparent background
- **Max Width:** 200px
- **Height:** Auto (maintain aspect ratio)
- **File Size:** Under 50KB
- **Color:** Black or dark blue ink color
- **Style:** Clear, legible signature

**How to Create:**
1. Scan physical signature
2. Remove background (make transparent)
3. Save as PNG
4. Resize to max 200px width

**Recommended Settings:**
```
Max Width: 200px
Height: Auto
Resolution: 72 DPI
Color Mode: RGB with Alpha
Format: PNG-24
Background: Transparent
```

---

## Image Optimization Tips

### For Photos:
1. **Crop:** Focus on face and upper body
2. **Compress:** Use tools like TinyPNG or ImageOptim
3. **Format:** JPG for photos (smaller file size)
4. **Quality:** 80-85% is usually sufficient

### For Signatures:
1. **Clean Background:** Pure white before removal
2. **High Contrast:** Dark signature on light background
3. **Format:** PNG to preserve transparency
4. **Trim:** Remove excess whitespace

---

## Current Status

**What Shows Now:**
- If images are missing, placeholder images display
- Placeholder text: "Ambassador Photo"
- Website will still work without images

**When You Add Images:**
- Real photos replace placeholders automatically
- Signatures appear above printed names
- Professional look is achieved

---

## Tools for Image Editing

**Free Options:**
- **GIMP** - Full-featured image editor
- **Paint.NET** - Simple Windows editor
- **Photopea** - Online Photoshop alternative
- **Remove.bg** - Auto background removal

**Online Compression:**
- TinyPNG.com
- Compressor.io
- Squoosh.app

**Background Removal:**
- Remove.bg
- PhotoScissors
- Clipping Magic

---

## Example Directory Structure

```
public/
  └── src/
      └── images/
          └── dignitaries/
              ├── ambassador-1.jpg    (600x720px, ~200KB)
              ├── ambassador-2.jpg    (600x720px, ~200KB)
              ├── ambassador-3.jpg    (600x720px, ~200KB)
              ├── signature-1.png     (200x80px, ~15KB)
              ├── signature-2.png     (200x80px, ~15KB)
              └── signature-3.png     (200x80px, ~15KB)
```

---

## Testing Your Images

After uploading:
1. Visit: `http://localhost:3001/partner/dignitaries`
2. Check images load properly
3. Verify responsive design on mobile
4. Check image quality and clarity
5. Ensure signatures are visible

---

## Troubleshooting

**Image Not Showing:**
- ✅ Check filename spelling exactly matches
- ✅ Verify file is in correct directory
- ✅ Ensure proper file extension (.jpg or .png)
- ✅ Check file permissions (readable)
- ✅ Clear browser cache

**Image Too Large:**
- ✅ Compress using online tools
- ✅ Reduce dimensions if over 1000px
- ✅ Lower JPEG quality to 80-85%

**Image Quality Poor:**
- ✅ Use higher resolution source
- ✅ Don't upscale small images
- ✅ Ensure good lighting in original photo

---

## Quick Checklist

- [ ] Photos prepared (600x720px recommended)
- [ ] Photos optimized (under 500KB each)
- [ ] Photos uploaded to `/public/src/images/dignitaries/`
- [ ] Filenames match exactly: `ambassador-1.jpg`, etc.
- [ ] Signatures prepared (optional, PNG with transparency)
- [ ] Signatures uploaded if available
- [ ] Test page loaded: `/partner/dignitaries`
- [ ] Images display correctly
- [ ] Mobile responsiveness checked

---

**Need Help?** 
Refer to `PARTNER-SECTION-GUIDE.md` for full documentation.
