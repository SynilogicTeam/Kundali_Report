(function () {
  // STEP 1: Add container
  const container = document.getElementById("kundliWidgetContainer");
  if (!container) return;
  container.id = "kundliWidgetContainer";

  // STEP 2: Add HTML content
  container.innerHTML = `
<div class="container-widget">
    <div class="free-Kundli-container" id="kundliFormContainer">
       <!-- Header -->
       

       <!-- Main Form Card -->
       <div class="free-Kundli-main-card">
           <div class="free-Kundli-card-header">
               <div class="free-Kundli-header-icons">
                   <div class="free-Kundli-header-icon-wrapper">
                       <svg class="free-Kundli-header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                       </svg>
                   </div>
                   <div class="free-Kundli-header-icon-wrapper">
                       <svg class="free-Kundli-header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                       </svg>
                   </div>
                   <div class="free-Kundli-header-icon-wrapper">
                       <svg class="free-Kundli-header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                       </svg>
                   </div>
               </div>
               <h2 class="free-Kundli-card-title">Free Kundli</h2>
               <p class="free-Kundli-card-description">Please provide accurate details for precise astrological calculations</p>
           </div>
           <div class="free-Kundli-card-content">
               <form id="divineForm">
                   <div class="free-Kundli-form-grid">
                       <!-- Left Column -->
                       <div class="free-Kundli-form-column">
                           <div class="free-Kundli-form-group">
                               <label for="dateOfBirth" class="free-Kundli-form-label">
                                  <span> <i class="fas fa-calendar free-Kundli-label-icon"></i></span>
                                   Date of Birth
                               </label>
                               <input type="date" id="dateOfBirth" name="dateOfBirth" class="free-Kundli-form-input" required>
                           </div>
                           <div class="free-Kundli-form-group">
                               <label for="timeOfBirth" class="free-Kundli-form-label">
                                  <span><i class="fas fa-clock free-Kundli-label-icon"></i></span>
                                   Time of Birth
                               </label>
                               <input type="time" id="timeOfBirth" name="timeOfBirth" class="free-Kundli-form-input" required>
                           </div>
                         
                       </div>
                       <!-- Right Column -->
                       <div class="free-Kundli-form-column">
                           <div class="free-Kundli-form-group">
                               <label for="style" class="free-Kundli-form-label"><span>  <i class="fas fa-th-large free-Kundli-label-icon"></i></span>Chart Style</label>
                               <select id="style" name="style" class="free-Kundli-form-select" required>
                                   <option value="">Choose your preferred style</option>
                                   <option value="north">North Style</option>
                                   <option value="south">South Style</option>
                                   <option value="east">East Style</option>
                                
                               </select>
                           </div>
                           <div class="free-Kundli-form-group">
                               <label for="language" class="free-Kundli-form-label"><span> <i class="fas fa-language free-Kundli-label-icon"></i></span>Preferred Language</label>
                               <select id="language" name="language" class="free-Kundli-form-select" required>
                                   <option value="">Select your language</option>
                                   <option value="en">English</option>
                                   <option value="hi">Hindi</option>
                                  
                                   <option value="ta">Tamil</option>
                                   <option value="te">Telugu</option>
                                   <option value="ka">Kannada</option>
                                   <option value="ml">Malayalam</option>
                                   <option value="gr">Gujarati</option>
                                   <option value="mr">Marathi</option>
                                   <option value="be">Bengali</option>
                               </select>
                           </div>
                           
                       </div>
                       
                   </div>
                     <div class="free-Kundli-form-group" style="margin-top: 1.5rem;">
                            <label for="placeOfBirth" class="free-Kundli-form-label">
                              <span><i class="fas fa-location-dot free-Kundli-label-icon"></i></span>
                              Place of Birth
                            </label>
                            <input
                              type="text"
                              id="placeOfBirth"
                              name="placeOfBirth"
                              class="free-Kundli-form-input"
                              placeholder="Enter your birth city, state, country"
                              required
                            >
                            <!-- Hidden inputs for lat/long/tz -->
<input type="hidden" id="latitude">
<input type="hidden" id="longitude">
<input type="hidden" id="timezone">
                          </div>
                   
                   <button type="submit" class="free-Kundli-generate-btn">
                    Generate My Divine Kundali
                       <svg class="free-Kundli-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                       </svg>
                      
                       
                   </button>
                   <!-- Info Cards -->
                   <div class="free-Kundli-info-cards">
                       <div class="free-Kundli-info-card">
                           <div class="free-Kundli-info-icon">✓</div>
                           <p class="free-Kundli-info-text">100% Accurate</p>
                       </div>
                       <div class="free-Kundli-info-card">
                           <div class="free-Kundli-info-icon"> <i class="fas fa-lock"></i></div>
                           <p class="free-Kundli-info-text">Privacy Protected</p>
                       </div>
                       <div class="free-Kundli-info-card">
                           <div class="free-Kundli-info-icon"> <i class="fas fa-bolt"></i></div>
                           <p class="free-Kundli-info-text">Instant Results</p>
                       </div>
                   </div>
               </form>
           </div>
       </div>
       
   </div>
</div>


<div id="kundliResult" style="margin-top:20px;"></div>
          <!-- loader -->
          <div id="loader" class="loader-overlay" style="display: none;">
            <div class="loader">
              <div class="justify-content-center jimu-primary-loading"></div>
              </div>
            </div>`;

  // STEP 3: Add CSS
  const style = document.createElement("style");
  style.innerHTML = `:root {
  --kundli-primary: #ee5a24;
  --kundli-astro-indigo: #ff6b6b;
  --kundli-gradient: linear-gradient(135deg, #ff6b6b, #ee5a24);
  --kundli-astro-gold: #f59e0b;
  --kundli-foreground: #1a1a1a;
  --kundli-muted: #f1f5f9;
  --kundli-border: #e2e8f0;
  --kundli-radius: 0.5rem;
  --kundli-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  --kundli-light: #000000;
  --kundli-text-muted: #e4e7ea;
  --kundli-gold-accent: #ffd700;
  --kundli-darker-bg: #0a0d11;
  --kundli-new-bread-accent-color: #f59e0b;
  --kundli-secondary-orange: #ffb347;
  --kundli-light-orange: #fff8dc;
  --kundli-dark-text: #2c2c2c;
  --kundli-medium-text: #666666;
  --kundli-border-color: #e0e0e0;
  --kundli-white: #ffffff;
  --kundli-green-verified: #4caf50;
  --kundli-star-color: #ff8c00;
  --kundli-front-section: linear-gradient(
    135deg,
    var(--kundli-light-orange) 0%,
    #fff5f5 50%,
    #fef7ed 100%
  );
  --kundli-border-radius: 18px;
  --kundli-surface: #ffffff;
  --kundli-shadow: 0 5px 16px rgba(34, 34, 94, 0.11);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



// #kundliWidgetContainer{
//     background: linear-gradient(
//     135deg,
//     var(--kundli-light-orange) 0%,
//     #fff5f5 50%,
//     #fef7ed 100%
    
//   );
//   padding:10px 0px
 
// }

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  line-height: 1.5;
}

/* free kundali page */
.body-kundliPage {
  background: linear-gradient(
    135deg,
    var(--kundli-light-orange) 0%,
    #fff5f5 50%,
    #fef7ed 100%
  );
  position: relative;
  overflow-x: hidden;
  color: var(--kundli-foreground);
}

/* Decorative floating elements */
.free-Kundli-floating-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.free-Kundli-float-1 {
  top: 30rem;
  left: 5rem;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, var(--kundli-secondary-orange), var(--kundli-primary));
  animation: free-Kundli-pulse 3s infinite;
}

.free-Kundli-float-2 {
  top: 30rem;
  right: 5rem;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, var(--kundli-astro-indigo), var(--kundli-star-color));
  opacity: 0.5;
  animation: free-Kundli-bounce 2s infinite;
}

.free-Kundli-float-3 {
  bottom: 35rem;
  left: 2.5rem;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, var(--kundli-astro-gold), var(--kundli-gold-accent));
  opacity: 0.7;
  animation: free-Kundli-pulse 2.5s infinite;
}

.free-Kundli-float-4 {
  bottom: 35rem;
  right: 2.5rem;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, var(--kundli-secondary-orange), var(--kundli-primary));
  opacity: 0.4;
  animation: free-Kundli-bounce 3s infinite;
}

@keyframes free-Kundli-pulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes free-Kundli-bounce {
  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes free-Kundli-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.free-Kundli-container {
  position: relative !important;
  z-index: 10;
  padding-bottom: 50px;
}

.free-Kundli-main-card {
  background: var(--kundli-white);
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(238, 90, 36, 0.1);
  overflow: hidden;
  margin-top: 20px;
  
}

.free-Kundli-card-header {
  background: linear-gradient(135deg, var(--kundli-light-orange), #fff5f5);
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid var(--kundli-border-color);
}

.free-Kundli-header-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.free-Kundli-header-icon-wrapper {
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 50%;
  background: var(--kundli-white);
  box-shadow: 0 4px 12px rgba(238, 90, 36, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.free-Kundli-header-icon {
  color: var(--kundli-primary);
}

.free-Kundli-card-title {
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--kundli-primary), var(--kundli-gold-accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.free-Kundli-card-description {
  color: var(--kundli-medium-text);
  font-size: 1.125rem;
}

.free-Kundli-card-content {
  padding: 2rem;
}

.free-Kundli-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .free-Kundli-form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.free-Kundli-form-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.free-Kundli-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.free-Kundli-form-label {
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--kundli-dark-text);
  letter-spacing: 0.05em;
}

.free-Kundli-label-icon {
  color: var(--kundli-primary);
  margin-right: 5px;
}



.free-Kundli-form-input,
.free-Kundli-form-select {
  width: 100%;
  height: 3rem;
  border: 2px solid var(--kundli-border-color);
  border-radius: var(--kundli-radius);
  padding: 0 1rem;
  font-size: 1rem;
  transition: var(--kundli-transition);
  background: var(--kundli-white);
  color: var(--kundli-dark-text);
}


.pac-container {
 
  z-index: 10000 !important;
  border-radius: var(--kundli-radius) !important;
  box-shadow: 0 10px 30px rgba(238, 90, 36, 0.15) !important;
  background: var(--kundli-white) !important;
  overflow: hidden !important;

}

.pac-item {
  padding: 0.4rem 0.8rem !important;
  border-bottom: 1px solid var(--kundli-border-color) !important;
  cursor: pointer !important;
  transition: var(--kundli-transition) !important;
  background: var(--kundli-white) !important;
  color: var(--kundli-dark-text) !important;
  font-size: 0.8rem !important;
 
}

.pac-item:last-child {
  border-bottom: none !important;
}

.pac-item:hover {
  background: linear-gradient(135deg, var(--kundli-light-orange), #fff5f5) !important;
  
}

.pac-item-selected {
  background: linear-gradient(135deg, var(--kundli-primary), var(--kundli-astro-indigo)) !important;
  color: var(--kundli-white) !important;
}

.pac-item-selected:hover {
  background: linear-gradient(135deg, var(--kundli-primary), var(--kundli-astro-indigo)) !important;
  transform: none !important;
}

.pac-matched {
  font-weight: 600 !important;
  color: var(--kundli-primary) !important;
}

.pac-item-selected .pac-matched {
  color: var(--kundli-white) !important;
  font-weight: 700 !important;
}

.pac-item-query {
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: var(--kundli-dark-text) !important;
  margin-bottom: 0.25rem !important;
}

.pac-item-selected .pac-item-query {
  color: var(--kundli-white) !important;
}

.pac-item-query .pac-matched {
  color: var(--kundli-primary) !important;
  font-weight: 700 !important;
}

.pac-item-selected .pac-item-query .pac-matched {
  color: var(--kundli-white) !important;
}

.pac-item-address {
  font-size: 0.875rem !important;
  color: var(--kundli-medium-text) !important;
  opacity: 0.8 !important;
}

.pac-item-selected .pac-item-address {
  color: rgba(255, 255, 255, 0.9) !important;
}

.pac-item-address .pac-matched {
  color: var(--kundli-primary) !important;
  font-weight: 600 !important;
}

.pac-item-selected .pac-item-address .pac-matched {
  color: var(--kundli-white) !important;
}

.pac-icon {
  margin-right: 0.75rem !important;
  color: var(--kundli-primary) !important;
  font-size: 1.1rem !important;
  display: none !important;
}

.pac-item-selected .pac-icon {
  color: var(--kundli-white) !important;
}

.pac-logo:after {
  content: "Powered by Google" !important;
  font-size: 0.75rem !important;
  color: var(--kundli-medium-text) !important;
  padding: 0.5rem 1rem !important;
  background: var(--kundli-muted) !important;
  border-top: 1px solid var(--kundli-border-color) !important;
  display: none !important;
  text-align: center !important;
  font-weight: 500 !important;
  
}

/* Loading state for autocomplete */


@keyframes pac-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Enhanced input styling when autocomplete is active */
.free-Kundli-form-input:focus + .pac-container {
  border-color: var(--kundli-primary) !important;
  box-shadow: 0 0 0 3px rgba(238, 90, 36, 0.1), 0 10px 30px rgba(238, 90, 36, 0.15) !important;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .pac-container {
  
    border-radius: 0.75rem !important;
  }
  
  .pac-item {
    padding: 0.5rem 0.8rem !important;
    font-size: 0.85rem !important;
   
  }
 
  
  .pac-item-query {
    font-size: 0.85rem !important;
  }
  
  .pac-item-address {
    font-size: 0.85rem !important;
  }
}

.free-Kundli-form-input:focus,
.free-Kundli-form-select:focus {
  outline: none;
  border-color: var(--kundli-primary);
  box-shadow: 0 0 0 3px rgba(238, 90, 36, 0.1);
}

.free-Kundli-form-input::placeholder {
  color: var(--kundli-medium-text);
}

.free-Kundli-form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  
}

.free-Kundli-form-select option {
  background: var(--kundli-white);
  color: var(--kundli-dark-text);
  padding: 0.5rem;
}

.free-Kundli-generate-btn {
  background: var(--kundli-gradient);
  color: var(--kundli-white);
  font-weight: bold;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.125rem;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(238, 90, 36, 0.3);
  transition: var(--kundli-transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 2.5rem auto 0;
  position: relative;
  overflow: hidden;
}

.free-Kundli-generate-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.free-Kundli-generate-btn:hover::before {
  left: 100%;
}

.free-Kundli-generate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(238, 90, 36, 0.4);
}

.free-Kundli-btn-icon {
  width: 1.5rem;
  height: 1.5rem;
  animation: free-Kundli-pulse 2s infinite;
}

.free-Kundli-info-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .free-Kundli-info-cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
 
}

.free-Kundli-info-card {
  padding: 1rem;
  border-radius: var(--kundli-radius);
  text-align: center;
  border: 1px solid var(--kundli-border-color);
  background: var(--kundli-white);
  transition: var(--kundli-transition);
}

.free-Kundli-info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(238, 90, 36, 0.1);
}

.free-Kundli-info-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  color: var(--kundli-white);
  font-size: 1rem;
  font-weight: bold;
  background: var(--kundli-gradient);
}

.free-Kundli-info-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--kundli-dark-text);
}

.free-Kundli-footer {
  text-align: center;
  margin-top: 3rem;
  color: var(--kundli-medium-text);
}

.free-Kundli-footer-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.free-Kundli-footer-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--kundli-primary);
}

.free-Kundli-footer-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--kundli-dark-text);
}

.free-Kundli-footer-small {
  font-size: 0.875rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
   .free-data-chart-container{
    flex-direction: column;
    gap: 1.5rem;
}
  .free-Kundli-main-title {
    font-size: 2rem;
  }
  .free-Kundli-card-content {
    padding: 1rem;
  }
  .free-Kundli-card-header {
    padding: 1.5rem 1rem;
  }
  .free-Kundli-generate-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
  .free-Kundli-header-icons {
    gap: 1rem;
  }
  .free-Kundli-floating-element {
    display: none;
  }
}

.container-widget {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* Optional responsive max-widths */
@media (min-width: 576px) {
  .container-widget {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container-widget {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container-widget {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container-widget {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container-widget {
    max-width: 1320px;
  }
}

/* generate */
.free-data-heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--kundli-primary);
  border-left: 4px solid var(--kundli-primary);
  padding-left: 1rem;
}

.free-data-table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: var(--kundli-border-radius);
  box-shadow: var(--kundli-shadow);
  width: 100%;
  background: var(--kundli-surface);
  margin-bottom: 2rem;
}

.free-data-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--kundli-border-color);
  font-size: 0.95rem;
  background-color: var(--kundli-white);
  border-radius: var(--kundli-border-radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.free-data-table th,
.free-data-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid var(--kundli-border-color);
}

.free-data-table td {
  max-width: 300px;

}
.free-bold{
  font-weight: bold;
}

.free-data-table th {
  background: var(--kundli-primary);
  color: var(--kundli-white);
  font-weight: 600;
  text-transform: capitalize;
}

.free-data-table tbody tr:nth-child(odd) {
  background: var(--kundli-front-section);
}

.free-data-section {
  margin-bottom: 3rem;

}


.free-data-section {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* Optional responsive max-widths */
@media (min-width: 576px) {
  .free-data-section {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .free-data-section {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .free-data-section {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .free-data-section {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .free-data-section {
    max-width: 1320px;
  }
}

 .chart-name {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            color: #333;
        }

.free-data-chart-container{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid var(--kundli-border-color);
  border-radius: var(--kundli-radius);
  background-color: var(--kundli-white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.free-data-chart svg {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .free-data-table th,
  .free-data-table td {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
  .free-data-table2 th,
  .free-data-table2 td {
    white-space: nowrap;
  }
  .free-data-heading {
    font-size: 1.5rem;
  }

}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(255, 255, 255, 0.8);
  background:white;
  //  background: linear-gradient(
  //   135deg,
  //   var(--kundli-light-orange) 0%,
  //   #fff5f5 50%,
  //   #fef7ed 100%
  // );
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-overlay .spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #ff5e5e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* From Uiverse.io by Donewenfu */
.loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.jimu-primary-loading:before,
.jimu-primary-loading:after {
  position: absolute;
  top: 0;
  content: '';
}

.jimu-primary-loading:before {
  left: -19.992px;
}

.jimu-primary-loading:after {
  left: 19.992px;
  -webkit-animation-delay: 0.32s !important;
  animation-delay: 0.32s !important;
}

.jimu-primary-loading:before,
.jimu-primary-loading:after,
.jimu-primary-loading {
  background: var(--kundli-primary);
  -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  animation: loading-keys-app-loading 0.8s infinite ease-in-out;
  width: 13.6px;
  height: 32px;
}

.jimu-primary-loading {
  text-indent: -9999em;
  margin: auto;
  position: absolute;
  right: calc(50% - 6.8px);
  top: calc(50% - 16px);
  -webkit-animation-delay: 0.16s !important;
  animation-delay: 0.16s !important;
}

@-webkit-keyframes loading-keys-app-loading {
  0%,
  80%,
  100% {
    opacity: .75;
    box-shadow: 0 0 var(--kundli-primary);
    height: 32px;
  }
  40% {
    opacity: 1;
    box-shadow: 0 -8px var(--kundli-primary);
    height: 40px;
  }
}

@keyframes loading-keys-app-loading {
  0%,
  80%,
  100% {
    opacity: .75;
    box-shadow: 0 0 var(--kundli-primary);
    height: 32px;
  }
  40% {
    opacity: 1;
    box-shadow: 0 -8px var(--kundli-primary);
    height: 40px;
  }
}

.free-page-heading-wrap {
  text-align: center;
  margin: 0 0 1.75rem 0;
}
.free-page-heading {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--kundli-primary), var(--kundli-astro-indigo));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.5px;
}
.free-page-heading-accent {
  width: 90px;
  height: 6px;
  margin: 12px auto 0;
  border-radius: 999px;
  background: var(--kundli-gradient);
  box-shadow: 0 6px 16px rgba(238, 90, 36, 0.35);
}
.free-page-subtitle {
  margin-top: 10px;
  font-size: 1rem;
  color: var(--kundli-medium-text);
}
@media (max-width: 768px) {
  .free-page-heading { font-size: 1.9rem; }
  .free-page-subtitle { font-size: 0.95rem; }
}

/* Toast styles (deep- prefix) */
.deep-toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.deep-toast {
  min-width: 260px;
  max-width: 360px;
  padding: 12px 14px;
  border-radius: var(--kundli-radius);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  color: var(--kundli-white);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.98;
  transform: translateY(0);
  transition: opacity .25s ease, transform .25s ease;
}
.deep-toast--error { background: linear-gradient(135deg, #ef4444, #b91c1c); }
.deep-toast--success { background: linear-gradient(135deg, #22c55e, #16a34a); }
.deep-toast--info { background: linear-gradient(135deg, var(--kundli-primary), var(--kundli-astro-indigo)); }
.deep-toast__close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
}
@media (max-width: 480px) {
  .deep-toast-container { left: 12px; right: 12px; }
  .deep-toast { width: 100%; min-width: unset; max-width: unset; }
}

`;
  document.head.appendChild(style);

  // STEP 4: Add External Styles (Font Awesome)
  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(fontAwesome);

  // STEP 5: Load Google API
  const script = document.createElement("script");
  script.src =
    `https://maps.googleapis.com/maps/api/js?key=${container.dataset.googleMapsApiKey}&libraries=places&callback=initAutocomplete`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  // Define initAutocomplete as a global function BEFORE loading the Google Maps script
  window.initAutocomplete = function () {
    const input = document.getElementById("placeOfBirth");
    if (input && google && google.maps && google.maps.places) {
      let debounceTimer;
      let isRequestInProgress = false;

      const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["(cities)"],
      });

      // Add debounced input listener to prevent multiple API calls while typing
      input.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          // This will trigger the autocomplete suggestions after 3 seconds of no typing
          if (input.value.length > 2) {
            autocomplete.set("query", input.value);
          }
        }, 3000); // 3 second wait time
      });

      autocomplete.addListener("place_changed", () => {
        // Prevent multiple simultaneous requests
        if (isRequestInProgress) {
          return;
        }

        const place = autocomplete.getPlace();
        if (place.geometry) {
          isRequestInProgress = true;

          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();

          // Save in hidden inputs for API request
          document.getElementById("latitude").value = lat;
          document.getElementById("longitude").value = lng;

          // Get timezone from Google API - only one request when place is selected
          fetch(
            `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(
              Date.now() / 1000
            )}&key=${container.dataset.googleMapsApiKey}`
          )
            .then((res) => res.json())
            .then((data) => {
              document.getElementById("timezone").value = data.rawOffset / 3600;
            })
            .catch((error) => {
              console.error("Error fetching timezone:", error);
            })
            .finally(() => {
              isRequestInProgress = false;
            });
        }
      });
    }
  };

  // Handle Form Submission
  document
    .getElementById("divineForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      // Show loader
      document.getElementById("loader").style.display = "block";

      // Hide form container
      document.getElementById("kundliFormContainer").style.display = "none";

      const dateOfBirth = document.getElementById("dateOfBirth").value; // yyyy-mm-dd
      const timeOfBirth = document.getElementById("timeOfBirth").value; // hh:mm
      const style = document.getElementById("style").value;
      const language = document.getElementById("language").value;
      const latitude = document.getElementById("latitude").value;
      const longitude = document.getElementById("longitude").value;
      const tz = document.getElementById("timezone").value;
      

      // Convert date yyyy-mm-dd → dd/mm/yyyy for chart API
      const [yyyy, mm, dd] = dateOfBirth.split("-");
      const formattedDate = `${dd}/${mm}/${yyyy}`;

      // Convert date yyyy-mm-dd → yyyy/mm/dd for planet details and sade sati APIs
      const planetDetailsDate = `${yyyy}/${mm}/${dd}`;

      // API KEY
      const containerEl = document.getElementById("kundliWidgetContainer");
      const apiKey =
        containerEl && containerEl.dataset && containerEl.dataset.apiKey
          ? containerEl.dataset.apiKey
          : "";

      // Generate both D1 and D9 chart URLs
      const d1ChartApiUrl = `https://api.jyotishamastroapi.com/api/chart_image/d1?date=${formattedDate}&time=${timeOfBirth}&latitude=${latitude}&longitude=${longitude}&tz=${tz}&style=${style}&lang=${language}&colored_planets=true&color=%23ee5a24`;
      const d9ChartApiUrl = `https://api.jyotishamastroapi.com/api/chart_image/d9?date=${formattedDate}&time=${timeOfBirth}&latitude=${latitude}&longitude=${longitude}&tz=${tz}&style=${style}&lang=${language}&colored_planets=true&color=%23ee5a24`;

      // Planet Details API URL
      const planetDetailsApiUrl = `https://api.jyotishamastroapi.com/api/horoscope/planet-details?date=${planetDetailsDate}&time=${timeOfBirth}&latitude=${latitude}&longitude=${longitude}&tz=${tz}&lang=${language}`;

      // Sade Sati API URL
      const sadeSatiApiUrl = `https://api.jyotishamastroapi.com/api/extended_horoscope/current_sadesati?date=${planetDetailsDate}&time=${timeOfBirth}&latitude=${latitude}&longitude=${longitude}&tz=${tz}&lang=${language}`;

      // Mahadasha API URL
      const mahadashaApiUrl = `https://api.jyotishamastroapi.com/api/dasha/mahadasha?date=${formattedDate}&time=${timeOfBirth}&latitude=${latitude}&longitude=${longitude}&tz=${tz}&lang=${language}`;

      try {
        // Fetch all APIs in parallel
        const [
          d1ChartResponse,
          d9ChartResponse,
          planetDetailsResponse,
          sadeSatiResponse,
          mahadashaResponse,
        ] = await Promise.all([
          fetch(d1ChartApiUrl, {
            method: "GET",
            headers: { key: apiKey },
          }),
          fetch(d9ChartApiUrl, {
            method: "GET",
            headers: { key: apiKey },
          }),
          fetch(planetDetailsApiUrl, {
            method: "GET",
            headers: { key: apiKey },
          }),
          fetch(sadeSatiApiUrl, {
            method: "GET",
            headers: { key: apiKey },
          }),
          fetch(mahadashaApiUrl, {
            method: "GET",
            headers: { key: apiKey },
          }),
        ]);

        // Validate HTTP status for each response before parsing
        const namedResponses = [
          { res: d1ChartResponse, name: "D1 Chart" },
          { res: d9ChartResponse, name: "D9 Chart" },
          { res: planetDetailsResponse, name: "Planet Details" },
          { res: sadeSatiResponse, name: "Sade Sati" },
          { res: mahadashaResponse, name: "Mahadasha" },
        ];
        for (const { res, name } of namedResponses) {
          if (!res.ok) {
            let msg = `${name} request failed (${res.status})`;
            try {
              const body = await res.clone().json();
              msg = body.message || body.error || msg;
            } catch (_) {}
            if (res.status === 401) msg = "Invalid API key";
            if (res.status === 429) msg = "API call limit exceeded";
            if (res.status === 401) msg = "API key is required";
            throw new Error(msg);
          }
        }

        const d1ChartData = await d1ChartResponse.json();
        const d9ChartData = await d9ChartResponse.json();
        const planetDetailsData = await planetDetailsResponse.json();
        const sadeSatiData = await sadeSatiResponse.json();
        const mahadashaData = await mahadashaResponse.json();

        // Display both charts
        document.getElementById("kundliResult").innerHTML = `
  <div class="free-data-section">
   <div class="free-page-heading-wrap">
     <h2 class="free-page-heading" style="margin-top:0">Your Kundli Report</h2>
     <div class="free-page-heading-accent"></div>
     <div class="free-page-subtitle">Personalized astrology insights</div>
   </div>
 </div>
 <div class="free-data-section">
   <h3 class="free-data-heading">Charts</h3>
   <div class="free-data-chart-container">
    <div class="free-data-chart">
      ${d1ChartData}
      <div class="chart-name">D1 Chart (Birth Chart)</div>
    </div>
    <div class="free-data-chart">
      ${d9ChartData}
      <div class="chart-name">D9 Chart (Navamsha Chart)</div>
    </div>
   </div>
 
   
 </div>
 
`;

        // Display planet details
        displayPlanetDetails(planetDetailsData);

        // Display panchang information (in the middle)
        displayPanchang(planetDetailsData);

        // Display sade sati information
        displaySadeSati(sadeSatiData);

        // Display mahadasha information
        displayMahadasha(mahadashaData);
        document.getElementById("loader").style.display = "none";
      } catch (error) {
        document.getElementById("loader").style.display = "none";
        document.getElementById("kundliFormContainer").style.display = "block";
        console.error("Error fetching data:", error);
        showDeepToast(
          error && error.message
            ? error.message
            : "Error fetching kundli data. Please try again.",
          "error"
        );
      }
    });

  // Function to display planet details
  function displayPlanetDetails(data) {
    if (data.status === 200 && data.response) {
      const response = data.response;

      let planetDetailsContainer = document.getElementById("planetDetails");
      if (!planetDetailsContainer) {
        planetDetailsContainer = document.createElement("div");
        planetDetailsContainer.id = "planetDetails";
        document
          .getElementById("kundliResult")
          .appendChild(planetDetailsContainer);
      }

      let planetDetailsHTML = `
      <div class="free-data-section">
        <h3 class="free-data-heading">Planet Details</h3>

        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <thead>
              <tr>
                <th>Planets</th>
                <th>Sign</th>
                <th>Sign Lord</th>
                <th>Nakshatra</th>
                <th>Nakshatra Lord</th>
                <th>Nakshatra Pad</th>
                <th>House</th>
                <th>Planet Awastha</th>
              </tr>
            </thead>
            <tbody>
    `;

      for (let i = 0; i <= 9; i++) {
        if (response[i]) {
          const planet = response[i];
          planetDetailsHTML += `
              <tr>
                <td class="free-bold">${planet.full_name}</td>
                <td>${planet.zodiac}</td>
                <td>${planet.zodiac_lord}</td>
                <td>${planet.nakshatra}</td>
                <td>${planet.nakshatra_lord}</td>
                <td>${planet.nakshatra_pada}</td>
                <td>${planet.house}</td>
                <td>${planet.basic_avastha}</td>
              </tr>
        `;
        }
      }

      planetDetailsHTML += `
            </tbody>
          </table>
        </div>

        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <tbody>
             <tr><td class="free-bold">Birth Dasa</td><td>${
               response.birth_dasa
             }</td></tr>
              <tr><td class="free-bold">Current Dasa</td><td>${
                response.current_dasa
              }</td></tr>
              <tr><td class="free-bold">Birth Dasa Time</td><td>${
                response.birth_dasa_time
              }</td></tr>
              <tr><td class="free-bold">Current Dasa Time</td><td>${
                response.current_dasa_time
              }</td></tr>
              <tr>
                <td class="free-bold">Lucky Gem</td>
                <td>${
                  response.lucky_gem ? response.lucky_gem.join(", ") : "N/A"
                }</td>
              </tr>
              <tr>
                <td class="free-bold">Lucky Num</td>
                <td>${
                  response.lucky_num ? response.lucky_num.join(", ") : "N/A"
                }</td>
              </tr>
              <tr>
                <td class="free-bold">Lucky Colors</td>
                <td>${
                  response.lucky_colors
                    ? response.lucky_colors.join(", ")
                    : "N/A"
                }</td>
              </tr>
              <tr>
                <td class="free-bold">Lucky Letters</td>
                <td>${
                  response.lucky_letters
                    ? response.lucky_letters.join(", ")
                    : "N/A"
                }</td>
              </tr>
              <tr>
                <td class="free-bold">Lucky Name Start</td>
                <td>${
                  response.lucky_name_start
                    ? response.lucky_name_start.join(", ")
                    : "N/A"
                }</td>
              </tr>
              <tr><td class="free-bold">Rasi</td><td>${response.rasi}</td></tr>
              <tr><td class="free-bold">Nakshatra</td><td>${
                response.nakshatra
              }</td></tr>
              <tr><td class="free-bold">Nakshatra Pada</td><td>${
                response.nakshatra_pada
              }</td></tr>
                <tr><td class="free-bold">Ghatka Chakra</td><td>
                Rasi : ${
                  response.ghatka_chakra ? response.ghatka_chakra.rasi : "N/A"
                }
                <br>
                Tithi: ${
                  response.ghatka_chakra
                    ? response.ghatka_chakra.tithi.join(", ")
                    : "N/A"
                }
                <br>
                Day: ${
                  response.ghatka_chakra ? response.ghatka_chakra.day : "N/A"
                }
                <br>
                Nakshatra: ${
                  response.ghatka_chakra
                    ? response.ghatka_chakra.nakshatra
                    : "N/A"
                }
                <br>
                Tatva: ${
                  response.ghatka_chakra ? response.ghatka_chakra.tatva : "N/A"
                }
                <br>
                Lord: ${
                  response.ghatka_chakra ? response.ghatka_chakra.lord : "N/A"
                }
                <br>
                Same Sex Lagna: ${
                  response.ghatka_chakra
                    ? response.ghatka_chakra.same_sex_lagna
                    : "N/A"
                }
                <br>
                Opposite Sex Lagna: ${
                  response.ghatka_chakra
                    ? response.ghatka_chakra.opposite_sex_lagna
                    : "N/A"
                }


                </td></tr>
            </tbody>
          </table>
        </div>

   

      

    
    `;

      planetDetailsContainer.innerHTML = planetDetailsHTML;
    }
  }

  // Function to display Sade Sati information
  function displaySadeSati(data) {
    if (data.status === 200 && data.response) {
      const response = data.response;

      let sadeSatiContainer = document.getElementById("sadeSatiDetails");
      if (!sadeSatiContainer) {
        sadeSatiContainer = document.createElement("div");
        sadeSatiContainer.id = "sadeSatiDetails";
        document.getElementById("kundliResult").appendChild(sadeSatiContainer);
      }

      let sadeSatiHTML = `
      <div class="free-data-section">
        <h3 class="free-data-heading">Current Sade Sati</h3>

        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <tbody>
              <tr><td class="free-bold">Date Considered</td><td>${
                response.date_considered
              }</td></tr>
              <tr><td class="free-bold">Is Sade Sati Period</td><td>${
                response.is_sade_sati_period ? "Yes" : "No"
              }</td></tr>
              <tr><td class="free-bold">Shani Period Type</td><td>${
                response.shani_period_type
              }</td></tr>
              <tr><td class="free-bold">Saturn Retrograde</td><td>${
                response.saturn_retrograde ? "Yes" : "No"
              }</td></tr>
              <tr><td class="free-bold">Age</td><td>${
                response.age
              } years</td></tr>
              <tr><td class="free-bold">Description</td><td>${
                response.description
              }</td></tr>
              <tr><td class="free-bold">Bot Response</td><td>${
                response.bot_response
              }</td></tr>
            </tbody>
          </table>
        </div>
    `;

      if (response.remedies && response.remedies.length > 0) {
        sadeSatiHTML += `
        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <thead><tr><th>Remedies</th></tr></thead>
            <tbody>
              ${response.remedies.map((r) => `<tr><td>${r}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      `;
      }

      sadeSatiHTML += `</div>`;
      sadeSatiContainer.innerHTML = sadeSatiHTML;
    }
  }

  // Function to display Mahadasha information
  function displayMahadasha(data) {
    if (data.status === 200 && data.response) {
      const response = data.response;

      let mahadashaContainer = document.getElementById("mahadashaDetails");
      if (!mahadashaContainer) {
        mahadashaContainer = document.createElement("div");
        mahadashaContainer.id = "mahadashaDetails";
        document.getElementById("kundliResult").appendChild(mahadashaContainer);
      }

      let mahadashaHTML = `
      <div class="free-data-section">
        <h3 class="free-data-heading">Mahadasha</h3>

        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <tbody>
              <tr><td class="free-bold">Start Year</td><td>${response.start_year}</td></tr>
              <tr><td class="free-bold">Dasha Start Date</td><td>${response.dasha_start_date}</td></tr>
              <tr><td class="free-bold">Dasha Remaining at Birth</td><td>${response.dasha_remaining_at_birth}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <thead>
              <tr>
                <th>Planet</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
    `;

      if (response.mahadasha && response.mahadasha_order) {
        response.mahadasha.forEach((planet, index) => {
          const startDate = response.mahadasha_order[index] || "N/A";
          const isCurrent = index === 0;
          mahadashaHTML += `
              <tr${isCurrent ? ' style="font-weight:bold;"' : ""}>
                <td>${planet}${isCurrent ? " (Current)" : ""}</td>
                <td>${startDate}</td>
              </tr>
        `;
        });
      }

      mahadashaHTML += `
            </tbody>
          </table>
        </div>
      </div>
    `;

      mahadashaContainer.innerHTML = mahadashaHTML;
    }
  }

  // Add this as a separate function after displayMahadasha
  function displayPanchang(data) {
    if (data.status === 200 && data.response && data.response.panchang) {
      const response = data.response;

      let panchangContainer = document.getElementById("panchangDetails");
      if (!panchangContainer) {
        panchangContainer = document.createElement("div");
        panchangContainer.id = "panchangDetails";
        document.getElementById("kundliResult").appendChild(panchangContainer);
      }

      let panchangHTML = `
      <div class="free-data-section">
        <h3 class="free-data-heading">Panchang</h3>
        
        <div class="free-data-table-responsive">
          <table class="free-data-table">
            <thead>
              <tr>
                <th>Aayanamsa</th>
                <th>Karana</th>
                <th>Yoga</th>
                <th>Day Of Birth</th>
                <th>Day Lord</th>
                <th>Hora Lord</th>
                <th>Sunrise</th>
                <th>Sunset</th>
                <th>Tithi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${response.panchang.ayanamsa}</td>
                <td>${response.panchang.karana}</td>
                <td>${response.panchang.yoga}</td>
                <td>${response.panchang.day_of_birth}</td>
                <td>${response.panchang.day_lord}</td>
                <td>${response.panchang.hora_lord}</td>
                <td>${response.panchang.sunrise_at_birth}</td>
                <td>${response.panchang.sunset_at_birth}</td>
                <td>${response.panchang.tithi}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

      panchangContainer.innerHTML = panchangHTML;
    }
  }

  // Toast helpers
  function ensureDeepToastContainer() {
    let c = document.querySelector(".deep-toast-container");
    if (!c) {
      c = document.createElement("div");
      c.className = "deep-toast-container";
      document.body.appendChild(c);
    }
    return c;
  }

  function showDeepToast(message, type = "info", timeoutMs = 4000) {
    const container = ensureDeepToastContainer();
    const toast = document.createElement("div");
    toast.className = `deep-toast deep-toast--${type}`;
    toast.innerHTML = `<span>${message}</span>`;

    const close = document.createElement("button");
    close.className = "deep-toast__close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";
    close.onclick = () => removeToast();
    toast.appendChild(close);

    container.appendChild(toast);

    let removeTimer = setTimeout(removeToast, timeoutMs);

    function removeToast() {
      if (!toast) return;
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-6px)";
      clearTimeout(removeTimer);
      setTimeout(() => {
        if (toast && toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }

    return removeToast;
  }
})();
