#!/usr/bin/env node

/**
 * Progress Tracker Generator for CodeToArchitecture
 * 
 * This script scans the lessons directory and generates a progress table
 * based on file existence and completion status.
 * 
 * Usage: node scripts/generate-progress.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const LESSONS_DIR = path.join(__dirname, '..', 'book', 'src', 'lessons');
const OUTPUT_FILE = path.join(__dirname, '..', 'PROGRESS.md');

// Lesson definitions with their topics
const LESSONS = [
  {
    id: 'lesson-01-microservices-design-principles',
    title: 'Microservices Design Principles',
    targetDate: 'Oct 05, 2024',
    topics: [
      { id: 'topic-01-high-cohesion-low-coupling', title: 'High Cohesion & Low Coupling' },
      { id: 'topic-02-decentralize-data-management', title: 'Decentralize Data Management' },
      { id: 'topic-03-design-for-failure-and-resilience', title: 'Design for Failure & Resilience' },
      { id: 'topic-04-api-first-approach', title: 'API First Approach' },
      { id: 'topic-05-single-responsibility-principle', title: 'Single Responsibility Principle' },
      { id: 'topic-06-define-scope-properly', title: 'Define the Scope Properly' },
      { id: 'topic-07-event-driven-communication', title: 'Event-Driven Communication' },
      { id: 'topic-08-secure-each-service', title: 'Secure Each Service' },
      { id: 'topic-09-scalability-and-independence', title: 'Scalability & Independence' },
      { id: 'topic-10-automate-testing-and-cicd', title: 'Automate Testing & CI/CD' },
      { id: 'topic-11-manage-traffic', title: 'Manage Traffic' }
    ]
  },
  {
    id: 'lesson-02-system-design-framework',
    title: 'System Design Framework',
    targetDate: 'Nov 02, 2024',
    topics: [
      { id: 'topic-01-requirements-gathering', title: 'Requirements Gathering' },
      { id: 'topic-02-capacity-estimation', title: 'Capacity Estimation' },
      { id: 'topic-03-system-apis', title: 'System APIs' },
      { id: 'topic-04-database-design', title: 'Database Design' },
      { id: 'topic-05-high-level-design', title: 'High-Level Design' },
      { id: 'topic-06-detailed-design', title: 'Detailed Design' },
      { id: 'topic-07-identifying-bottlenecks', title: 'Identifying Bottlenecks' },
      { id: 'topic-08-load-balancing', title: 'Load Balancing' },
      { id: 'topic-09-caching-strategies', title: 'Caching Strategies' },
      { id: 'topic-10-database-scaling', title: 'Database Scaling' },
      { id: 'topic-11-cdn-edge-computing', title: 'CDN and Edge Computing' },
      { id: 'topic-12-security-privacy', title: 'Security and Privacy' }
    ]
  },
  {
    id: 'lesson-03-ddd-microservices',
    title: 'Domain-Driven Design – Microservices Style',
    targetDate: 'Dec 13, 2024',
    topics: [
      { id: 'topic-01-domain-modeling-fundamentals', title: 'Domain Modeling Fundamentals' },
      { id: 'topic-02-bounded-contexts', title: 'Bounded Contexts' },
      { id: 'topic-03-aggregates-entities', title: 'Aggregates and Entities' },
      { id: 'topic-04-value-objects', title: 'Value Objects' },
      { id: 'topic-05-domain-events', title: 'Domain Events' },
      { id: 'topic-06-context-mapping', title: 'Context Mapping' },
      { id: 'topic-07-anti-corruption-layers', title: 'Anti-Corruption Layers' },
      { id: 'topic-08-event-sourcing', title: 'Event Sourcing' },
      { id: 'topic-09-cqrs-pattern', title: 'CQRS Pattern' },
      { id: 'topic-10-saga-pattern', title: 'Saga Pattern' },
      { id: 'topic-11-domain-services', title: 'Domain Services' },
      { id: 'topic-12-refactoring-microservices', title: 'Refactoring to Microservices' }
    ]
  }
  // Add more lessons as they are defined
];

/**
 * Check if a file exists and has content
 */
function checkFileStatus(lessonId, topicId) {
  const filePath = path.join(LESSONS_DIR, lessonId, `${topicId}.md`);
  
  if (!fs.existsSync(filePath)) {
    return { exists: false, hasContent: false, size: 0 };
  }
  
  const stats = fs.statSync(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  return {
    exists: true,
    hasContent: content.trim().length > 100, // Consider content if more than 100 chars
    size: stats.size,
    lastModified: stats.mtime
  };
}

/**
 * Generate progress table
 */
function generateProgressTable() {
  let markdown = `# 📚 Progress Tracker\n\n`;
  markdown += `> *Last updated: ${new Date().toLocaleString()}*\n\n`;
  
  markdown += `## 🎯 Overall Progress\n\n`;
  
  let totalTopics = 0;
  let completedTopics = 0;
  let inProgressTopics = 0;
  
  LESSONS.forEach(lesson => {
    totalTopics += lesson.topics.length;
    lesson.topics.forEach(topic => {
      const status = checkFileStatus(lesson.id, topic.id);
      if (status.hasContent) {
        completedTopics++;
      } else if (status.exists) {
        inProgressTopics++;
      }
    });
  });
  
  const completionRate = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  markdown += `| Metric | Count | Percentage |\n`;
  markdown += `|--------|-------|------------|\n`;
  markdown += `| **Total Topics** | ${totalTopics} | 100% |\n`;
  markdown += `| **Completed** | ${completedTopics} | ${Math.round((completedTopics / totalTopics) * 100)}% |\n`;
  markdown += `| **In Progress** | ${inProgressTopics} | ${Math.round((inProgressTopics / totalTopics) * 100)}% |\n`;
  markdown += `| **Not Started** | ${totalTopics - completedTopics - inProgressTopics} | ${Math.round(((totalTopics - completedTopics - inProgressTopics) / totalTopics) * 100)}% |\n\n`;
  
  markdown += `## 📖 Lesson Progress\n\n`;
  
  LESSONS.forEach((lesson, lessonIndex) => {
    const lessonNumber = lessonIndex + 1;
    const emoji = lessonNumber <= 1 ? '🧱' : '🚧';
    
    markdown += `### ${emoji} Lesson ${lessonNumber}: ${lesson.title}\n`;
    markdown += `**Target Date:** ${lesson.targetDate}\n\n`;
    
    markdown += `| # | Topic | Status | Last Modified |\n`;
    markdown += `|---|-------|--------|---------------|\n`;
    
    let lessonCompleted = 0;
    let lessonInProgress = 0;
    
    lesson.topics.forEach((topic, topicIndex) => {
      const status = checkFileStatus(lesson.id, topic.id);
      const topicNumber = topicIndex + 1;
      
      let statusEmoji = '☐';
      let statusText = 'Not Started';
      
      if (status.hasContent) {
        statusEmoji = '✅';
        statusText = 'Completed';
        lessonCompleted++;
      } else if (status.exists) {
        statusEmoji = '🚧';
        statusText = 'In Progress';
        lessonInProgress++;
      }
      
      const lastModified = status.lastModified ? 
        status.lastModified.toLocaleDateString() : 'N/A';
      
      markdown += `| ${topicNumber} | ${topic.title} | ${statusEmoji} ${statusText} | ${lastModified} |\n`;
    });
    
    const lessonCompletionRate = lesson.topics.length > 0 ? 
      Math.round((lessonCompleted / lesson.topics.length) * 100) : 0;
    
    markdown += `\n**Lesson Progress:** ${lessonCompleted}/${lesson.topics.length} topics completed (${lessonCompletionRate}%)\n\n`;
  });
  
  markdown += `## 🎯 Next Steps\n\n`;
  
  // Find next incomplete topic
  let nextTopic = null;
  for (const lesson of LESSONS) {
    for (const topic of lesson.topics) {
      const status = checkFileStatus(lesson.id, topic.id);
      if (!status.hasContent) {
        nextTopic = { lesson, topic };
        break;
      }
    }
    if (nextTopic) break;
  }
  
  if (nextTopic) {
    markdown += `**Next Topic to Work On:** ${nextTopic.lesson.title} - ${nextTopic.topic.title}\n\n`;
  }
  
  markdown += `## 📊 Progress Visualization\n\n`;
  markdown += `\`\`\`\n`;
  
  // Generate ASCII progress bar
  const barLength = 50;
  const filledLength = Math.round((completedTopics / totalTopics) * barLength);
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
  
  markdown += `Overall Progress: [${bar}] ${completionRate}%\n`;
  markdown += `\`\`\`\n\n`;
  
  markdown += `---\n\n`;
  markdown += `*This progress tracker is automatically generated. Run \`node scripts/generate-progress.js\` to update.*\n`;
  
  return markdown;
}

/**
 * Main function
 */
function main() {
  try {
    console.log('🔄 Generating progress tracker...');
    
    const progressMarkdown = generateProgressTable();
    
    // Write to file
    fs.writeFileSync(OUTPUT_FILE, progressMarkdown, 'utf8');
    
    console.log(`✅ Progress tracker generated: ${OUTPUT_FILE}`);
    console.log(`📊 Total topics: ${LESSONS.reduce((sum, lesson) => sum + lesson.topics.length, 0)}`);
    
  } catch (error) {
    console.error('❌ Error generating progress tracker:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateProgressTable, checkFileStatus };
