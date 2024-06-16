// Simple login system
        const validUsername = 'admin';
        const validPassword = 'password123';

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === validUsername && password === validPassword) {
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('overlay').style.display = 'none';
                document.querySelector('.form-container').classList.remove('hidden');
            } else {
                alert('Invalid username or password');
            }
        });

        document.getElementById('loginButton').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        });

        document.getElementById('overlay').addEventListener('click', function() {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });

        // Form submission for acknowledgment generation
        document.getElementById('acknowledgmentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;

            document.getElementById('displayName').innerText = name;
            document.getElementById('displayEmail').innerText = email;
            document.getElementById('displayPhone').innerText = phone;
            document.getElementById('displayAddress').innerText = address;

            document.querySelector('.form-container').classList.add('hidden');
            document.getElementById('messageContainer').classList.remove('hidden');

            document.getElementById('sendEmailButton').onclick = function() {
                const subject = 'Payment Confirmation';
                const body = `Dear ${name},\n\nWe are pleased to inform you that we have received your payment. Below are your payment details:\n\nEmail: ${email}\nPhone Number: ${phone}\nAddress: ${address}\n\nIf you have any questions or need further assistance, please feel free to contact us.\n\nThank you for your prompt payment.\n\nBest regards,\nAAArtswithArtsBasy Team`;

                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
            };
        });
