let initTag = (TagName, parentNode) => {
    let tagAttrs;

    for (var i = 0; i < DomListInfo.length; i++) {
        if (DomListInfo[i].name === TagName) {
            tagAttrs = DomListInfo[i]
            break;
        }
    }

    //依据json中data获取默认参数
    let tagZ = document.createElement(tagAttrs.nodeType);
    tagZ.id = TagName;
    tagZ.classList.add(TagName);

    for (let index in tagAttrs.style) {
        tagZ.style.setProperty(tagAttrs.style[index].target, tagAttrs.style[index].default);
    }
    if (tagAttrs.attrs) {
        for (let index in tagAttrs.attrs) {
            tagZ.setAttribute(tagAttrs.attrs[index].target, tagAttrs.attrs[index].default);
        }
    }


    //如果有attrs判断不是基础组件，选择相应模板进行加载
    if (tagAttrs.props) {
        let templateTag = templeteList[TagName];
        let prop = {};
        for (let index in tagAttrs.props) {
            prop[tagAttrs.props[index].target] = tagAttrs.props[index].default;
        }
        tagZ.innerHTML = Mustache.render(templateTag, { "prop": prop });
    }


    return tagZ;

}