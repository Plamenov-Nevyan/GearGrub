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
import {preloadHomeData} from "./middlewares/viewPreloads/homePreload.js";
import {preloadCatalogData} from "./middlewares/viewPreloads/catalogPreload.js";
import {catalogViewInit} from "./middlewares/initViewAnims/catalogViewInit.js";
import {createView} from "./views/createView.js";
import {createViewInit} from "./middlewares/initViewAnims/createViewInit.js";
import {preloadCreateData} from "./middlewares/viewPreloads/createPreload.js";
import {preloadDetailsData} from "./middlewares/viewPreloads/detailsPreload.js";
import {detailsView} from "./views/detailsView.js";
import {detailsViewInit} from "./middlewares/initViewAnims/detailsViewInit.js";
import {preloadEditData} from "./middlewares/viewPreloads/editPreload.js";
import {editView} from "./views/editView.js";
import {editViewInit} from "./middlewares/initViewAnims/editViewInit.js";

page(renderMiddleware)
page(navMiddleware)
page('/', preloadHomeData, homeView, homeViewInit)
page('/login', preloadLoginData, loginView, loginViewInit)
page('/register',preloadRegisterData, registerView, registerViewInit)
page('/logout', logout)
page('/catalog', preloadCatalogData, catalogView, catalogViewInit)
page('/create-offer', preloadCreateData, createView, createViewInit)
page ('/details/:productId', preloadDetailsData, detailsView, detailsViewInit)
page('/edit/:productId', preloadEditData, editView, editViewInit)
page.start()