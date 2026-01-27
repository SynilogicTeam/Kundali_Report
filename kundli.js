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
  // const style = document.createElement("style");
  // style.innerHTML = `...`;
  // document.head.appendChild(style);

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
