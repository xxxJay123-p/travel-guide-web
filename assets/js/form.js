function submitContactForm() {
  // Get form elements
  var name = document.querySelector('.input[placeholder="Name"]').value;
  var email = document.querySelector('.input[placeholder="Email"]').value;
  var message = document.getElementById("message").value;

  // Create a JavaScript object with form data
  var formData = {
    name: name,
    email: email,
    message: message,
  };

  if (!isValidEmail(email)) {
    console.error("Invalid email format. Please enter a valid email address.");
    return;
  }
  // Display the form data in the console
  console.log("Form Data:", formData);

  // Update the following line with your server endpoint
  // sendFormDataToServer(formData);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to send form data to the server
function sendFormDataToServer(formData) {
  // fetch('/your-server-endpoint', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(formData)
  // })
  // .then(response => response.json())
  // .then(data => console.log('Server Response:', data))
  // .catch(error => console.error('Error:', error));
}

// // Function called when protobuf.js is loaded
// function protobufLoaded() {
//   const protoMessage = {
//     fieldsArray: [
//       { name: "name", type: "string", id: 1 },
//       { name: "email", type: "string", id: 2 },
//       { name: "message", type: "string", id: 3 },
//     ],
//   };

//   // Create a Protobuf root object
//   const root = protobuf.Root.fromJSON({ nested: { YourMessage: protoMessage } });
//   const YourMessage = root.lookupType("YourMessage");

//   if (!YourMessage) {
//     console.error("Failed to look up type YourMessage");
//     return;
//   }

//   // Attach the submitForm function to the global scope
//   window.submitForm = function () {
//     const name = document.querySelector('.input[placeholder="Name"]').value;
//     const email = document.querySelector('.input[placeholder="Email"]').value;
//     const message = document.getElementById("message").value;

//     // Check if required fields are not empty
//     if (!name || !email || !message) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Encode form data as a Protobuf file
//     const data = YourMessage.encode({ name, email, message }).finish();

//     // Create a Blob from the encoded data
//     const blob = new Blob([data], { type: "application/octet-stream" });

//     // Create a download link
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "formData.proto"; // Set the desired filename
//     a.style.display = "none";

//     // Append the link to the body and click it programmatically
//     document.body.appendChild(a);
//     a.click();

//     // Clean up
//     document.body.removeChild(a);
//     URL.revokeObjectURL(a.href);
//   };
// }

// // Check if the protobuf script has finished loading
// const protobufScript = document.getElementById("protobuf-script");

// if (protobufScript) {
//   if (protobufScript.complete) {
//     // Script has already loaded
//     protobufLoaded();
//   } else {
//     // Script is still loading, add event listener
//     protobufScript.addEventListener("load", protobufLoaded);
//   }
// }
