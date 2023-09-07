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

export const navTemplateUser = () => html`
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
    <a href="/my-profile" id="profile-link">My Profile</a>
    </li>
    <li>
    <a href="/logout" id="logout-btn">Logout<a>
    </li>
</ul>
</nav>
`

export const navTemplateMod = () => html`
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
    <a href="/my-profile" id="profile-link">My Profile</a>
    </li>
    <li>
    <a href="/adm-dashboard" id="dashboard-link">Admin Dashboard</a>
    </li>
    <li>
    <a href="/logout" id="logout-btn">Logout<a>
    </li>
</ul>
</nav>
`