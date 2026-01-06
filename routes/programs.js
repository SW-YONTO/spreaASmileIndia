const express = require('express');
const router = express.Router();

// Middleware to add common variables
router.use((req, res, next) => {
  res.locals.theme = req.session.theme || 'light';
  res.locals.user = req.user || null;
  next();
});

// Programs main page
router.get('/', async (req, res) => {
  try {
    const Program = require('../models/Program');
    
    // Fetch all active programs sorted by order
    const programs = await Program.find({ isActive: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();
    
    console.log('Programs loaded:', programs.length);
    
    res.render('programs/index', { 
      title: 'Our Programs - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Discover our comprehensive programs including education, health, nutrition, and vocational training for street children.',
      programs: programs || [],
      currentPath: '/programs'
    });
  } catch (error) {
    console.error('Error loading programs:', error);
    res.render('programs/index', { 
      title: 'Our Programs - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Discover our comprehensive programs including education, health, nutrition, and vocational training for street children.',
      programs: [],
      currentPath: '/programs'
    });
  }
});

// Education Support
router.get('/education', async (req, res) => {
  try {
    const EducationProgram = require('../models/EducationProgram');
    
    // Fetch all published education programs
    const academicPrograms = await EducationProgram.find({ 
      category: 'academic', 
      status: 'published' 
    })
    .sort({ displayOrder: 1, level: 1 })
    .lean();
    
    const skillPrograms = await EducationProgram.find({ 
      category: 'skill', 
      status: 'published' 
    })
    .sort({ displayOrder: 1, level: 1 })
    .lean();
    
    res.render('programs/education', { 
      title: 'Education Support - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Our flagship education program helps street children transition from streets to classrooms through school enrollment and support.',
      academicPrograms,
      skillPrograms
    });
  } catch (error) {
    console.error('Error fetching education programs:', error);
    res.render('programs/education', { 
      title: 'Education Support - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Our flagship education program helps street children transition from streets to classrooms through school enrollment and support.',
      academicPrograms: [],
      skillPrograms: []
    });
  }
});

// Health & Wellness
router.get('/health', (req, res) => {
  res.render('programs/health', { 
    title: 'Health & Wellness - Spread A Smile India',
    page: 'programs',
    metaDescription: 'Healthcare camps, wellness programs, and medical support for underprivileged children and their families.'
  });
});

// Food & Nutrition
router.get('/nutrition', (req, res) => {
  res.render('programs/nutrition', { 
    title: 'Food & Nutrition - Spread A Smile India',
    page: 'programs',
    metaDescription: 'Providing nutritious meals and food security to undernourished street children and their families.'
  });
});

// Vocational Training
router.get('/vocational', (req, res) => {
  res.render('programs/vocational', { 
    title: 'Vocational Training - Spread A Smile India',
    page: 'programs',
    metaDescription: 'Skills training and empowerment programs for older youth and women, including handicrafts and entrepreneurship.'
  });
});

// Events & Campaigns
router.get('/events', async (req, res) => {
  try {
    const Event = require('../models/Event');
    
    // Get filter parameters from query
    const { year: filterYear, category: filterCategory, search } = req.query;
    
    // Build query for published events
    let query = { status: 'published' };
    
    // Apply year filter if provided
    if (filterYear && filterYear !== 'all') {
      query.year = parseInt(filterYear);
    }
    
    // Apply category filter if provided
    if (filterCategory && filterCategory !== 'all') {
      query.category = filterCategory;
    }
    
    // Apply search filter if provided
    if (search && search.trim()) {
      query.$or = [
        { title: { $regex: search.trim(), $options: 'i' } },
        { description: { $regex: search.trim(), $options: 'i' } },
        { keywords: { $regex: search.trim(), $options: 'i' } }
      ];
    }
    
    // Fetch events matching query, sorted by year (desc) then date
    const events = await Event.find(query)
      .sort({ year: -1, createdAt: -1 })
      .lean();
    
    // Group events by year (primary grouping)
    const eventsByYear = {};
    events.forEach(event => {
      const eventYear = event.year || new Date().getFullYear();
      if (!eventsByYear[eventYear]) {
        eventsByYear[eventYear] = [];
      }
      eventsByYear[eventYear].push(event);
    });
    
    // Get available years and categories for filter dropdowns
    const availableYears = await Event.getAvailableYears();
    const eventTypes = await Event.getEventTypes();
    
    // Smart filter suggestions - analyze event titles for common patterns
    const commonEventNames = {};
    events.forEach(event => {
      const title = event.title.toLowerCase();
      // Extract common event names (e.g., "Diwali", "Christmas", "Sports Day")
      const keywords = ['diwali', 'holi', 'christmas', 'republic day', 'independence day', 
                       'sports', 'health camp', 'picnic', 'birthday', 'festival', 'yoga'];
      
      keywords.forEach(keyword => {
        if (title.includes(keyword)) {
          const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
          commonEventNames[capitalizedKeyword] = (commonEventNames[capitalizedKeyword] || 0) + 1;
        }
      });
    });
    
    // Sort by frequency
    const suggestedFilters = Object.entries(commonEventNames)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name]) => name);
    
    res.render('programs/events', { 
      title: 'Events & Celebrations - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Special events, cultural programs, and celebrations that bring joy and learning to our beneficiaries.',
      events,
      eventsByYear,
      availableYears,
      categories: eventTypes.categories || [],
      suggestedFilters,
      filters: {
        year: filterYear || 'all',
        category: filterCategory || 'all',
        search: search || ''
      }
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.render('programs/events', { 
      title: 'Events & Campaigns - Spread A Smile India',
      page: 'programs',
      metaDescription: 'Special events, cultural programs, and celebrations that bring joy and learning to our beneficiaries.',
      events: [],
      eventsByYear: {},
      availableYears: [],
      categories: [],
      suggestedFilters: [],
      filters: { year: 'all', category: 'all', search: '' }
    });
  }
});

module.exports = router;