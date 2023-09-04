import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const navTemplate = () => html`
    <div class="logo-container">
        <img src="static/logo.png" alt="logo"/>
    </div>
    <nav>
        <ul>
            <li>
               <a href="/"> Home </a>
            </li>
            <li>
               <a href="/catalog">Catalog</a>
            </li>
            <li>
            <a href="/login">Login</a>
            </li>
            <li>
            <a href="/register">Register<a>
            </li>
        </ul>
    </nav>
`