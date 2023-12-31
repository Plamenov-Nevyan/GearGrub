import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const navTemplateGuest = () => html`
    <div class="logo-container">
        <img src="static/logo.png" alt="logo"/>
    </div>
    <nav>
        <ul>
            <li>
            <a href="/" id="home-link"> Home </a>
            </li>
            <li>
               <a href="/catalog" id="catalog-link">Catalog</a>
            </li>
            <li>
            <a href="/login" id="login-link">Login</a>
            </li>
            <li>
            <a href="/register" id="register-link">Register<a>
            </li>
        </ul>
    </nav>
`

export const navTemplateUser = (cartCount) => html`
<div class="logo-container">
<img src="static/logo.png" alt="logo"/>
</div>
<nav>
<ul>
    <li>
    <a href="/" id="home-link"> Home </a>
    </li>
    <li>
    <a href="/catalog" id="catalog-link">Catalog</a>
    </li>
    <li>
    <a href="/shopping-cart" id="shpping-cart-link">
        Shopping Cart
        ${cartCount > 0
            ? html `<span>(${cartCount})</span>`
            : nothing  
          }
     </a>
    </li>
    <li>
    <a href="/logout" id="logout-btn">Logout<a>
    </li>
</ul>
</nav>
`

export const navTemplateMod = (userRole,cartCount) => html`
<div class="logo-container">
<img src="static/logo.png" alt="logo"/>
</div>
<nav>
<ul>
    <li>
       <a href="/" id="home-link"> Home </a>
    </li>
    <li>
       <a href="/catalog" id="catalog-link">Catalog</a>
    </li>
    <li>
    <a href="/adm-dashboard" id="dashboard-link">Admin Dashboard</a>
    </li>
    ${userRole === 'owner' || userRole === 'admin'
        ? addMakeProductOfferLink()
        : userRole === 'moderator' 
         ? html `
                <li>
                    <a href="/shopping-cart" id="shopping-cart-link">
                        Shopping Cart
                        ${cartCount > 0
                          ? html `<span>(${cartCount})</span>`
                          : nothing  
                        }
                    </a>
                </li>
                `
         : nothing
    }
    <li>
    <a href="/logout" id="logout-btn">Logout<a>
    </li>
</ul>
</nav>
`

function addMakeProductOfferLink(){
    return html`
    <li>
    <a href="/create-offer" id="create-offer-link">Create a offer</a>
    </li>
    `
}