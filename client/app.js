import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import {navMiddleware} from "./middlewares/navMiddleware.js";
import {homeViewInit} from "./middlewares/initViewAnims/homeViewInit.js"
import {loginView} from "./views/loginView.js";
import {registerView} from "./views/registerView.js";
import {loginViewInit} from "./middlewares/initViewAnims/loginViewInit.js";

page(renderMiddleware)
page(navMiddleware)
page('/', homeView, homeViewInit)
page('/login', loginView, loginViewInit)
page('/register', registerView)

page.start()