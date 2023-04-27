/**
 *
 *  This holds the urls/srcs for the icons
 *
 */

import { CDNIconReturn } from "./CDNReturns";

const ICON_API = CDNIconReturn("tab-icons", "apple-touch-icon", "png");
const ICON_F16 = CDNIconReturn("tab-icons", "favicon-16x16", "png");
const ICON_F32 = CDNIconReturn("tab-icons", "favicon-32x32", "png");
const ICON_FAVICON = CDNIconReturn("tab-icons", "favicon", "ico");

export { ICON_API, ICON_F16, ICON_F32, ICON_FAVICON };
