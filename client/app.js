import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import {navMiddleware} from "./middlewares/navMiddleware.js";
import {homeViewInit} from "./middlewares/initViewAnims/homeViewInit.js"
import {loginView} from "./views/loginView.js";
import {registerView} from "./views/registerView.js";
import {loginViewInit} from "./middlewares/initViewAnims/loginViewInit.js";
import {registerViewInit} from "./middlewares/initViewAnims/registerViewInit.js";
import {preloadRegisterData} from "./middlewares/viewPreloads/registerPreload.js"
import {catalogView} from "./views/catalogView.js";
import {preloadLoginData} from "./middlewares/viewPreloads/loginPreload.js";
import { logout } from "./handlers/logoutHandler.js";

page(renderMiddleware)
page(navMiddleware)
page('/', homeView, homeViewInit)
page('/login', preloadLoginData, loginView, loginViewInit)
page('/register',preloadRegisterData, registerView, registerViewInit)
page('/logout', logout)
page('/catalog', catalogView)

page.start()