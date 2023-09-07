import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import {navMiddleware} from "./middlewares/navMiddleware.js";
import {homeViewInit} from "./middlewares/initViewAnims/homeViewInit.js"
import {loginView} from "./views/loginView.js";
import {registerView} from "./views/registerView.js";
import {loginViewInit} from "./middlewares/initViewAnims/loginViewInit.js";
import {registerViewInit} from "./middlewares/initViewAnims/registerViewInit.js";
import {preloadRegisterData} from "./middlewares/viewPreloads/registerPreload.js"

page(renderMiddleware)
page(navMiddleware)
page('/', homeView, homeViewInit)
page('/login', loginView, loginViewInit)
page('/register',preloadRegisterData, registerView, registerViewInit)

page.start()