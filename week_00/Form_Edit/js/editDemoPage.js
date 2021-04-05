let addDomNode = (TagName, parentNode) => {
    console.log(`创建标签${TagName}！！！！`);

    //简单初始化，后续使用initTag依据json文件显示

    if ($(parentNode).hasClass(TagName)) {
        parentNode = $(parentNode).parent();
    }

    let tag = initTag(TagName, parentNode);

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


let initEditorZ = (tag, TagName) => {
    // window.top.document.parent
    window.parent.initEditor(tag, TagName);
}