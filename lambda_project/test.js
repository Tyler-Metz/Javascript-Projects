import AWS from './node_modules/aws-sdk';
const lambda = AWS.Lambda();

const testLog = () => {
    let inputButton = document.getElementById('inputButton');
    let inputField = document.getElementById('inputField');

    inputButton.addEventListener('click', (e) => {
        let inputFieldVal = inputField.value;
        alert(inputFieldVal);
        inputField.value = "";
        
        AWS.config.getCredentials(function(err) {
            if (err) console.log(err.stack);
            // credentials not loaded
            else {
              console.log("Access key:", AWS.config.credentials.accessKeyId);
            }
          });
    })
}

export {testLog}