import re

chart_bars_html = '''    <!-- Chart Bars Left -->
    <div class="chart-bars chart-bars-left">
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
    </div>

    <!-- Chart Bars Right -->
    <div class="chart-bars chart-bars-right">
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
        <div class="chart-bar-group">
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
            <div class="chart-bar"></div>
        </div>
    </div>

    <nav class="navbar">'''

html_files = ['library.html', 'book.html', 'chapter.html', 'quiz.html', 'notes.html', 'leaderboard.html', 'badges.html']

for filename in html_files:
    with open(filename, 'r') as f:
        content = f.read()
    
    # Replace <nav class="navbar"> with chart bars + navbar
    updated_content = content.replace('<nav class="navbar">', chart_bars_html)
    
    with open(filename, 'w') as f:
        f.write(updated_content)
    
    print(f"Updated {filename}")

print("\nAll files updated successfully!")
