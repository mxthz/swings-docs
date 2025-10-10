# Swings Documentation

Public documentation repository for the Swings mood tracking app.

## Live Site

This repository is automatically published via GitHub Pages at:
**https://mxthz.github.io/swings-docs/**

## Contents

- **index.html** - Landing page for the Swings app
- **privacy.html** - Privacy Policy
- **terms.html** - Terms of Service (for reference; iOS uses Apple's standard EULA)
- **js/lang.js** - Internationalization (i18n) support for 17 languages
- **css/lang.css** - Language selector styling

## Internationalization

The site supports 17 languages with automatic detection based on browser settings:

- English (en)
- Español (es)
- Français (fr)
- Deutsch (de)
- Italiano (it)
- Português (pt)
- 日本語 (ja)
- 한국어 (ko)
- 简体中文 (zh)
- 繁體中文 (zh-TW)
- العربية (ar) - RTL support
- हिन्दी (hi)
- Русский (ru)
- Türkçe (tr)
- Bahasa Indonesia (id)
- ไทย (th)
- Nederlands (nl)

### Language Selection

Users can:
1. **Auto-detect**: The site automatically detects the browser's language preference
2. **Manual selection**: Use the language selector (🌐) in the top-right corner
3. **URL parameter**: Access specific language via `?lang=es` (for example)
4. **Persistence**: Language preference is saved in localStorage

## Usage in App

The privacy policy is linked from the app's paywall screen. For iOS, the app uses Apple's standard End User License Agreement (EULA) instead of custom terms.

**Privacy Policy:** https://mxthz.github.io/swings-docs/privacy.html  
**Terms (iOS):** https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

## Making Changes

1. Edit the HTML files in this repository
2. For translations, update `js/lang.js` with new translation strings
3. Commit and push changes to the `main` branch
4. GitHub Pages will automatically deploy the updates within a few minutes

### Adding New Translations

To add translations for a new language:

1. Edit `js/lang.js` and add a new language object in the `translations` constant
2. Add the language name to the `languageNames` constant
3. Commit and push the changes

## Notes

- This is a public repository to enable GitHub Pages hosting
- The main Swings app repository remains private
- All HTML files include inline CSS for simplicity
- Language selector appears on all pages for consistent UX
