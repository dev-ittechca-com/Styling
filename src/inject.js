var styleElement = document.getElementById("styling-id");
styleElement = document.createElement("style");
styleElement.setAttribute("id", "styling-id");
styleElement.setAttribute("class", "styling");
styleElement.setAttribute("type", "text/css");
styleElement.appendChild(document.createTextNode(sections.map(function (section) {
    return "body { background-color: yellow; }";
}).join("\n")));
g_styleElements[styleElement.id] = styleElement;
document.documentElement.appendChild(document.importNode(styleElement, true)).disabled = g_disableAll;