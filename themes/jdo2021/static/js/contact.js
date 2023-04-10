function sendMessage() {
    this.success = false;
    this.failed = false;
    this.invalid = false;

    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

    if (emailField.value.trim() === '') {
        this.invalid = true;
        emailField.focus();
        return false;
    }

    if (messageField.value.trim() === '') {
        this.invalid = true;
        document.querySelector('#email').focus();
        return false;
    }

    const form = document.querySelector('#contactForm');
    const data = new FormData(form);
    const message = {};
    for (let [key, value] of data) {
        message[key] = value;
    }

    const messageSent = function() {
        this.success = true;
        messageField.value = '';
        messageField.focus();
    }.bind(this);

    const messageFailed = function() {
        this.failed = true;
        nameField.focus();
    }.bind(this);

    fetch('/api/contact', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    }).then((response) => {
        if (response.ok) {
            messageSent();
        } else {
            messageFailed();
        }
    }).catch(() => {
        messageFailed();
    });
}
