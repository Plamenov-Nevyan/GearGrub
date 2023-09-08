import { html, nothing } from "../node_modules/lit-html/lit-html.js"


export const createTemplate = () => html`
<section class="create-section">
<div class="heading-container">
    <h1>Create a new product offer.</h1>
</div>
<form>
        <fieldset class="input-field">
            <input class="create-data-input" type="text" id="name" name="name"/>
            <label for="name"> Product Name :</label>
            <span class="error-message" id="name-error"></span>
        </fieldset>
        <fieldset class="input-field" id="description-field">
            <textarea class="create-data-input" id="description" name="description">

            </textarea>
            <label for="description">Description :</label>
            <span class="error-message" id="description-error"></span>
        </fieldset>
        <fieldset class="input-field">
            <input class="create-data-input" type="text" id="price" name="price"/>
            <label for="price">Price :</label>
            <span class="error-message" id="price-error"></span>
        </fieldset>
        <fieldset class="input-field">
            <input class="create-data-input" type="number" id="quantityAvailable" name="quantityAvailable"/>
            <label for="quantityAvailable"> Quantity Available : </label>
            <span class="error-message" id="quantityAvailable-error"></span>
        </fieldset>
        <fieldset class="input-field">
            <input class="create-data-input" type="text" id="image" name="image"/>
            <label for="image">Image URL (must start with http/https):</label>
            <span class="error-message" id="image-error"></span>
        </fieldset>
        <fieldset class="select-field">
            <label for="category">Product Category:</label>
            <select class="create-data-input" id="category" name="category">
                <option class="category-option" value="carParts" selected>Car Parts</option>
                <option class="category-option" value="oilsAndFluids">Oils and Fluids</option>
                <option class="category-option" value="accessories">Accessories and Equipment</option>
                <option class="category-option" value="tools">Tools</option>
                <option class="category-option" value="detailing">Car Detailing</option>
                <option class="category-option" value="other">Other</option>
            </select>
            <div class="other-input" id="category-other-input">
                <input class="create-data-input" type="text" id="category" name="category"/>
                <label for="category">Specify the product category:</label>
                <span class="error-message" id="category-error"></span>
            </div>
        </fieldset>
        <fieldset class="select-field">
            <label for="subcategory">Product Sub-category</label>
            <select class="create-data-input" id="subcategory" name="subcategory">
 
            </select>
            <div class="other-input" id="subcategory-other-input">
                <input class="create-data-input" type="text" id="subcategory" name="subcategory"/>
                <label for="subcategory">Specify the product sub-category:</label>
                <span class="error-message" id="subcategory-error"></span>
            </div>
        </fieldset>
        <fieldset class="select-field">
            <label for="forCar">For which car brand is this product:</label>
            <select class="create-data-input" id="forCar" name="forCar">
                <option id="forCar-option" value="bmw">BMW</option>
                <option id="forCar-option" value="mercedes">Mercedes</option>
                <option id="forCar-option" value="audi">Audi</option>
                <option id="forCar-option" value="peugeot">Peugeot</option>
                <option id="forCar-option" value="nissan">Nissan</option>
                <option id="forCar-option" value="opel">Opel</option>
                <option id="forCar-option" value="volkswagenGolf">Volkswagen Golf</option>
                <option id="forCar-option" value="volkswagenPassat">Volkswagen Passat</option>
                <option id="forCar-option" value="renault">Renault</option>
                <option id="forCar-option" value="citroen">Citroen</option>
                <option id="forCar-option" value="dodge">Dodge</option>
                <option id="forCar-option" value="other">Other</option>
            </select>
            <div class="other-input" id="forCar-other-input">
                <input class="create-data-input" type="text" id="forCar" name="forCar"/>
                <label for="forCar">Specify for which car brand is this product:</label>
                <span class="error-message" id="forCar-error"></span>
            </div>
        </fieldset>
</form>
</section>
`