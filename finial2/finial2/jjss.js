function copyContent(index) {
    var content = document.getElementById("elementToCopy" + index).outerHTML;
    localStorage.setItem("copiedContent" + index, content);
    alert("Item added Successfully! You can now go to the Cart page.");
}