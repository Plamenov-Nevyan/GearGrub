import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const catalogTemplate = () => html`
<section class="catalog-section">
<h1>GearGrub's catalog</h1>
<article class="sidebar">
    <div class="sidebar-top">
        <h3>Categories</h3>
        <input type="text" name="searchCategory" id="searchCategory" placeholder="Search for a specific category..."/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
    <div class="sidebar-middle">
        <ul>
            <li>Engine</li>
            <li>Exhaust System</li>
            <li>Filters</li>
            <li>Brake System</li>
            <li>Cooling System</li>
            <li>Electrics</li>
            <li>Heater</li>
            <li>Lighting</li>
            <li>Body</li>
            <li>Suspension and Steering</li>
            <li>Fuel System</li>
            <li>Transmission and Gearing</li> 
        </ul>
    </div>
    <div class="line-divider">

    </div>
    <div class="sidebar-bottom">
        <ul>
            <li>Oils and Fluids</li>
            <li>Accessories and Equipment</li>
            <li>Tools</li>
            <li>Car Detailing</li>
        </ul>
    </div>
</article>
<article class="items-container">
    <div class="card">
        <img src="static/4_engine.webp" />
        <h5>Engine</h5>
    </div>
    <div class="card">
        <img src="static/198_exhaust_system.webp" />
        <h5>Exhaust</h5>
    </div>
    <div class="card">
        <img src="static/241_filters.webp" />
        <h5>Filters</h5>
    </div>
    <div class="card">
        <img src="static/252_brake_system.webp" />
        <h5>Brake System</h5>
    </div>
    <div class="card">
        <img src="static/296_cooling_system.webp" />
        <h5>Cooling System</h5>
    </div>
    <div class="card">
        <img src="static/323_electrics.webp" />
        <h5>Electrics</h5>
    </div>   
     <div class="card">
        <img src="static/414_heater.webp" />
        <h5>Heater</h5>
    </div>
    <div class="card">
        <img src="static/895_lighting.jpg" />
        <h5>Lighting</h5>
    </div>
</article>
</section>
`