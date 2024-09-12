function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = document.getElementById('quote-form');
    const name = encodeURIComponent(form.name.value.trim());
    const email = form.email.value.trim(); // Do not encode the email address
    const phone = encodeURIComponent(form.phone.value.trim());
    const company = encodeURIComponent(form.company.value.trim());
    const message = encodeURIComponent(form.message.value.trim());
  
    // Create subject and body for the email
    const subject = `New Quote Request from ${name}`;
    const body = `Name: ${decodeURIComponent(name)}\nEmail: ${email}\nPhone: ${decodeURIComponent(phone)}\nCompany: ${decodeURIComponent(company)}\nMessage: ${decodeURIComponent(message)}`;
  
    // Adjust the mailto address to your preferred recipient
    const recipient = 'info@electroplatingautomation.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
  
    // Open the default email client
    window.location.href = mailtoLink;
  
    // Optionally, show a success message
    document.querySelector('.out-message').innerText = 'Your email client has been opened to send your request.';
  }