// declaring the variables from the html page

const verifyNumber = document.getElementById("confirm")
const inputNumber = document.getElementById("number")
const inputName = document.getElementById("name")
const msgBox = document.getElementById("msgBox")


// Getting the input from the form by preventing default submissing
const numberConversion = function (e) {
    e.preventDefault();
    let customerName = inputName.value;
    let customerNo = inputNumber.value;
    const numberString = customerNo.toString().slice(0, 4);
    // Applying the logic to dictate the network provider
    // 0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903 and 0906
    if (numberString == "0703" || numberString == "0704" || numberString == "0706" || numberString == "0803" || numberString == "0806" || numberString == "0810" || numberString == "0813" || numberString == "0814" || numberString == "0816" || numberString == "0903" || numberString == "0906") {
        let textHolder = document.createElement("p").innerText = `Hey ${customerName}, your phone number is an MTN number`;
        const mtnImg = document.createElement("IMG");
        mtnImg.setAttribute("src", "https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png");
        mtnImg.setAttribute("alt", "mtn logo");
        let br = document.createElement("br")
        msgBox.append(textHolder);
        msgBox.append(mtnImg);
        msgBox.append(br)
        inputNumber.value = "";
        inputName.value = "";
    }

    else if (numberString == "0705" || numberString == "0805" || numberString == "0807" || numberString == "0811" || numberString == "0815" || numberString == "0905") {
        let textHolder = document.createElement("p").innerText = `Hey ${customerName}, your phone number is a Glo number`;
        const gloImg = document.createElement("IMG");
        gloImg.setAttribute("src", "https://i.pinimg.com/originals/6d/3b/84/6d3b84e3dde217e76502c6f89cf7d08b.png");
        gloImg.setAttribute("alt", "glo logo");        
        let br = document.createElement("br")
        msgBox.append(textHolder);
        msgBox.append(gloImg)
        msgBox.append(br)
        inputName.value = "";
        inputNumber.value = "";
    }

    else if (numberString == "0701" || numberString == "0708" || numberString == "0802" || numberString == "0808" || numberString == "0812" || numberString == "0902" || numberString == "0904" || numberString == "0907") {
        let textHolder = document.createElement("p").innerText = `Hey ${customerName}, your phone number is an Airtel number`;
        const airtelImg = document.createElement("IMG");
        airtelImg.setAttribute("src", "https://logos-download.com/wp-content/uploads/2016/07/Airtel_logo_logotype_emblem.png");
        airtelImg.setAttribute("alt", "airtel logo");        
        let br = document.createElement("br")
        msgBox.append(textHolder);
        msgBox.append(airtelImg)
        msgBox.append(br)
        inputName.value = "";
        inputNumber.value = "";
    }

    else if (numberString == "0809" || numberString == "0817" | numberString == "0818" || numberString == "0908" || numberString == "0909") {
        let textHolder = document.createElement("p").innerText = `Hey ${customerName}, your phone number is an Etisalat number`;
        const etisalatImg = document.createElement("IMG");
        etisalatImg.setAttribute("src", "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png");
        etisalatImg.setAttribute("alt", "airtel logo");        
        let br = document.createElement("br")
        msgBox.append(textHolder);
        msgBox.append(etisalatImg)
        msgBox.append(br)
        inputName.value = "";
        inputNumber.value = "";
    } else {
        let textHolder = document.createElement("p").innerText = `Hey ${customerName}, this phone number is Invalid or not registered!!!`;
        // console.log(textHolder);
        let br = document.createElement("br")
        const verifiedMsg = msgBox.append(textHolder);
        msgBox.append(br)
        inputName.value = "";
        inputNumber.value = "";
    }
}

verifyNumber.addEventListener("submit", numberConversion)
