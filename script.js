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

function renderCreate(contact){
    let parent = document.querySelector(".main");
    let child = document.createElement("div");
    child.className = "contactedit";
    let contactImg = document.createElement("div");
    contactImg.className = "contactimg";
    let pic = document.createElement("img");
    pic.src="./img/profile.jpg";
    pic.className = "profilepic";
    pic.alt = "Profile Picture";
    let formDiv = document.createElement("div");
    formDiv.className = "form";
    let form = document.createElement("form");

    //form for contact name
    let contactName = document.createElement("div");
    contactName.className = "inputcontainer";
    let inputContactName = document.createElement("input");
    inputContactName.setAttribute("type", "text");
    inputContactName.setAttribute("id", "contactname");
    inputContactName.setAttribute("name", "contactname");
    inputContactName.setAttribute("placeholder", "Contact Name");
    let contactNameButton = document.createElement("button");
    contactNameButton.setAttribute("class", "extrafield");
    contactNameButton.setAttribute("id", "extranamefield");
    contactNameButton.setAttribute("name", "extranamefield");
    contactNameButton.textContent = "+";
    
    //form for contact phone
    let contactPhone = document.createElement("div");
    contactPhone.className = "inputcontainer";
    let inputContactPhone = document.createElement("input");
    inputContactPhone.setAttribute("type", "tel");
    inputContactPhone.setAttribute("name", "contactphone");
    inputContactPhone.setAttribute("placeholder", "Contact Phone");
    inputContactPhone.setAttribute("id", "contactphone");
    let contactPhoneButton = document.createElement("button");
    contactPhoneButton.setAttribute("class", "extrafield");
    contactPhoneButton.setAttribute("id", "extraphonefield");
    contactPhoneButton.setAttribute("name", "extraphonefield");
    contactPhoneButton.textContent = "+";

    //form for contact address
    let contactAddress = document.createElement("div");
    contactAddress.className = "inputcontainer";
    let inputContactAddress = document.createElement("input");
    inputContactAddress.setAttribute("type", "text");
    inputContactAddress.setAttribute("name", "contactaddress");
    inputContactAddress.setAttribute("placeholder", "Contact Address");
    inputContactAddress.setAttribute("id", "contactaddress");
    let contactAddressButton = document.createElement("button");
    contactAddressButton.setAttribute("class", "extrafield");
    contactAddressButton.setAttribute("id", "extraaddressfield");
    contactAddressButton.setAttribute("name", "extraaddressfield");
    contactAddressButton.textContent = "+";

    //form for contact email
    let contactEmail = document.createElement("div");
    contactEmail.className = "inputcontainer";
    let inputContactEmail = document.createElement("input");
    inputContactEmail.setAttribute("type", "email");
    inputContactEmail.setAttribute("name", "contactemail");
    inputContactEmail.setAttribute("placeholder", "Contact Email");
    inputContactEmail.setAttribute("id", "contactemail");
    let contactEmailButton = document.createElement("button");
    contactEmailButton.setAttribute("class", "extrafield");
    contactEmailButton.setAttribute("id", "extraemailfield");
    contactEmailButton.setAttribute("name", "extraemailfield");
    contactEmailButton.textContent = "+";

    //submit and cancel buttons
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "button save");
    submitButton.setAttribute("id", "savecontact");
    submitButton.setAttribute("name", "savecontact");
    submitButton.textContent = "Save Contact";
    let resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.setAttribute("class", "button cancel");
    resetButton.setAttribute("id", "cancel");
    resetButton.setAttribute("name", "cancel");
    resetButton.textContent = "Cancel";

    contactImg.appendChild(pic)
    child.appendChild(contactImg)
    contactName.appendChild(inputContactName)
    contactName.appendChild(contactNameButton)
    contactPhone.appendChild(inputContactPhone)
    contactPhone.appendChild(contactPhoneButton)
    contactAddress.appendChild(inputContactAddress)
    contactAddress.appendChild(contactAddressButton)
    contactEmail.appendChild(inputContactEmail)
    contactEmail.appendChild(contactEmailButton)
    buttons.appendChild(submitButton)
    buttons.appendChild(resetButton)

    form.appendChild(contactName)
    form.appendChild(contactPhone)
    form.appendChild(contactAddress)
    form.appendChild(contactEmail)
    form.appendChild(buttons)
    formDiv.appendChild(form)
    child.appendChild(formDiv)

    parent.appendChild(child)
}