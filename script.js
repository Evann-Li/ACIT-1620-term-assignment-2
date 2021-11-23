function cleanUpIndex() {
    let nodes = document.querySelectorAll(".contact")
    //remove all unique elements with class "contact"
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}