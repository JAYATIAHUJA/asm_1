/**
 * compliance-landing.js
 * ---------------------
 * Handles all interactive behaviour for the compliance landing page.
 *
 * Features:
 *  - Mobile navigation drawer open / close
 *  - Backdrop (overlay) click to dismiss drawer
 *
 * Dependencies: None (vanilla JS)
 */

/* ============================================================
   MOBILE NAVIGATION DRAWER
   Drawer slides in from the right on mobile.
   Overlay dims the background and closes drawer on click.
============================================================ */

// Element references
const hamburger         = document.getElementById('hamburger');
const mobileHeroHamburger = document.getElementById('mobileHeroHamburger');
const closeDrawer       = document.getElementById('closeDrawer');
const mobileDrawer      = document.getElementById('mobileDrawer');
const mobileOverlay     = document.getElementById('mobileOverlay');

/**
 * openMenu
 * Slides the drawer into view and shows the dimmed overlay.
 */
function openMenu() {
    mobileDrawer.style.transform  = 'translateX(0)';
    mobileOverlay.style.opacity    = '1';
    mobileOverlay.style.visibility = 'visible';
}

/**
 * closeMenu
 * Slides the drawer out and hides the overlay.
 */
function closeMenu() {
    mobileDrawer.style.transform  = 'translateX(100%)';
    mobileOverlay.style.opacity    = '0';
    mobileOverlay.style.visibility = 'hidden';
}

// Attach event listeners (guard against missing elements)
if (hamburger)          hamburger.addEventListener('click', openMenu);
if (mobileHeroHamburger) mobileHeroHamburger.addEventListener('click', openMenu);
if (closeDrawer)        closeDrawer.addEventListener('click', closeMenu);
if (mobileOverlay)      mobileOverlay.addEventListener('click', closeMenu);  // tap outside to close
