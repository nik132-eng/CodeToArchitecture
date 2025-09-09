#!/usr/bin/env node

/**
 * AWS CLF-C02 Note Files Generator
 * 
 * This script generates all note files for AWS CLF-C02 certification
 * based on the study-plan.json configuration.
 * 
 * Usage: node scripts/generate-aws-notes.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const STUDY_PLAN_FILE = path.join(__dirname, '..', 'certifications', 'aws-clf-c02', 'study-plan.json');
const NOTES_DIR = path.join(__dirname, '..', 'certifications', 'aws-clf-c02', 'notes');
const DIAGRAMS_DIR = path.join(__dirname, '..', 'certifications', 'aws-clf-c02', 'diagrams');

/**
 * Generate note file content
 */
function generateNoteContent(topic, domain, domainIndex, topicIndex) {
  const domainNumber = domainIndex + 1;
  const topicNumber = topicIndex + 1;
  
  return `# ${topic.title}

> **Domain ${domainNumber}: ${domain.domain} (${domain.weight})** | **Topic ${topicNumber}** | **Status:** ${topic.status}

## 📚 Learning Objectives

${domain.objectives.map(obj => `- [ ] ${obj}`).join('\n')}

## 🎯 Key Concepts

### ${topic.subtopics[0] || 'Core Concepts'}

${topic.subtopics.slice(1).map(subtopic => `### ${subtopic}`).join('\n\n')}

## 📖 Study Resources

${topic.study_resources.map(resource => `- ${resource}`).join('\n')}

## 🔗 Related Services

*List AWS services related to this topic*

## 📊 Diagram

\`\`\`mermaid
graph TB
    subgraph "${topic.title}"
        A[Key Concept 1]
        B[Key Concept 2]
        C[Key Concept 3]
        A --> B
        B --> C
    end
\`\`\`

## 🧠 Key Takeaways

- **Important Point 1**: Description
- **Important Point 2**: Description
- **Important Point 3**: Description

## ❓ Practice Questions

1. **Question 1**: What is...?
   - A) Option A
   - B) Option B
   - C) Option C
   - D) Option D
   - **Answer**: B

2. **Question 2**: Which service...?
   - A) Option A
   - B) Option B
   - C) Option C
   - D) Option D
   - **Answer**: C

## 🔗 Integration with Microservices

*How this topic relates to microservices architecture*

## 📚 References

- [AWS Official Documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Free Tier](https://aws.amazon.com/free/)

---

*Last updated: ${new Date().toLocaleDateString()}*
*Next: [${topic.subtopics[0] || 'Next Topic'}](./${getNextTopicFile(domain, topicIndex)})*
`;
}

/**
 * Get next topic file name
 */
function getNextTopicFile(domain, currentTopicIndex) {
  const nextIndex = currentTopicIndex + 1;
  if (nextIndex < domain.topics.length) {
    return `${domain.topics[nextIndex].notes_file.split('/').pop()}`;
  }
  return 'README.md';
}

/**
 * Generate Mermaid diagram content
 */
function generateDiagramContent(topic, domain) {
  return `# ${topic.title} - Diagram

\`\`\`mermaid
graph TB
    subgraph "${domain.domain}"
        subgraph "${topic.title}"
            A[Core Concept 1]
            B[Core Concept 2]
            C[Core Concept 3]
            D[Core Concept 4]
            
            A --> B
            B --> C
            C --> D
        end
        
        subgraph "AWS Services"
            E[Service 1]
            F[Service 2]
            G[Service 3]
        end
        
        A --> E
        B --> F
        C --> G
    end
    
    style A fill:#4CAF50,stroke:#388E3C
    style B fill:#2196F3,stroke:#1976D2
    style C fill:#FF9800,stroke:#F57C00
    style D fill:#9C27B0,stroke:#7B1FA2
\`\`\`

## Diagram Explanation

1. **Core Concept 1**: Description of the first concept
2. **Core Concept 2**: Description of the second concept
3. **Core Concept 3**: Description of the third concept
4. **Core Concept 4**: Description of the fourth concept

## AWS Services Integration

- **Service 1**: How it relates to the concepts
- **Service 2**: How it relates to the concepts
- **Service 3**: How it relates to the concepts

---

*This diagram helps visualize the relationships between concepts and AWS services for ${topic.title}.*
`;
}

/**
 * Main function
 */
function main() {
  try {
    console.log('🔄 Generating AWS CLF-C02 note files...');
    
    // Read study plan
    const studyPlan = JSON.parse(fs.readFileSync(STUDY_PLAN_FILE, 'utf8'));
    
    // Ensure directories exist
    if (!fs.existsSync(NOTES_DIR)) {
      fs.mkdirSync(NOTES_DIR, { recursive: true });
    }
    if (!fs.existsSync(DIAGRAMS_DIR)) {
      fs.mkdirSync(DIAGRAMS_DIR, { recursive: true });
    }
    
    let totalFiles = 0;
    
    // Generate note files for each domain and topic
    studyPlan.domains.forEach((domain, domainIndex) => {
      console.log(`📖 Processing ${domain.domain}...`);
      
      domain.topics.forEach((topic, topicIndex) => {
        // Generate note file
        const noteContent = generateNoteContent(topic, domain, domainIndex, topicIndex);
        const noteFileName = topic.notes_file.split('/').pop();
        const noteFilePath = path.join(NOTES_DIR, noteFileName);
        
        fs.writeFileSync(noteFilePath, noteContent, 'utf8');
        console.log(`  ✅ Created: ${noteFileName}`);
        totalFiles++;
        
        // Generate diagram file if specified
        if (topic.diagram) {
          const diagramContent = generateDiagramContent(topic, domain);
          const diagramFileName = topic.diagram.split('/').pop();
          const diagramFilePath = path.join(DIAGRAMS_DIR, diagramFileName);
          
          fs.writeFileSync(diagramFilePath, diagramContent, 'utf8');
          console.log(`  📊 Created: ${diagramFileName}`);
          totalFiles++;
        }
      });
    });
    
    console.log(`\n✅ Generated ${totalFiles} files successfully!`);
    console.log(`📁 Notes directory: ${NOTES_DIR}`);
    console.log(`📊 Diagrams directory: ${DIAGRAMS_DIR}`);
    
  } catch (error) {
    console.error('❌ Error generating AWS note files:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateNoteContent, generateDiagramContent };
