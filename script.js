function cleanUpIndex() {
    let nodes = document.querySelectorAll(".contact")
    //remove all unique elements with class "contact"
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}

function createSingleIndex(name) {
    let parent = document.querySelector(".main"); // get parent
    // create child node
    let child = document.createElement("a");
    child.href = "page3.html";
    let contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    let childName = document.createElement("p");
    childName.textContent = name;
    child.appendChild(contactDiv);
    contactDiv.appendChild(childName);

    // add child to parent
    parent.appendChild(child);

}

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

// contacts - list of contacts to display
function renderIndex(contacts){
    let parent = document.querySelector(".main")

    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i]
        createSingleIndex(contact.name)
    }
}

function cleanUpView() {
    let nodes = document.querySelectorAll(".contactinfo")
    //remove all unique elements with class "contactinfo"
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}