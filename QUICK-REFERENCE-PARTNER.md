# 🎯 Quick Reference - Partner Section

## What Changed?

**Navigation Menu:**
- ❌ Old: "Get Involved"
- ✅ New: "Partner"

**New Sections:**
1. 🌟 **Dignitaries** - Ambassador recognition with photos and letters
2. 🤝 **Volunteer** - Volunteer opportunities
3. ❤️ **Donate** - Donation options

---

## 📸 Adding Ambassador Photos

### Step 1: Prepare Images
- **Location:** `public/src/images/dignitaries/`
- **Photo Files:**
  - `ambassador-1.jpg`
  - `ambassador-2.jpg`
  - `ambassador-3.jpg`
- **Size:** Minimum 500px wide × 600px tall
- **Format:** JPG or PNG

### Step 2: Prepare Signatures (Optional)
- **Signature Files:**
  - `signature-1.png`
  - `signature-2.png`
  - `signature-3.png`
- **Format:** PNG with transparent background
- **Size:** Maximum 200px wide

---

## ✍️ Editing Ambassador Content

**File to Edit:** `views/partner/dignitaries.ejs`

### Find and Replace These Sections:

```html
<!-- Ambassador Name -->
<h3 class="ambassador-name">Ambassador Name</h3>
<p class="ambassador-title">Position/Title</p>

<!-- Letter Content -->
<p>Replace this paragraph with the recognition letter...</p>

<!-- Signature -->
<p class="signature-name">Ambassador Name</p>
<p class="signature-date">January 2026</p>
```

### To Add More Ambassadors:
1. Copy an entire `<div class="ambassador-card">` section
2. Paste it after the last ambassador
3. For alternating layout, add `reverse` class:
   ```html
   <div class="ambassador-card reverse">
   ```
4. Update photo filename: `ambassador-4.jpg`
5. Update all content

---

## 🔗 New URLs

| Section | URL |
|---------|-----|
| Main Partner Page | `/partner` |
| Dignitaries | `/partner/dignitaries` |
| Volunteer | `/partner/volunteer` |
| Donate | `/partner/donate` |

---

## ✅ What's Already Done

- ✅ Navigation updated from "Get Involved" to "Partner"
- ✅ Three sections added: Dignitaries, Volunteer, Donate
- ✅ Ambassadors recognition page created
- ✅ Photo-letter grid layout implemented
- ✅ All main page links updated
- ✅ Responsive design for all devices
- ✅ Theme support (light/dark mode)
- ✅ Placeholder images (show if photos missing)

---

## 🎨 Layout Preview

### Dignitaries Page:
```
┌─────────────────────────────────────────┐
│  Photo    │    Recognition Letter       │
│  Person   │    • Name & Title           │
│           │    • Letter Content         │
│           │    • Signature & Date       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Recognition Letter    │    Photo       │
│  • Name & Title        │    Person      │
│  • Letter Content      │                │
│  • Signature & Date    │                │
└─────────────────────────────────────────┘
```

---

## 🚀 To Go Live:

1. **Add Photos:** Upload to `public/src/images/dignitaries/`
2. **Update Content:** Edit `views/partner/dignitaries.ejs`
3. **Test:** Visit `/partner/dignitaries` in browser
4. **Done!** 🎉

---

## 📱 Contact for Support

If you need help:
- Check: `PARTNER-SECTION-GUIDE.md` (detailed guide)
- Check: `PARTNER-CHANGES-SUMMARY.md` (full changes list)

---

**Everything is ready! Just add your photos and content.** ✨
