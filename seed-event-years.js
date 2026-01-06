/**
 * Migration Script: Add Year Field to Existing Events
 * 
 * This script adds the 'year' field to all existing events
 * that don't have it yet. It tries to extract the year from
 * the eventDate field or uses the current year as fallback.
 * 
 * Usage: node seed-event-years.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./models/Event');

async function addYearsToExistingEvents() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Find events without year field
    const eventsWithoutYear = await Event.find({ 
      $or: [
        { year: { $exists: false } },
        { year: null }
      ]
    });

    console.log(`📊 Found ${eventsWithoutYear.length} events without year field\n`);

    if (eventsWithoutYear.length === 0) {
      console.log('✅ All events already have year field. No migration needed!');
      process.exit(0);
    }

    let updated = 0;
    let failed = 0;

    for (const event of eventsWithoutYear) {
      try {
        let yearToAssign = new Date().getFullYear(); // Default to current year

        // Try to extract year from eventDate
        if (event.eventDate) {
          const yearMatch = event.eventDate.match(/20\d{2}/); // Match years like 2020, 2021, etc.
          if (yearMatch) {
            yearToAssign = parseInt(yearMatch[0]);
          }
        }

        // If createdAt exists, use that year as fallback
        if (!yearToAssign && event.createdAt) {
          yearToAssign = new Date(event.createdAt).getFullYear();
        }

        // Update event
        event.year = yearToAssign;
        await event.save();

        updated++;
        console.log(`✅ Updated "${event.title}" -> Year: ${yearToAssign}`);
      } catch (error) {
        failed++;
        console.error(`❌ Failed to update "${event.title}":`, error.message);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`📊 Migration Summary:`);
    console.log(`   Total events found: ${eventsWithoutYear.length}`);
    console.log(`   ✅ Successfully updated: ${updated}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log('='.repeat(60) + '\n');

    console.log('✨ Migration complete! You can now use year-based filtering.');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run migration
console.log('\n' + '='.repeat(60));
console.log('🚀 Starting Event Year Migration');
console.log('='.repeat(60) + '\n');

addYearsToExistingEvents();
