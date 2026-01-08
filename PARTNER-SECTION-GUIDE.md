# Partner Section - Implementation Guide

## Overview
The "Get Involved" navigation section has been renamed to "Partner" with three main subsections:
1. **Dignitaries** - Ambassadors Recognition
2. **Volunteer** - Volunteer opportunities
3. **Donate** - Donation options

## Changes Made

### 1. Route Changes
- **New Route File**: `routes/partner.js` (replaces `routes/get-involved.js`)
- **Views Directory**: `views/partner/` (replaces `views/get-involved/`)
- **Updated**: `app.js` to register `/partner` routes

### 2. Navigation Updates
- Updated header navigation from "Get Involved" to "Partner"
- Changed icon to handshake (`fa-handshake`)
- Dropdown menu now includes:
  - Dignitaries (with star icon)
  - Volunteer (with heart icon)
  - Donate (with heart icon)

### 3. New Pages Created

#### Dignitaries Page (`/partner/dignitaries`)
**Design Specifications:**
- **Layout**: Photo-letter grid layout
- **Structure**: Alternating left/right layout
  - Standard: Photo on left, letter on right
  - Reverse: Letter on left, photo on right
- **Components**:
  - Ambassador photo (500px wide, 600px min-height)
  - Recognition letter with:
    - Quote decoration
    - Ambassador name and title
    - Multi-paragraph letter content
    - Signature section (with image option)
    - Date

**Features:**
- Responsive design (stacks on mobile)
- Smooth scroll animations
- Support statement section with badges
- CTA section for volunteering/donating

#### Partner Index Page (`/partner/`)
**Updated Sections:**
- Three partnership options displayed in grid:
  1. **Dignitaries** (primary - blue border)
  2. **Volunteer** (secondary - green border)
  3. **Donate** (accent - orange border)

### 4. Image Directory
Created: `public/src/images/dignitaries/`

**Required Images:**
- `ambassador-1.jpg` - First ambassador photo
- `ambassador-2.jpg` - Second ambassador photo
- `ambassador-3.jpg` - Third ambassador photo
- `signature-1.png` - First signature (optional)
- `signature-2.png` - Second signature (optional)
- `signature-3.png` - Third signature (optional)

**Image Specifications:**
- **Photos**: Minimum 500x600px, portrait orientation preferred
- **Signatures**: Transparent PNG, maximum 200px wide
- Placeholder images will display if files are missing

### 5. Routes Available

| Route | Description |
|-------|-------------|
| `/partner` | Main partner page with three options |
| `/partner/dignitaries` | Ambassadors recognition page |
| `/partner/volunteer` | Volunteer information |
| `/partner/donate` | Donation page |

### 6. Styling Features
- Full theme support (light/dark mode)
- Responsive design for all screen sizes
- GSAP animations on scroll
- Hover effects and transitions
- Grid-based layouts

## How to Add New Ambassadors

### Edit: `views/partner/dignitaries.ejs`

1. **Copy an existing ambassador card:**
```html
<div class="ambassador-card">
    <div class="ambassador-photo">
        <div class="photo-wrapper">
            <img src="/src/images/dignitaries/ambassador-4.jpg" alt="Ambassador Name">
            <div class="photo-decoration"></div>
        </div>
    </div>
    <div class="ambassador-letter">
        <!-- Letter content here -->
    </div>
</div>
```

2. **Update the content:**
   - Change image source
   - Update ambassador name and title
   - Replace letter text
   - Update signature image (optional)
   - Change date

3. **For alternating layout**, add `reverse` class:
```html
<div class="ambassador-card reverse">
```

## Testing Checklist

- [ ] Navigation displays "Partner" with correct icon
- [ ] Dropdown shows all three subsections
- [ ] `/partner` page displays three partnership options
- [ ] `/partner/dignitaries` loads with ambassador cards
- [ ] Photos display correctly (or placeholders)
- [ ] Letter content is readable
- [ ] Responsive design works on mobile
- [ ] Links to volunteer and donate work
- [ ] Theme switching works (light/dark mode)
- [ ] Animations trigger on scroll
- [ ] All buttons are functional

## Next Steps

1. **Add Ambassador Photos**: Upload photos to `public/src/images/dignitaries/`
2. **Update Content**: Edit ambassador names, titles, and letters in `dignitaries.ejs`
3. **Add Signatures**: Upload signature images (optional)
4. **Update Copy**: Customize the hero section and support statement
5. **Test All Links**: Verify all internal links work correctly

## Notes

- The old `/get-involved` routes are kept for backward compatibility
- You can safely delete `routes/get-involved.js` and `views/get-involved/` if no longer needed
- Placeholder images from placeholder.com will display if actual images are missing
- The layout automatically adjusts for different screen sizes
- Each ambassador card has smooth fade-in animations

## Support

For questions or issues, refer to:
- Main app configuration: `app.js`
- Route definitions: `routes/partner.js`
- Navigation: `views/partials/header.ejs`
- Dignitary page: `views/partner/dignitaries.ejs`
