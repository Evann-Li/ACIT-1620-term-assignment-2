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

function renderView(contacts){
    let parent = document.querySelector(".main")
    let child = document.createElement("div");
    child.className = "contactinfo";
    let childName = document.createElement("div");
    childName.className = "contactname";
    childName.textContent = contacts.name;
    let pic = document.createElement("img");
    pic.className = "profilepic";
    pic.src="./img/profile.jpg";
    pic.alt = "Profile Picture";
    let childEmail = document.createElement("div");
    childEmail.className = "contactemail";
    childEmail.textContent = "email: " + contacts.email;
    let childPhone = document.createElement("div");
    childPhone.className = "contactphone";
    childPhone.textContent = "phone: " + contacts.phone;
    let childAddress = document.createElement("div");
    childAddress.className = "contactaddress";
    childAddress.textContent = "address: " + contacts.address;
    let buttons = document.createElement("div")
    buttons.className = "buttons"
    let childEditButton = document.createElement("button");
    childEditButton.className = "button edit";
    childEditButton.textContent = "Edit";
    let childCloseButton = document.createElement("button");
    childCloseButton.className = "button close";
    childCloseButton.textContent = "Close";

    //append all children into their respective spots and ultimately into the child
    childName.appendChild(pic)
    child.appendChild(childName)
    child.appendChild(childEmail)
    child.appendChild(childPhone)
    child.appendChild(childAddress)
    buttons.append(childEditButton)
    buttons.appendChild(childCloseButton)
    child.appendChild(buttons)
    //append the final version of the child to the parent
    parent.appendChild(child);
}

function cleanUpCreate() {
    let nodes = document.querySelectorAll(".contactedit");
    //remove all unique elements with class "contactedit"
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove()
    }
}