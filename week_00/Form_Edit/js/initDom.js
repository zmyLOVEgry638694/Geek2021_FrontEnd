function initDom(HTML_Tags) {
    for (var i = 0; i < HTML_Tags.length; i++) {
        initDomMenu(HTML_Tags[i]);
    };
}

function initDomMenu(Tag) {
    // DomMenu
    let item = document.createElement("li");
    item.innerHTML = Tag.name;
    let menu = document.getElementById("DomMenu");
    menu.append(item);

    for (var i = 0; i < Tag.labels.length; i++) {
        addDomTags(Tag.labels[i]);
    };

    item.addEventListener("click", function() {
        scrollToZ(Tag.labels[0][0]);
    });
}

function addDomTags(label) {

    let Tag = document.createElement("li");
    Tag.id = label[0];
    Tag.innerHTML = label[1];
    Tag.draggable = "true";
    Tag.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("TagName", Tag.id);
    })

    let DomTags = document.getElementById("DomTags");
    DomTags.append(Tag);
}

function scrollToZ(id) {

    let tag = document.querySelector("li#" + id);
    tag.scrollIntoView({ block: "start", behavior: "smooth" });
    // DomTags.scrollTo(166, tag.offsetTop);

}