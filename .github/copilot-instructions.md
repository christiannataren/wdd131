# Copilot Instructions for wdd131 Web Project

## Project Overview
This is a static web project for WDD131 coursework, organized by week and topic. The codebase contains HTML, CSS, and JavaScript files, with a focus on responsive layouts and modular scripts for different pages.

## Directory Structure
- `index.html`, `place.html`, `temples.html`: Main pages for the site.
- `images/`: Contains all image assets used throughout the site.
- `scripts/`: JavaScript files for page-specific logic (`getdates.js`, `place.js`, `temples.js`).
- `styles/`: CSS files for base styles and page-specific large/small screen layouts.
- `week01/`, `week02/`, `week03/`: Weekly folders with assignments, each with their own HTML, CSS, and JS files.

## Key Patterns & Conventions
- **Responsive Design:** Uses separate CSS files for large and small screens (e.g., `place.css` and `place-large.css`). Media queries are used extensively.
- **Page-Specific Scripts:** Each main page has a corresponding JS file in `scripts/` for dynamic behavior.
- **Minimal External Dependencies:** No build tools, package managers, or frameworks detected. All code is vanilla HTML/CSS/JS.
- **Image Usage:** Images are referenced directly from the `images/` folder. Use `webp` for optimized images when possible.
- **Assignment Organization:** Weekly folders (`week01`, `week02`, etc.) contain self-contained assignments with their own assets and styles.

## Developer Workflow
- **No Build Step:** Open HTML files directly in the browser for development and testing.
- **Debugging:** Use browser DevTools for inspecting layout, styles, and JS errors. No automated test or linting setup detected.
- **Adding Features:** Add new pages by creating corresponding HTML, CSS, and JS files, following the existing naming and folder conventions.
- **Responsive Layouts:** When updating layouts, ensure changes are reflected in both base and large CSS files as needed.

## Examples
- To add a new responsive page, create `mypage.html`, `styles/mypage.css`, `styles/mypage-large.css`, and `scripts/mypage.js`.
- For page-specific logic, see `scripts/place.js` and `scripts/temples.js`.
- For responsive CSS, see `styles/place-large.css` and its use of media queries.

## Integration Points
- No backend or API integration detected. All data and assets are local.
- No third-party libraries or frameworks in use.

## Special Notes
- Keep code modular and organized by page and week.
- Use semantic HTML and descriptive class names for maintainability.
- When updating styles, check both small and large screen CSS files for consistency.

---
If any section is unclear or missing important details, please provide feedback or specify which workflows or patterns need further documentation.
