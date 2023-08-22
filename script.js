function generateRandomPassword(length) {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
            let password = "";
        
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }

            return password;
        }

        const generateButton = document.getElementById("generateButton");
        const passwordDisplay = document.getElementById("passwordDisplay");

        generateButton.addEventListener("click", function() {
            const passwordLength = 12;
            const randomPassword = generateRandomPassword(passwordLength);
            passwordDisplay.value = randomPassword;
        });
