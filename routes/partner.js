const express = require('express');
const router = express.Router();

// Middleware to add common variables
router.use((req, res, next) => {
  res.locals.theme = req.session.theme || 'light';
  res.locals.user = req.user || null;
  next();
});

// Partner main page
router.get('/', (req, res) => {
  res.render('partner/index', { 
    title: 'Partner With Us - Spread A Smile India',
    page: 'partner',
    metaDescription: 'Partner with Spread A Smile India. Support through dignitaries, volunteer work, donations, and more.'
  });
});

// Dignitaries - Ambassadors Recognition
router.get('/dignitaries', (req, res) => {
  res.render('partner/dignitaries', { 
    title: 'Dignitaries & Ambassadors - Spread A Smile India',
    page: 'partner',
    metaDescription: 'Meet our esteemed ambassadors and dignitaries who support and recognize our mission to transform lives.'
  });
});

// Volunteer
router.get('/volunteer', (req, res) => {
  res.render('partner/volunteer', { 
    title: 'Volunteer With Us - Spread A Smile India',
    page: 'partner',
    metaDescription: 'Become a volunteer and directly impact the lives of street children. Join our Thursday Langar and weekly activities.'
  });
});

// Donate
router.get('/donate', (req, res) => {
  res.render('partner/donate', { 
    title: 'Donate - Spread A Smile India',
    page: 'partner',
    metaDescription: 'Your donation can transform a child\'s life. Support education, health, nutrition, and vocational training programs.'
  });
});

module.exports = router;