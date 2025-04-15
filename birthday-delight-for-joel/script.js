{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww51000\viewh25480\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const themeToggleButton = document.getElementById('theme-toggle');\
    const body = document.body;\
    const birthdayPersonName = document.getElementById('birthday-person-name');\
    const ageValue = document.getElementById('age-value');\
\
    // --- Personalization ---\
    const name = prompt("Enter the birthday person's name:", "Marketer"); // Ask for name\
    const age = prompt("Enter their new age:", "30"); // Ask for age\
    if (name) birthdayPersonName.textContent = name;\
    if (age) ageValue.textContent = age;\
    // Update Date Range to today\
    const today = new Date();\
    const dateString = today.toLocaleDateString('en-US', \{ month: 'short', day: 'numeric', year: 'numeric' \});\
    const dateRangeElement = document.querySelector('.date-range p');\
    if (dateRangeElement) \{\
        dateRangeElement.textContent = `$\{dateString\} - $\{dateString\}`;\
    \}\
\
\
    // --- Theme Toggler ---\
    themeToggleButton.addEventListener('click', () => \{\
        body.classList.toggle('dark-mode');\
        body.classList.toggle('light-mode');\
    \});\
\
    // --- KPI Reveal ---\
    const revealWidgets = document.querySelectorAll('.reveal-widget');\
    revealWidgets.forEach(widget => \{\
        widget.addEventListener('click', (e) => \{\
             // Prevent clicks on hidden content links/buttons from re-triggering\
            if (e.target.closest('.hidden-content')) return;\
\
            const hiddenContent = widget.querySelector('.hidden-content');\
            if (hiddenContent) \{\
                hiddenContent.classList.toggle('visible');\
            \}\
        \});\
    \});\
\
     // Close reveal if clicking inside the hidden content (optional)\
    const hiddenContents = document.querySelectorAll('.hidden-content');\
     hiddenContents.forEach(content => \{\
         content.addEventListener('click', (e) => \{\
             // Allow clicks on actual elements like images if needed\
            // if (e.target.tagName === 'A' || e.target.tagName === 'IMG') return;\
            content.classList.remove('visible');\
             e.stopPropagation(); // Prevent click bubbling up to the widget\
         \});\
     \});\
\
\
    // --- Bar Chart "Eating" ---\
    const bars = document.querySelectorAll('.bar-chart .bar');\
    bars.forEach(bar => \{\
        bar.addEventListener('click', () => \{\
            if (!bar.classList.contains('eaten')) \{\
                bar.classList.add('eaten');\
                // Optional: Add a message\
                // const chartWidget = bar.closest('.bar-chart-widget');\
                // const messageArea = chartWidget.querySelector('.feedback-message') || document.createElement('p');\
                // messageArea.classList.add('feedback-message');\
                // messageArea.textContent = `Yum, $\{bar.closest('.bar-item').querySelector('.label').textContent\} data!`;\
                // if (!messageArea.parentNode) chartWidget.appendChild(messageArea);\
            \}\
        \});\
    \});\
\
    // --- Pie Chart Interaction ---\
    const pieButtons = document.querySelectorAll('.pie-button');\
    const pieMessage = document.getElementById('pie-message');\
    pieButtons.forEach(button => \{\
        button.addEventListener('click', () => \{\
            // Remove selected class from others\
            pieButtons.forEach(btn => btn.classList.remove('selected'));\
            // Add selected class to clicked button\
            button.classList.add('selected');\
            const segment = button.getAttribute('data-segment');\
            if (pieMessage) \{\
                 pieMessage.textContent = `Selected: $\{segment\}`;\
            \}\
        \});\
    \});\
\
    // --- Line Graph Add Data Point ---\
    const addDataButton = document.getElementById('add-data-point');\
    const lineGraphSVG = document.querySelector('.line-graph');\
    const lineGraphMessage = document.getElementById('line-graph-message');\
    let dataPointCounter = 0;\
\
    if (addDataButton && lineGraphSVG) \{\
        addDataButton.addEventListener('click', () => \{\
            const existingPoints = lineGraphSVG.querySelectorAll('circle').length;\
            const polyline = lineGraphSVG.querySelector('polyline');\
            if (!polyline) return;\
\
            const points = polyline.points;\
            if (points.length === 0) return; // No line to add points to\
\
            // Simple logic: Add points near the end of the line\
            const lastPoint = points.getItem(points.numberOfItems - 1);\
            const secondLastPoint = points.getItem(points.numberOfItems - 2);\
\
            const newX = lastPoint.x + (Math.random() * 5 + 2); // Move slightly right\
            const newY = lastPoint.y + (Math.random() * 10 - 5); // Vary Y slightly\
\
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\
            circle.setAttribute('cx', newX.toFixed(1));\
            circle.setAttribute('cy', Math.max(2, Math.min(48, newY)).toFixed(1)); // Keep within bounds\
            circle.setAttribute('r', '2'); // Radius of the data point\
            circle.setAttribute('fill', '#e91e63'); // Point color\
            circle.setAttribute('class', 'data-point');\
            lineGraphSVG.appendChild(circle);\
            dataPointCounter++;\
            if (lineGraphMessage) \{\
                lineGraphMessage.textContent = `Added data point #$\{dataPointCounter\}!`;\
            \}\
        \});\
    \}\
\
    // --- Export Button ---\
    const exportButton = document.getElementById('export-button');\
    const exportMessage = document.getElementById('export-message');\
    if (exportButton) \{\
        exportButton.addEventListener('click', () => \{\
             if (exportMessage) exportMessage.textContent = 'Cake Data Exported! (Not really \uc0\u55357 \u56841 )';\
            // alert('Cake Data Exported! (Just Pretend)'); // Simple alert alternative\
        \});\
    \}\
\
\});}