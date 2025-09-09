// CodeToArchitecture Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress tracking
    initializeProgressTracking();
    
    // Initialize collapsible sections
    initializeCollapsibleSections();
    
    // Initialize search enhancements
    initializeSearchEnhancements();
    
    // Initialize theme toggle
    initializeThemeToggle();
});

/**
 * Initialize progress tracking functionality
 */
function initializeProgressTracking() {
    // Add progress bars to lesson pages
    const progressElements = document.querySelectorAll('.progress-tracker');
    progressElements.forEach(element => {
        const completed = element.dataset.completed || 0;
        const total = element.dataset.total || 1;
        const percentage = (completed / total) * 100;
        
        const progressBar = element.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    });
    
    // Add click handlers for checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateProgressStatus(this);
        });
    });
}

/**
 * Update progress status when checkbox is clicked
 */
function updateProgressStatus(checkbox) {
    const topicCard = checkbox.closest('.topic-card');
    if (topicCard) {
        if (checkbox.checked) {
            topicCard.classList.remove('not-started', 'in-progress');
            topicCard.classList.add('completed');
        } else {
            topicCard.classList.remove('completed');
            topicCard.classList.add('not-started');
        }
    }
    
    // Update overall progress
    updateOverallProgress();
}

/**
 * Update overall progress calculation
 */
function updateOverallProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const total = checkboxes.length;
    const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Update progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        bar.style.width = percentage + '%';
    });
    
    // Update progress text
    const progressTexts = document.querySelectorAll('.progress-text');
    progressTexts.forEach(text => {
        text.textContent = `${completed}/${total} (${percentage}%)`;
    });
}

/**
 * Initialize collapsible sections
 */
function initializeCollapsibleSections() {
    // Add collapsible functionality to lesson sections
    const lessonHeaders = document.querySelectorAll('.lesson-header');
    lessonHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle('collapsed');
                const icon = this.querySelector('.collapse-icon');
                if (icon) {
                    icon.classList.toggle('rotated');
                }
            }
        });
    });
}

/**
 * Initialize search enhancements
 */
function initializeSearchEnhancements() {
    // Add search result highlighting
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            highlightSearchResults(query);
        });
    }
}

/**
 * Highlight search results
 */
function highlightSearchResults(query) {
    if (query.length < 2) return;
    
    const content = document.querySelector('.content');
    if (!content) return;
    
    // Remove existing highlights
    const highlights = content.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
    
    // Add new highlights
    const walker = document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        if (regex.test(text)) {
            const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
            const wrapper = document.createElement('span');
            wrapper.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(wrapper, textNode);
        }
    });
}

/**
 * Initialize theme toggle
 */
function initializeThemeToggle() {
    // Add theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 16px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
}

/**
 * Add smooth scrolling to anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add keyboard shortcuts
 */
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.value = '';
                searchInput.blur();
            }
        }
    });
}

/**
 * Add copy code functionality
 */
function initializeCopyCode() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋';
        copyButton.className = 'copy-code';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
        
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyButton.innerHTML = '✅';
                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                }, 2000);
            });
        });
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeKeyboardShortcuts();
    initializeCopyCode();
});

// Add CSS for search highlighting
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background: #ffeb3b;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: bold;
    }
    
    .collapsed {
        display: none;
    }
    
    .collapse-icon {
        transition: transform 0.3s ease;
    }
    
    .collapse-icon.rotated {
        transform: rotate(180deg);
    }
    
    .dark-theme {
        background: #1a1a1a;
        color: #e0e0e0;
    }
    
    .dark-theme .topic-card {
        background: #2d2d2d;
        border-color: #444;
    }
    
    .dark-theme table {
        background: #2d2d2d;
    }
    
    .dark-theme th {
        background: #4a5568;
    }
`;
document.head.appendChild(style);
