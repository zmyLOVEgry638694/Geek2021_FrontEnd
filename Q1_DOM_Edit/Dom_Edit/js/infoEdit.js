function initEditor(tag, tagName) {
    TagEditing = tag;

    let tagAttrs;
    for (var i = 0; i < DomListInfo.length; i++) {
        if (DomListInfo[i].name === tagName) {
            tagAttrs = DomListInfo[i];
            break;
        }
    }
    appendItem(tagAttrs);
}

let appendItem = (tagAttrs) => {
    let editorPage = document.getElementById("attrEditAttr");

    editorPage.innerHTML = "";

    //*******************属性编辑部分*******************
    let attrPart = document.createElement("div");
    attrPart.classList.add("part");

    let titleA = document.createElement("h5");
    titleA.innerHTML = "属性";
    attrPart.append(titleA);
    attrPart.append(getTagAttr({ name: "id" }));

    for (var i = 0; i < tagAttrs.attrs.length; i++) {

        let itemTemp = getTagAttr(tagAttrs.attrs[i]);
        itemTemp.classList.add("attrsItem");
        attrPart.append(itemTemp);
    }
    editorPage.append(attrPart);

    //*******************样式编辑部分*******************
    let stylePart = document.createElement("div");
    stylePart.classList.add("part");

    let titleS = document.createElement("h5");
    titleS.innerHTML = "样式";
    stylePart.append(titleS);

    for (var i = 0; i < tagAttrs.style.length; i++) {

        let itemTemp = getTagStyle(tagAttrs.style[i]);
        itemTemp.classList.add("styleItem");
        stylePart.append(itemTemp);

    }
    editorPage.append(stylePart);

    //*******************事件编辑*******************
    // let eventPart = document.createElement("div");
    // for (var i = 0; i < tagAttrs.event.length; i++) {
    //     tagAttrs.event[i];

    // }
    // editorPage.append(eventPart);

    //*******************内联html编辑*******************
    // let htmlPart = document.createElement("div");
    // htmlPart.classList.add("part");

    // let titleH = document.createElement("h5");
    // titleH.innerHTML = "HTML";
    // let htmlCode = document.createElement("textarea");
    // htmlCode.classList.add("htmlArea");
    // htmlCode.innerHTML = TagEditing.innerHTML;
    // htmlPart.append(titleH);
    // htmlPart.append(htmlCode);
    // editorPage.append(htmlPart);

}

let getTagAttr = (tagAttr) => {

    let itemTemp = document.createElement("div");
    itemTemp.id = tagAttr.name;

    let labelTemp = document.createElement("label");
    let inputTemp = document.createElement("input");
    labelTemp.innerHTML = tagAttr.name;
    inputTemp.value = TagEditing.getAttribute(tagAttr.name);

    itemTemp.append(labelTemp);
    itemTemp.append(inputTemp);

    return itemTemp;

}

let getTagStyle = (tagStyle) => {

    let itemTemp = document.createElement("div");
    itemTemp.id = tagStyle.name;

    let labelTemp = document.createElement("label");
    let inputTemp = document.createElement("input");
    labelTemp.innerHTML = tagStyle.name;

    inputTemp.value = window.getComputedStyle(TagEditing)[tagStyle.name];

    itemTemp.append(labelTemp);
    itemTemp.append(inputTemp);

    return itemTemp;

}

let del = () => {
    TagEditing.remove();
}

let save = () => {
    saveAttr();
    saveStyle();
    alert("保存成功！");
}

let saveAttr = () => {
    let lists = document.getElementsByClassName("attrsItem");
    Array.prototype.forEach.call(lists, function(item) {
        if (item.getElementsByTagName("input")[0].value !== null && item.getElementsByTagName("input")[0].value !== "") {
            TagEditing.setAttribute(item.id, item.getElementsByTagName("input")[0].value);
        }
    });
};

let saveStyle = () => {
    let lists = document.getElementsByClassName("styleItem");
    Array.prototype.forEach.call(lists, function(item) {
        if (item.getElementsByTagName("input")[0].value !== null && item.getElementsByTagName("input")[0].value !== "") {
            TagEditing.style.setProperty(item.id, item.getElementsByTagName("input")[0].value)
        }
    });
};