import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const homeTemplate = () => html`
<section class="home-section">
<article class="advert-1">
    <!-- <img src="../static/advert1.avif"/> -->
    <h2>Select your vehicle and find everything you need!</h2>
    <form class="search-for-your-vehicle">
        <select class="forCar-select" id="forCar" name="forCar">
            <option id="forCar-option" value="bmw" selected>BMW</option>
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
        <div class = "forCar-input">
            <label>Please specify your vehicle brand:</label>
            <input id="forCar" name="forCar" class="forCar-field" />
            <span class="error"></span>
        </div>
        <select class="part-select" id="part" name="part">
            <option value="carParts">Car parts</option>
            <option value="oilsAndFluids">Oils and fluids</option>
            <option value="accessories">Accessories</option>
            <option value="tools">Tools</option>
            <option value="detailing">Car Detailing</option>
            <option value="other">Other</option>
        </select>
        <button id="search-for-your-car">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
    </form>
</article>
<article class="select-category-menu">
    <div class="category-container">
        <img src="../static/car_parts.webp" alt="car part" />
        <h4>Car Parts</h4>
    </div>
    <div class="category-container">
        <img src="../static/oils_and_fluids.webp" alt="car oil" />
        <h4>Oils and Fluids</h4>
    </div>
    <div class="category-container">
        <img src="../static/accessories.webp" alt="accessory" />
        <h4>Accessories</h4>
    </div>
    <div class="category-container">
        <img src="../static/tools.webp" alt="vehicle tool" />
        <h4>Tools</h4>
    </div>
    <div class="category-container">
        <img src="../static/detailing.webp" alt="car detailing tools" />
        <h4>Car Detailing</h4>
    </div>
</article>
<div class="carousel">

  <div class="slide">
    <li> 
        <img src='https://images.unsplash.com/photo-1611633235555-45e252fe48c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/500x500' alt='car tires' />
        Experts selling to experts. 
    </li>
  </div>

  <div class="slide">
    <li> 
        <img src='https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/500x500' alt='car under the hood'/>
        We know you value quality. 
    </li>
  </div>

  <div class="slide">
        <li> 
            <img src='https://plus.unsplash.com/premium_photo-1661964291917-b20c2648fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60/500x500' alt='a wrench over car hood'/>
            And we will give you that.
        </li>
  </div>

  <div class="slide">
    <li> 
        <img src='https://images.unsplash.com/photo-1570762574105-907bd9e42571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60/500x500' alt='car engine' />
        No matter what you look for.
    </li>
  </div>

  <div class="slide">
    <li> 
        <img src='https://images.unsplash.com/photo-1595787142842-7404bc60470d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhciUyMHBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60/500x500' alt='BMW engine' /> 
        In any shape.
    </li>
  </div>

  <div class="slide">
    <li>
        <img src='https://images.unsplash.com/photo-1633281256183-c0f106f70d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNhciUyMHBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60/500x500' alt='a gear'/>
        In any quantity.
     </li>
  </div>

  <div class="slide">
    <li> 
        <img src='https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lY2hhbmljJTIwdGh1bWJzJTIwdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/500x500' alt='mechanic changing oil'/>
        We will always.
    </li>
  </div>

  <div class="slide">
    <li>
        <img src='https://images.unsplash.com/photo-1687462970787-61d953508926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lY2hhbmljJTIwdGh1bWJzJTIwdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/500x500' alt='smiling female mechanic'/>
        Got you covered !
    </li>
  </div>
</div>
</article>
</section>
`