import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const catalogTemplate = (vehicle) => html`
<section class="catalog-section">
<h1>GearGrub's catalog
    ${ vehicle
        ? html`<span>Showing results for ${vehicle}</span>`
        :nothing
    }
</h1>
${ vehicle
    ? html `<button id="clear-vehicle-selection">Clear Vehicle Selection</button>`
    : nothing
}
<article class="sidebar">
    <div class="sidebar-top">
        <h3>Categories</h3>
        <input type="text" name="searchCategory" id="searchCategory" placeholder="Search for a specific category..."/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
    <div class="sidebar-middle">
        <ul class="subcategories-list">
        </ul>
    </div>
    <div class="line-divider">

    </div>
    <div class="sidebar-bottom">
        <ul>
            <li class="category-li" id="carParts">Car Parts</li>
            <li class="category-li" id="oilsAndFluids">Oils and Fluids</li>
            <li class="category-li" id="accessories">Accessories and Equipment</li>
            <li class="category-li" id="tools">Tools</li>
            <li class="category-li" id="detailing">Car Detailing</li>
            <li class="category-li" id="other">Other</li>
        </ul>
    </div>
</article>
<article class="items-container">
    <h1 class="select-message">Select a category on the lefthand menu to see products.</h1>
</article>
</section>
`

