let addDomNode = (TagName, parentNode) => {
    console.log(`创建标签${TagName}！！！！`);

    let tag = document.createElement(TagName);
    tag.classList.add("showMode");

    //简单初始化，后续使用initTag依据json文件显示
    let sortNum = getTagCount(TagName) + 1;
    tag.id = `${TagName}_${sortNum}`;
    tag.innerHTML = `${TagName}_${sortNum}`;
    tag.draggable = "true";
    tag.setAttribute("contenteditable", "true");

    initTag();

    tag.addEventListener("dblclick", (event) => {
        //creatFloatWindow()
        event.stopPropagation();
        console.log(`编辑${tag.id}`);
        initEditorZ(tag, TagName);
    })



    parentNode.append(tag);
}


let getTagCount = (TagName) => {
    let list = document.getElementsByTagName(TagName);
    return list.length;
}

let initTag = (TagName, tag) => {

}

let initEditorZ = (tag, TagName) => {
    // window.top.document.parent
    window.parent.initEditor(tag, TagName);
}