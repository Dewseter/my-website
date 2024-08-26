<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        function submitForm() {
            // Get form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var freightType = document.getElementById("freight-type").value;
            var city = document.getElementById("city").value;
            var incoterms = document.getElementById("incoterms").value;
            var weight = document.getElementById("weight").value;
            var height = document.getElementById("height").value;
            var width = document.getElementById("width").value;
            var length = document.getElementById("length").value;
            var extraServices = [];
            var radios = document.getElementsByName("radio");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    extraServices.push(radios[i].value);
                }
            }

            // Create a confirmation message
            var message = "**Form Submission**\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nFreight Type: " + freightType + "\nCity: " + city + "\nIncoterms: " + incoterms + "\nWeight: " + weight + "\nHeight: " + height + "\nWidth: " + width + "\nLength: " + length + "\nExtra Services: " + extraServices.join(", ");

            // Display the confirmation message
            alert(message);

            // Send form data to server using AJAX
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "your-server-script.php", true); // Replace "your-server-script.php" with the actual path to your server-side script
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Handle response from server here
                    console.log(xhr.responseText);
                }
            };
            var formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            // Add other form fields to formData as needed
            xhr.send(formData);
        }
    </script>
</head>
<body>
    </body>
</html>